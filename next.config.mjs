/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  sassOptions: {
    prependData: `@import "/src/style/_variables.scss";
       @import "/src/style/_mixins.scss"; 
       @import "/src/style/_responsive";`,
  },
};

export default nextConfig;
