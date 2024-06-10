/** @type {import('next').NextConfig} */
const nextConfig = {
     sassOptions: {
       prependData: `@import "/src/style/_variables.scss";`,
     },
};

export default nextConfig;
