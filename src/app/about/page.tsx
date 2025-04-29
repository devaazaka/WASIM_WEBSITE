import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | WASIM",
  description: "Learn about the mission, vision, and team of the West African Society of Integrative Medicine (WASIM).",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">About WASIM</h1>
          <p className="mt-2 text-lg">Our Mission, Vision, and Commitment</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Mission & Vision</h2>
              <p className="mb-4">
                <strong>Mission:</strong> To promote evidence-based integrative medicine approaches that combine conventional medical practices with traditional healing methods, focusing on the whole person—body, mind, and spirit—in the quest for optimal health and wellness across West Africa.
              </p>
              <p className="mb-4">
                <strong>Vision:</strong> To be the leading organization fostering collaboration, education, and advocacy for integrative medicine, thereby improving healthcare outcomes and accessibility throughout the diverse communities of West Africa.
              </p>
              <p>
                We strive to create a healthcare landscape where integrative practices are recognized, respected, and accessible to all, contributing to the overall well-being of the region.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/mission-vision-placeholder.jpg" 
                alt="Diverse group of people collaborating" 
                width={600} 
                height={400} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section (Placeholder) */}
      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <p className="text-center mb-8">Meet the dedicated individuals leading WASIM. (Content coming soon)</p>
          {/* Placeholder for team member cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Team Member Card (Repeat as needed) */}
            <div className="card text-center p-6">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-300"></div>
              <h3 className="text-xl font-semibold">Team Member Name</h3>
              <p className="text-secondary">Role/Title</p>
            </div>
             <div className="card text-center p-6">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-300"></div>
              <h3 className="text-xl font-semibold">Team Member Name</h3>
              <p className="text-secondary">Role/Title</p>
            </div>
             <div className="card text-center p-6">
              <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-300"></div>
              <h3 className="text-xl font-semibold">Team Member Name</h3>
              <p className="text-secondary">Role/Title</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section (Placeholder) */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Our History</h2>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p>Learn about the journey of WASIM from its inception to its current role in promoting integrative medicine in West Africa. (Content coming soon)</p>
            {/* Placeholder for timeline or historical narrative */}
          </div>
        </div>
      </section>
    </div>
  );
}
