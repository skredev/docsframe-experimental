import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components",
    },
    {
      title: "Builder",
      href: "/builder",
      disabled: true,
      label: "Coming soon",
    },
  ],
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
      ],
    },
  ],
};
