/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  async redirects() {
    return [
      {
        source: "/services/web-development",
        destination: "/services/lead-generation",
        permanent: true,
      },
      {
        source: "/services/video-production",
        destination: "/services/lead-generation",
        permanent: true,
      },
      {
        source: "/services/social-media-management",
        destination: "/services/lead-generation",
        permanent: true,
      },
      {
        source: "/services/google-meta-ads",
        destination: "/services/lead-generation",
        permanent: true,
      },
      // Live purchase flow for retired standalone services (Social Media
      // Management, a bundled "Growth System" package) with public monthly
      // pricing. No longer consistent with the single flagship service /
      // no-public-pricing positioning, so it's redirected rather than left
      // publicly reachable. Underlying files are untouched.
      {
        source: "/checkout",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/checkout/success",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
