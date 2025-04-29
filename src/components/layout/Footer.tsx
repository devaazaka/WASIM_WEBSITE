"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programmes & Services", href: "/programmes" },
    { name: "Membership", href: "/membership" },
    { name: "Practitioners", href: "/practitioners" },
    { name: "Events", href: "/events" },
    { name: "News & Updates", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];
  
  const resourceLinks = [
    { name: "Research Publications", href: "#" },
    { name: "Educational Materials", href: "#" },
    { name: "Practice Guidelines", href: "#" },
    { name: "Member Directory", href: "#" },
  ];
  
  const getInvolvedLinks = [
    { name: "Become a Member", href: "/membership" },
    { name: "Volunteer Opportunities", href: "#" },
    { name: "Donate", href: "#" },
    { name: "Partner with Us", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat text-white">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat text-white">Get Involved</h3>
            <ul className="space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="mb-6 text-xl font-semibold font-montserrat text-white">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1" />
                <span>123 Main Street, City, Country</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faPhone} />
                <span>+123-456-7890</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@wasimwestafrica.org</span>
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-muted pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} West African Society of Integrative Medicine (WASIM). All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-secondary transition-colors duration-300">Privacy Policy</Link> | 
            <Link href="#" className="hover:text-secondary transition-colors duration-300 mx-2">Terms of Use</Link> | 
            <Link href="#" className="hover:text-secondary transition-colors duration-300">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
