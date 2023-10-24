/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["route.tsx", "route"],
  transpilePackages: ["@hello-knip/lib-1"],
};

module.exports = nextConfig;
