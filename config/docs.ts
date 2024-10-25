import { SidebarNavItem } from "@/types/index";

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [
            {
              title: "Next.js",
              href: `/docs/installation/next`,
              items: [],
            },
          ],
        },
      ],
    },
    {
      title: "Templates",
      items: [
        {
          title: "Slim",
          href: `/docs/templates/slim`,
          items: [],
          disabled: true,
          label: "Coming soon",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Hero",
          href: `/docs/components/hero`,
          items: [],
        },
        {
          title: "Sidebar",
          href: `/docs/components/sidebar`,
          items: [],
        },
      ],
    },
  ],
};
