// src/lib/seo.ts
import { Metadata } from 'next';

// Helper function to generate consistent metadata for each page
export function generateMetadata(
  title: string,
  description: string,
  path: string = '',
  imageUrl: string = '/images/og-image-placeholder.jpg',
): Metadata {
  const url = `https://WasimWestAfrica.org${path}`; // Replace with actual domain

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - WASIM`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Generate JSON-LD schema for different page types
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'West African Society of Integrative Medicine (WASIM)',
    url: 'https://WasimWestAfrica.org', // Replace with actual domain
    logo: 'https://WasimWestAfrica.org/images/logo-placeholder.png', // Replace with actual logo URL
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+123-456-7890', // Replace with actual phone
      contactType: 'Customer Service',
      email: 'info@wasimwestafrica.org',
    },
    sameAs: [
      // Add social media profile URLs here if available
      // 'https://www.facebook.com/YourPage',
      // 'https://twitter.com/YourHandle',
    ],
  };
}

export function generateEventSchema(event: {
  name: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      '@type': 'Place',
      name: event.location,
      // address can be added if available
    },
    description: event.description,
    organizer: {
      '@type': 'Organization',
      name: 'West African Society of Integrative Medicine (WASIM)',
      url: 'https://WasimWestAfrica.org', // Replace with actual domain
    },
    url: event.url,
  };
}

export function generateArticleSchema(article: {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  description: string;
  url: string;
  imageUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'West African Society of Integrative Medicine (WASIM)',
      logo: {
        '@type': 'ImageObject',
        url: 'https://WasimWestAfrica.org/images/logo-placeholder.png', // Replace with actual logo URL
      },
    },
    description: article.description,
    url: article.url,
    image: article.imageUrl,
  };
}
