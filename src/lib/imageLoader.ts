// src/lib/imageLoader.ts
import { ImageLoaderProps } from 'next/image';

// Custom image loader for optimized image loading
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  // In a production environment, you might use a CDN or image optimization service
  // For now, we'll just return the source with width and quality parameters
  return `${src}?w=${width}&q=${quality || 75}`;
}

// Helper function to generate blur placeholder data URLs for images
export function generateBlurPlaceholder(width: number, height: number, color: string = '#f0f0f0'): string {
  // Create a simple SVG placeholder with the specified dimensions and color
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}"/>
    </svg>
  `;
  
  // Convert SVG to base64 data URL
  const toBase64 = (str: string) => 
    typeof window === 'undefined' 
      ? Buffer.from(str).toString('base64') 
      : window.btoa(str);
  
  return `data:image/svg+xml;base64,${toBase64(svg.trim())}`;
}
