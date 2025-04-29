"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
    // Optionally trigger analytics initialization here if needed after consent
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
    // Handle decline logic if necessary (e.g., disable certain tracking)
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-foreground p-4 text-background shadow-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">
          We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies. 
          <Link href="/privacy-policy" className="ml-1 underline hover:text-secondary">
            Learn more
          </Link>.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept} 
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Accept
          </button>
          <button 
            onClick={handleDecline} 
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
