export const PHONE_DISPLAY = "+62 819 1701 8103";
export const WHATSAPP_NUMBER = "6281917018103";

export const whatsappUrl = (message = "Hi Yus, I would like to book a surf lesson in Senggigi.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
