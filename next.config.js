/** @type {import('next').NextConfig} */
const withInterceptStdout = require("next-intercept-stdout");
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["images.microcms-assets.io"],
    },
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text)
);

module.exports = nextConfig;
