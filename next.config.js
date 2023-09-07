/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dschool2.appsosis.com"],
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
