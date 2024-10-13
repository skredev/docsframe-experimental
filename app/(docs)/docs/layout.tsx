import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <main className="flex place-content-center p-8">
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
        {children}
      </div>
    </main>
  );
}
