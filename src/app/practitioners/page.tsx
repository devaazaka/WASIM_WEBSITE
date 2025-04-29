import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practitioners Directory | WASIM",
  description: "Find integrative medicine practitioners across West Africa in the WASIM directory.",
};

export default function PractitionersPage() {
  // Placeholder practitioner data
  const practitioners = [
    {
      id: 1,
      name: "Dr. Amina Koné",
      specialty: "Integrative Family Medicine",
      location: "Dakar, Senegal",
      languages: ["English", "French", "Wolof"],
    },
    {
      id: 2,
      name: "Dr. Emmanuel Osei",
      specialty: "Naturopathic Medicine",
      location: "Accra, Ghana",
      languages: ["English", "Twi"],
    },
    {
      id: 3,
      name: "Dr. Fatima Bello",
      specialty: "Integrative Oncology",
      location: "Lagos, Nigeria",
      languages: ["English", "Yoruba", "Hausa"],
    },
    {
      id: 4,
      name: "Dr. Jean-Pierre Touré",
      specialty: "Acupuncture & Traditional Medicine",
      location: "Abidjan, Côte d'Ivoire",
      languages: ["French", "Dioula"],
    },
    {
      id: 5,
      name: "Dr. Mariama Diallo",
      specialty: "Integrative Pediatrics",
      location: "Conakry, Guinea",
      languages: ["French", "Susu", "Pular"],
    },
    {
      id: 6,
      name: "Dr. Samuel Johnson",
      specialty: "Herbal Medicine & Nutrition",
      location: "Monrovia, Liberia",
      languages: ["English"],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">Practitioners Directory</h1>
          <p className="mt-2 text-lg">Find Integrative Medicine Practitioners Across West Africa</p>
        </div>
      </section>

      {/* Directory Introduction */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6">
              Our directory features qualified practitioners who are members of WASIM. This is a static listing for informational purposes only.
            </p>
            <p className="mb-6">
              <strong>Note:</strong> This is a placeholder directory. In a real implementation, this would include more detailed profiles, search functionality, and filtering options.
            </p>
            <div className="mb-8 p-4 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Disclaimer:</strong> WASIM provides this directory as a resource for individuals seeking integrative medicine practitioners. Inclusion in this directory does not constitute an endorsement by WASIM. Patients are encouraged to verify credentials and make informed decisions about their healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Listing */}
      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Our Practitioners</h2>
          </div>
          
          {/* Search and Filter (Placeholder) */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Search by name or specialty" 
                className="flex-1 rounded-md border border-input bg-white px-4 py-2"
              />
              <select className="rounded-md border border-input bg-white px-4 py-2">
                <option value="">All Locations</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
                <option value="senegal">Senegal</option>
                <option value="ivory-coast">Côte d'Ivoire</option>
                <option value="liberia">Liberia</option>
                <option value="guinea">Guinea</option>
              </select>
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
          
          {/* Practitioners Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practitioners.map((practitioner) => (
              <div key={practitioner.id} className="card p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                    {practitioner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{practitioner.name}</h3>
                    <p className="text-secondary">{practitioner.specialty}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Location:</strong> {practitioner.location}</p>
                  <p><strong>Languages:</strong> {practitioner.languages.join(', ')}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-muted">
                  <Link href="#" className="text-primary hover:text-accent transition-colors duration-300">
                    View Full Profile (Placeholder)
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination (Placeholder) */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md border border-input bg-white">Previous</button>
              <button className="px-4 py-2 rounded-md bg-primary text-white">1</button>
              <button className="px-4 py-2 rounded-md border border-input bg-white">2</button>
              <button className="px-4 py-2 rounded-md border border-input bg-white">3</button>
              <button className="px-4 py-2 rounded-md border border-input bg-white">Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Join as Practitioner CTA */}
      <section className="section">
        <div className="container">
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Are You an Integrative Medicine Practitioner?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join WASIM to be listed in our practitioners directory and connect with a community of like-minded professionals across West Africa.
            </p>
            <Link href="/membership" className="btn btn-primary">
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
