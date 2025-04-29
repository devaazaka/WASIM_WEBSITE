import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Membership | WASIM",
  description: "Learn about the benefits of becoming a member of the West African Society of Integrative Medicine (WASIM) and how to join.",
};

export default function MembershipPage() {
  const benefits = [
    "Access to exclusive educational resources and research materials.",
    "Networking opportunities with leading practitioners and researchers.",
    "Discounted rates for WASIM conferences and workshops.",
    "Listing in the WASIM Practitioners Directory (for qualifying members).",
    "Opportunities to contribute to WASIM committees and initiatives.",
    "Subscription to the WASIM newsletter and publications.",
    "Supporting the advancement of integrative medicine in West Africa.",
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">Become a Member</h1>
          <p className="mt-2 text-lg">Join Our Community and Advance Integrative Medicine</p>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Why Join WASIM?</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Membership Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/membership-placeholder.jpg" 
                alt="Group of professionals networking" 
                width={600} 
                height={400} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Levels Section (Static Placeholder) */}
      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Membership Levels</h2>
          </div>
          <p className="text-center mb-8">We offer various membership levels to suit different professionals and students. (Detailed descriptions coming soon)</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Level Card */}
            <div className="card p-6 text-center border-t-4 border-primary">
              <h3 className="text-xl font-semibold mb-3">Professional Member</h3>
              <p className="text-gray-600 mb-4">For licensed healthcare practitioners and researchers.</p>
              <p className="text-2xl font-bold text-primary mb-4">$XXX / year</p>
              <Link href="#" className="btn btn-primary w-full">Learn More</Link>
            </div>
            <div className="card p-6 text-center border-t-4 border-secondary">
              <h3 className="text-xl font-semibold mb-3">Associate Member</h3>
              <p className="text-gray-600 mb-4">For allied health professionals and individuals interested in integrative medicine.</p>
              <p className="text-2xl font-bold text-secondary mb-4">$YYY / year</p>
              <Link href="#" className="btn btn-secondary w-full">Learn More</Link>
            </div>
            <div className="card p-6 text-center border-t-4 border-accent">
              <h3 className="text-xl font-semibold mb-3">Student Member</h3>
              <p className="text-gray-600 mb-4">For students enrolled in relevant healthcare or research programs.</p>
              <p className="text-2xl font-bold text-accent mb-4">$ZZZ / year</p>
              <Link href="#" className="btn btn-accent w-full">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section (Static) */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">How to Join</h2>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4">Joining WASIM is a straightforward process. As we are currently setting up our online systems, membership applications are handled manually.</p>
            <p className="mb-4">Please follow these steps:</p>
            <ol className="list-decimal list-inside text-left space-y-2 mb-6 mx-auto max-w-xl">
              <li>Download the Membership Application Form (Link placeholder).</li>
              <li>Complete the form with your details and select your desired membership level.</li>
              <li>Submit the completed form along with any required documentation (e.g., proof of licensure or student status) via email to <a href="mailto:membership@wasimwestafrica.org" className="text-primary hover:underline">membership@wasimwestafrica.org</a>.</li>
              <li>Our membership team will review your application and contact you regarding payment instructions and next steps.</li>
            </ol>
            <p>If you have any questions about the membership process, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.</p>
            {/* Placeholder for Application Form Download Link */}
            <div className="mt-8">
              <a href="#" className="btn btn-primary">Download Application Form (Placeholder)</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
