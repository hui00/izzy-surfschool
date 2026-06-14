import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const configuredPlaceId = process.env.GOOGLE_PLACE_ID;
const query =
  process.env.GOOGLE_PLACE_QUERY ||
  "Izzy Surf School Lombok Kabupaten Lombok Barat";
const outputPath =
  process.env.GOOGLE_REVIEWS_OUTPUT ||
  "src/data/google-reviews.json";

if (!apiKey) {
  throw new Error("Missing GOOGLE_MAPS_API_KEY.");
}

const fields = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
].join(",");

const requestJson = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": options.fieldMask || fields,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Google Places request failed: ${response.status} ${body}`);
  }

  return response.json();
};

const findPlaceId = async () => {
  if (configuredPlaceId) {
    return configuredPlaceId;
  }

  const data = await requestJson(
    "https://places.googleapis.com/v1/places:searchText",
    {
      method: "POST",
      fieldMask: "places.id,places.displayName,places.googleMapsUri",
      body: JSON.stringify({
        textQuery: query,
        languageCode: "en",
        maxResultCount: 1,
      }),
    }
  );

  const place = data.places?.[0];
  if (!place?.id) {
    throw new Error(`No Google place found for query: ${query}`);
  }

  return place.id;
};

const reviewText = (review) =>
  review?.text?.text ||
  review?.originalText?.text ||
  "";

const normalizeReview = (review) => ({
  author: review?.authorAttribution?.displayName || "Google reviewer",
  rating: review?.rating || 5,
  date: review?.relativePublishTimeDescription || "",
  text: reviewText(review),
  uri: review?.authorAttribution?.uri || "",
});

const placeId = await findPlaceId();
const place = await requestJson(
  `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`
);

const reviews = (place.reviews || [])
  .map(normalizeReview)
  .filter((review) => review.text)
  .slice(0, 5);

if (!reviews.length) {
  throw new Error("Google Places returned no reviews.");
}

const payload = {
  source: "Google Maps",
  placeId,
  googleMapsUri:
    place.googleMapsUri ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
  rating: place.rating || 5,
  reviewCount: place.userRatingCount || reviews.length,
  updatedAt: new Date().toISOString(),
  reviews,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(
  `Updated ${outputPath} with ${reviews.length} reviews for ${place.displayName?.text || placeId}.`
);
