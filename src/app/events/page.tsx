import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | WASIM",
  description: "Find upcoming and past events hosted by the West African Society of Integrative Medicine (WASIM).",
};

export default function EventsPage() {
  // Placeholder event data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual WASIM Conference",
      date: "June 15-16, 2025",
      location: "Accra, Ghana (Hybrid)",
      description: "Join us for our annual conference featuring keynote speakers, workshops, and networking opportunities focused on the future of integrative medicine in West Africa.",
      image: "/images/event1-placeholder.jpg",
    },
    {
      id: 2,
      title: "Integrative Approaches to Chronic Disease",
      date: "July 8, 2025",
      location: "Online Workshop",
      description: "A workshop exploring evidence-based integrative medicine approaches to managing chronic diseases prevalent in West African contexts.",
      image: "/images/event2-placeholder.jpg",
    },
    {
      id: 3,
      title: "Traditional Medicine in Modern Practice",
      date: "August 22, 2025",
      location: "Lagos, Nigeria",
      description: "A seminar discussing the safe and effective integration of traditional West African healing practices into modern healthcare settings.",
      image: "/images/event3-placeholder.jpg",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Mindfulness & Stress Reduction Workshop",
      date: "April 10, 2025",
      location: "Online",
    },
    {
      id: 5,
      title: "Introduction to Herbal Medicine",
      date: "February 28, 2025",
      location: "Dakar, Senegal",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">Events</h1>
          <p className="mt-2 text-lg">Connect, Learn, and Grow with WASIM</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card">
                <div 
                  className="h-48 bg-muted bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="p-6">
                  <div className="mb-2 text-accent font-semibold">{event.date}</div>
                  <h3 className="mb-3 text-xl font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {event.location}</p>
                  <p className="mb-4 text-sm">{event.description}</p>
                  <Link href={`/events/${event.id}`} className="btn btn-secondary">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="section bg-muted">
        <div className="container">
          <div className="section-title">
            <h2 className="text-3xl font-bold">Past Events</h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-4">
              {pastEvents.map((event) => (
                <li key={event.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
                  </div>
                  <Link href={`/events/${event.id}`} className="text-primary hover:text-accent text-sm">
                    View Details
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link href="/events/archive" className="text-primary hover:underline">
                View Full Event Archive
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Placeholder for Individual Event Detail Page Structure */}
      {/* This would typically be a dynamic route like /events/[eventId]/page.tsx */}
      {/* 
      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-bold mb-4">[Event Title]</h1>
          <p className="text-accent font-semibold mb-2">[Event Date]</p>
          <p className="text-gray-600 mb-4"><strong>Location:</strong> [Event Location]</p>
          <div className="prose lg:prose-xl max-w-none">
            <p>Detailed event description goes here...</p>
            <p>Registration information, speaker bios, schedule, etc.</p>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
