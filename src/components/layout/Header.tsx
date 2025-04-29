"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programmes & Services", href: "/programmes" },
    { name: "Membership", href: "/membership" },
    { name: "Practitioners", href: "/practitioners" },
    { name: "Events", href: "/events" },
    { name: "News & Updates", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-between py-2 text-sm md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <a href="mailto:info@wasimwestafrica.org" className="hover:text-accent">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> info@wasimwestafrica.org
            </a>
            <a href="tel:+1234567890" className="hover:text-accent">
              <FontAwesomeIcon icon={faPhone} className="mr-1" /> +123-456-7890
            </a>
          </div>
          <div className="mt-2 flex gap-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-accent"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder Logo */}
          <Image src="/images/logo-placeholder.png" alt="WASIM Logo" width={60} height={60} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold font-montserrat text-primary">WASIM</span>
            <span className="text-xs text-secondary font-montserrat">West African Society of Integrative Medicine</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="relative pb-1 font-medium font-montserrat text-foreground hover:text-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-foreground lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="block px-6 py-3 font-medium font-montserrat text-foreground hover:bg-background hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
