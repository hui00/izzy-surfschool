import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SurfSection from "@/components/sections/SurfSection";
import AboutSection from "@/components/sections/AboutSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { whatsappUrl } from "@/lib/contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SurfSection />
        <PricingSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <div>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.817 11.817 0 0012.04 0C5.4 0 .04 5.36.04 12a11.9 11.9 0 001.6 5.9L0 24l6.28-1.64a11.928 11.928 0 005.76 1.46c6.64 0 12-5.36 12-12 0-3.2-1.24-6.2-3.52-8.52zm-8.48 18a9.92 9.92 0 01-5.12-1.44l-.36-.2-3.72.96.98-3.62-.24-.38A9.913 9.913 0 012.04 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.56c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.36.23-.66.08a8.28 8.28 0 01-2.42-1.5 9.12 9.12 0 01-1.68-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.38s-1.05 1.03-1.05 2.52 1.08 2.92 1.24 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.04-1.43.25-.7.25-1.3.18-1.42-.07-.13-.26-.2-.56-.35z" />
            </svg>
        </a>
      </div>


      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
