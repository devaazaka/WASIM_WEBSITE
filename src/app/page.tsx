import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { generateMetadata, generateOrganizationSchema } from "@/lib/seo";
import { generateBlurPlaceholder } from "@/lib/imageLoader";

// Generate metadata for the homepage
export const metadata = generateMetadata(
  "West African Society of Integrative Medicine (WASIM)",
  "The West African Society of Integrative Medicine (WASIM) promotes integrative medicine practices across West Africa through education, research, and community.",
  "/"
);

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-20 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Advancing Integrative Medicine Across West Africa
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg">
            The West African Society of Integrative Medicine (WASIM) is dedicated to promoting the practice, research, and education of integrative medicine throughout the West African region.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/practitioners" className="btn btn-secondary">
              Find a Practitioner
            </Link>
            <Link href="/membership" className="btn bg-white text-primary hover:bg-white/90">
              Join WASIM
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Our Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/education-placeholder.jpg" 
                  alt="Education & Training" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Education & Training</h3>
                <p className="mb-4">We provide educational resources and training opportunities for healthcare professionals interested in integrative medicine approaches.</p>
                <Link href="/programmes" className="btn btn-accent">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/research-placeholder.jpg" 
                  alt="Research & Evidence" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Research & Evidence</h3>
                <p className="mb-4">We promote research and evidence-based practices in integrative medicine to enhance healthcare outcomes across West Africa.</p>
                <Link href="/programmes" className="btn btn-accent">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/community-placeholder.jpg" 
                  alt="Community & Collaboration" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Community & Collaboration</h3>
                <p className="mb-4">We foster a community of practitioners and researchers dedicated to advancing integrative medicine in the region.</p>
                <Link href="/membership" className="btn btn-accent">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">About WASIM</h2>
              <p className="mb-4">
                The West African Society of Integrative Medicine (WASIM) is a professional organization dedicated to advancing the practice, research, and education of integrative medicine throughout West Africa.
              </p>
              <p className="mb-4">
                Our mission is to promote evidence-based integrative medicine approaches that combine conventional medical practices with traditional healing methods, focusing on the whole person—body, mind, and spirit—in the quest for optimal health and wellness.
              </p>
              <p className="mb-6">
                Through collaboration, education, and advocacy, we aim to improve healthcare outcomes and accessibility across the diverse communities of West Africa.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg relative aspect-video">
              <Image 
                src="/images/about-placeholder.jpg" 
                alt="Healthcare professionals collaborating" 
                fill
                style={{objectFit: "cover"}}
                placeholder="blur"
                blurDataURL={generateBlurPlaceholder(600, 400)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/event1-placeholder.jpg" 
                  alt="Annual WASIM Conference" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-accent font-semibold">June 15-16, 2025</div>
                <h3 className="mb-3 text-xl font-semibold">Annual WASIM Conference</h3>
                <p className="mb-4 text-sm">Join us for our annual conference featuring keynote speakers, workshops, and networking opportunities.</p>
                <Link href="/events" className="btn btn-secondary">
                  Event Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/event2-placeholder.jpg" 
                  alt="Integrative Approaches to Chronic Disease" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-accent font-semibold">July 8, 2025</div>
                <h3 className="mb-3 text-xl font-semibold">Integrative Approaches to Chronic Disease</h3>
                <p className="mb-4 text-sm">A workshop exploring integrative medicine approaches to managing chronic diseases in West African contexts.</p>
                <Link href="/events" className="btn btn-secondary">
                  Event Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/images/event3-placeholder.jpg" 
                  alt="Traditional Medicine in Modern Practice" 
                  fill
                  style={{objectFit: "cover"}}
                  placeholder="blur"
                  blurDataURL={generateBlurPlaceholder(400, 300)}
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-accent font-semibold">August 22, 2025</div>
                <h3 className="mb-3 text-xl font-semibold">Traditional Medicine in Modern Practice</h3>
                <p className="mb-4 text-sm">A seminar on incorporating traditional West African healing practices into modern healthcare settings.</p>
                <Link href="/events" className="btn btn-secondary">
                  Event Details
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold text-white">What Our Members Say</h2>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <div className="p-8">
              <p className="mb-6 text-xl italic font-lora">
                "WASIM has provided me with invaluable resources and connections that have enhanced my practice of integrative medicine. The community of like-minded professionals is truly supportive."
              </p>
              <p className="font-semibold">Dr. Amina Koné, Integrative Medicine Practitioner</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-center">
            Subscribe to our newsletter to receive updates on events, research, and news in integrative medicine.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 rounded-md border border-input bg-white px-4 py-2"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
