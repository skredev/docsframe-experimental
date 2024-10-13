import { MainNavItem } from "@/types";

interface MainConfig {
  mainNav: MainNavItem[];
}

export const mainConfig: MainConfig = {
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
};
