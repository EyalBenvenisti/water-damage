// pages/_app.js
import '../styles/global.css';
import MainLayout from '../layouts/MainLayout';
import BlogLayout from '../layouts/BlogLayout';
import DefaultLayout from '../layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
  // Choose layout based on Component
  const getLayout = Component.layout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      {getLayout(
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
