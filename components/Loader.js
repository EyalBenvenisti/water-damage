// components/Loader.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Loader() {
  const [width, setWidth] = useState('0%');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setWidth('0%'); // Reset to 0% to make it visible
      setTimeout(() => setWidth('100%'), 10); // Expand to 100% for the animation
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => setWidth('0%'), 500); // Set to 0% after completing for hide
    };

    // Listen to route change events
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    // Cleanup listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div
      id="loader"
      className="fixed top-0 left-0 h-1 bg-orange z-50 transition-all duration-500 ease-in-out"
      style={{ width }}
    ></div>
  );
}
