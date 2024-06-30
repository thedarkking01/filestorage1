/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "elated-squirrel-805.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
