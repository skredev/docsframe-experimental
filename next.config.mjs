import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
      return [
        {
          source: "/r/:name",
          destination: "/r/styles/default/:name.json",
          permanent: true,
        },
        {
          source: "/docs/components",
          destination: "/docs/components/hero",
          permanent: true,
        },
      ];
    },
  };

export default withContentCollections(nextConfig);
