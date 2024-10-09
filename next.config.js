// next.config.js
module.exports = {
  reactStrictMode: true,
  distDir: '.next',  // Ensures default output folder, useful if previously changed
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL,  // Example of using environment variables
  },
  images: {
    domains: ['example.com', 'anotherdomain.com'],  // External domains for next/image
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',  // Client-side compatibility adjustment
      };
    }
    return config;
  },
};
