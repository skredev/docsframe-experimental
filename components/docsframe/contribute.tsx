import { Doc } from "content-collections";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import { promises as fs } from "fs";

export async function Contribute({ doc }: { doc: Doc }) {
  try {
    const docsframeData = JSON.parse(
      await fs.readFile(
        new URL("docsframe.json", `file://${process.cwd()}/`),
        "utf8"
      )
    );

    if (
      !docsframeData.contribution?.owner ||
      !docsframeData.contribution?.repo
    ) {
      return null;
    }

    const contributeLinks = [
      {
        text: "Edit this page",
        icon: PencilIcon,
        href: new URL(
          `blob/main/content${doc.slug === "/docs" ? "/docs/index" : doc.slug}.mdx`,
          `https://github.com/${docsframeData.contribution.owner}/${docsframeData.contribution.repo}/`
        ).toString(),
      },
    ];

    return (
      <div className="space-y-2">
        <p className="font-medium">Contribute</p>
        <ul className="m-0 list-none">
          {contributeLinks.map((link, index) => (
            <li key={index} className="mt-0 pt-2">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <link.icon className="mr-2 size-4" />
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error reading docsframe.json:", error);
    return null;
  }
}
