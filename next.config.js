/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dschool2.appsosis.com"],
    unoptimized: true,
  },
  trailingSlash: false,
  output: "export",
};

module.exports = nextConfig;
