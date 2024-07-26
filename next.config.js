/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build",
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Existing and new redirects
      {
        source: "/login.php",
        destination: "https://patients.assurepathlabs.com/patient/login",
        permanent: true,
      },
      {
        source: "/all-test.php",
        destination: "/all-test",
        permanent: true,
      },
      {
        source: "/services.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms-conditions.php",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/doctor-profile.php",
        destination: "/doctor-profile",
        permanent: true,
      },
      {
        source: "/category/assure-fit-couple",
        destination: "/packages/besure-fit-couple-advanced-for-men",
        permanent: true,
      },
      {
        source: "/privacy-policy.php",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/customer-feedback.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/package/assure-complete-wellness-package-for-man",
        destination: "/packages/besure-complete-wellness-package-for-man",
        permanent: true,
      },
      {
        source: "/add_to_cart.php",
        destination: "/all-test",
        permanent: true,
      },
      {
        source: "/healthy-heart-checkup",
        destination: "/packages/besure-healthy-heart-panel",
        permanent: true,
      },
      {
        source: "/valentines-couple-health-offer",
        destination: "/packages/besure-fit-couple-advanced-for-women",
        permanent: true,
      },
      {
        source: "/package/assure-livlong-premium---man",
        destination: "/packages/besure-sr-citizen-advanced-package-female",
        permanent: true,
      },
      {
        source: "/refund-cancellation.php",
        destination: "/refund-cancellation",
        permanent: true,
      },
      {
        source: "/package/:slug.php",
        destination: "/package/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/all-test/:slug.php",
        destination: "/all-test/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/individual-test/:slug(.*)\\.php",
        destination: "/all-test/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/individual-test/:slug(.*)\\",
        destination: "/all-test/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/individual-test/:path*",
        destination: "/all-test/:path*",
        permanent: true,
      },
      {
        source: "/individual-test/",
        destination: "/all-test/",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/condition/:slug.php",
        destination: "/condition/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/organs/:slug.php",
        destination: "/organs/:slug",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/add_to_cart.php",
        destination: "/package",
        permanent: true,
        has: [
          {
            type: "query",
            key: "slug",
          },
        ],
      },
      {
        source: "/cancer-awareness-campaign",
        destination: "https://www.assurepathlabs.com/cancer-awareness-campaign",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
