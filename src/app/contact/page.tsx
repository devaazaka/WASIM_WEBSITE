"use client";

import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/ContactForm"; // Import the ContactForm component

// Metadata needs to be defined outside the component for Next.js App Router
// export const metadata: Metadata = {
//   title: "Contact Us | WASIM",
//   description: "Get in touch with the West African Society of Integrative Medicine (WASIM). Find our contact details and send us a message.",
// };
// Note: Metadata export is commented out because this is a client component due to form state.
// Metadata should be handled in a parent server component or layout if needed.

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-2 text-lg">We Would Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details & Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-6">
                Have questions about WASIM, our programmes, membership, or events? Please reach out using the contact details below or fill out the contact form.
              </p>
              <div className="space-y-4 mb-8">
                <p className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                  <span>123 Main Street, City, Country (Placeholder Address)</span>
                </p>
                <p className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-primary" />
                  <span>+123-456-7890 (Placeholder Phone)</span>
                </p>
                <p className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                  <span>info@wasimwestafrica.org</span>
                </p>
              </div>
              
              {/* Embedded Google Map Placeholder */}
              <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual Google Maps embed code */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322813!2d106.8195613735664!3d-6.1947413937924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1684900000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Placeholder"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm /> { /* Use the ContactForm component */ }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
