import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmes & Services | WASIM",
  description: "Explore the programmes and services offered by the West African Society of Integrative Medicine (WASIM).",
};

export default function ProgrammesPage() {
  return (
    <main>
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">Programmes & Services</h1>
          <p className="mt-2 text-lg">Our Offerings for Professionals and the Community</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Overview of Our Offerings</h2>
          </div>
          <p className="mx-auto max-w-3xl text-center mb-12">
            WASIM offers a range of programmes and services designed to support healthcare professionals, researchers, and the wider community in understanding and utilizing integrative medicine practices. Our initiatives focus on education, research support, and fostering collaboration.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="h-48 bg-muted bg-[url('/images/programme1-placeholder.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Professional Development Workshops</h3>
                <p className="mb-4">Regular workshops covering various aspects of integrative medicine, from foundational principles to specific therapeutic modalities.</p>
                <Link href="#" className="btn btn-accent">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="h-48 bg-muted bg-[url('/images/programme2-placeholder.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Research Support Grants</h3>
                <p className="mb-4">Funding opportunities for researchers investigating integrative medicine practices within the West African context.</p>
                <Link href="#" className="btn btn-accent">
                  View Details
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="h-48 bg-muted bg-[url('/images/programme3-placeholder.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Community Health Seminars</h3>
                <p className="mb-4">Public seminars aimed at educating the community about the benefits and applications of integrative health approaches.</p>
                <Link href="#" className="btn btn-accent">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="h-48 bg-muted"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Mentorship Programme</h3>
                <p className="mb-4">Connecting experienced practitioners with newcomers to the field for guidance and support. (Details coming soon)</p>
                <Link href="#" className="btn btn-accent">
                  View Details
                </Link>
              </div>
            </div>
            
            <div className="card">
              <div className="h-48 bg-muted"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">Online Resource Library</h3>
                <p className="mb-4">Access to a curated collection of articles, research papers, and educational materials for members. (Details coming soon)</p>
                <Link href="#" className="btn btn-accent">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Featured Programme: [Programme Name]</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4">Detailed description of a specific programme or service offered by WASIM. This section will provide in-depth information about objectives, target audience, schedule, and how to participate.</p>
            <p className="mb-4">Placeholder content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
