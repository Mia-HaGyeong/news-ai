// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "standalone",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ['img.clerk.com'],
  },
  // any other config...
};

export default nextConfig;