import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News & Updates | WASIM",
  description: "Stay informed with the latest news, articles, and updates from the West African Society of Integrative Medicine (WASIM).",
};

export default function NewsPage() {
  // Placeholder blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Growing Importance of Integrative Medicine in West Africa",
      date: "April 15, 2025",
      author: "Dr. Amina Koné",
      excerpt: "As healthcare challenges continue to evolve across West Africa, integrative medicine approaches offer promising solutions that combine conventional medical practices with traditional healing methods.",
      category: "Research",
      image: "/images/blog1-placeholder.jpg",
    },
    {
      id: 2,
      title: "Traditional Herbal Remedies: Evidence and Applications",
      date: "March 28, 2025",
      author: "Dr. Emmanuel Osei",
      excerpt: "This article explores the scientific evidence behind several traditional herbal remedies commonly used across West Africa and discusses their potential applications in modern healthcare settings.",
      category: "Education",
      image: "/images/blog2-placeholder.jpg",
    },
    {
      id: 3,
      title: "WASIM Partners with Regional Universities for Research Initiative",
      date: "March 10, 2025",
      author: "WASIM Secretariat",
      excerpt: "WASIM has established partnerships with five major universities across West Africa to launch a collaborative research initiative focused on integrative approaches to common health conditions.",
      category: "Announcement",
      image: "/images/blog3-placeholder.jpg",
    },
    {
      id: 4,
      title: "Mindfulness Practices in Healthcare: A West African Perspective",
      date: "February 22, 2025",
      author: "Dr. Fatima Bello",
      excerpt: "This article discusses how mindfulness practices can be effectively integrated into healthcare settings in West Africa, with consideration for cultural contexts and practical implementation strategies.",
      category: "Practice",
      image: "/images/blog4-placeholder.jpg",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white">News & Updates</h1>
          <p className="mt-2 text-lg">Stay Informed with the Latest from WASIM</p>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {blogPosts.map((post) => (
                  <article key={post.id} className="card overflow-hidden">
                    <div className="relative h-64 bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-md text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-sm text-gray-600">
                        {post.date} | By {post.author}
                      </div>
                      <h2 className="mb-3 text-2xl font-semibold">
                        <Link href={`/news/${post.id}`} className="hover:text-primary transition-colors duration-300">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mb-4">{post.excerpt}</p>
                      <Link href={`/news/${post.id}`} className="text-primary hover:text-accent transition-colors duration-300 font-medium">
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination (Placeholder) */}
              <div className="mt-10 flex justify-center">
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-md border border-input bg-white">Previous</button>
                  <button className="px-4 py-2 rounded-md bg-primary text-white">1</button>
                  <button className="px-4 py-2 rounded-md border border-input bg-white">2</button>
                  <button className="px-4 py-2 rounded-md border border-input bg-white">3</button>
                  <button className="px-4 py-2 rounded-md border border-input bg-white">Next</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="flex justify-between hover:text-primary transition-colors duration-300">
                      <span>Announcements</span>
                      <span className="bg-muted px-2 rounded-md text-sm">3</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between hover:text-primary transition-colors duration-300">
                      <span>Research</span>
                      <span className="bg-muted px-2 rounded-md text-sm">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between hover:text-primary transition-colors duration-300">
                      <span>Education</span>
                      <span className="bg-muted px-2 rounded-md text-sm">4</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between hover:text-primary transition-colors duration-300">
                      <span>Practice</span>
                      <span className="bg-muted px-2 rounded-md text-sm">6</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between hover:text-primary transition-colors duration-300">
                      <span>Events</span>
                      <span className="bg-muted px-2 rounded-md text-sm">2</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Tags */}
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Herbal Medicine
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Research
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Traditional Healing
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Nutrition
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Mindfulness
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Education
                  </Link>
                  <Link href="#" className="bg-muted px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                    Conferences
                  </Link>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="card p-6 bg-primary/10">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Updates</h3>
                <p className="mb-4 text-sm">Stay informed with our latest news and updates delivered directly to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full rounded-md border border-input bg-white px-4 py-2 text-sm"
                    required
                  />
                  <button type="submit" className="w-full btn btn-primary text-sm">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Placeholder for Individual Blog Post Page Structure */}
      {/* This would typically be a dynamic route like /news/[postId]/page.tsx */}
      {/* 
      <section className="section">
        <div className="container">
          <article>
            <h1 className="text-3xl font-bold mb-2">[Blog Post Title]</h1>
            <div className="mb-6 text-gray-600">
              [Post Date] | By [Author Name] | Category: [Category]
            </div>
            <img 
              src="/images/blog-detail-placeholder.jpg" 
              alt="[Blog Post Title]" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="prose lg:prose-xl max-w-none">
              <p>Blog post content goes here...</p>
            </div>
          </article>
        </div>
      </section>
      */}
    </>
  );
}
