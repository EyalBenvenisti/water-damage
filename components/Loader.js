// components/Loader.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Loader() {
  const router = useRouter();

  useEffect(() => {
    const loader = document.getElementById('loader');

    const startLoading = () => {
      loader.classList.add('loading');
      loader.classList.remove('loaded');
    };

    const stopLoading = () => {
      loader.classList.remove('loading');
      loader.classList.add('loaded');
    };

    // Listen to route change events
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    // Cleanup listeners on unmount
    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  }, [router]);

  return <div id="loader" className="fixed top-0 left-0 w-full z-50 bg-orange h-1 transform scale-x-0 origin-left transition-transform duration-500 ease-in-out"></div>;
}
