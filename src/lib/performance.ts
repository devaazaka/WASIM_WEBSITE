// src/lib/performance.ts

/**
 * Helper functions for website performance optimization
 */

// Function to defer non-critical JavaScript
export function deferNonCriticalJS(callback: () => void): void {
  if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') {
      setTimeout(callback, 0);
    } else {
      window.addEventListener('load', () => {
        setTimeout(callback, 0);
      });
    }
  }
}

// Function to preload critical resources
export function preloadCriticalResources(resources: string[]): void {
  if (typeof window !== 'undefined' && document.head) {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      // Set appropriate 'as' attribute based on resource type
      if (resource.endsWith('.js')) {
        link.as = 'script';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (/\.(png|jpg|jpeg|gif|webp)$/i.test(resource)) {
        link.as = 'image';
      } else if (/\.(woff|woff2|ttf|otf)$/i.test(resource)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      }
      
      document.head.appendChild(link);
    });
  }
}

// Function to lazy load images
export function lazyLoadImages(): void {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    });

    // Target all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        (img as HTMLImageElement).src = src;
        img.removeAttribute('data-src');
      }
    });
  }
}
