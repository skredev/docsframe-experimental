import { Doc } from "content-collections";
import { BugIcon, LightbulbIcon, PencilIcon } from "lucide-react";
import Link from "next/link";

import { getGithubFileUrl, getGitHubIssueUrl } from "@/lib/github";

export function Contribute({ doc }: { doc: Doc }) {
  const contributeLinks = [
    {
      text: "Report an issue",
      icon: BugIcon,
      href: getGitHubIssueUrl({
        owner: "skredev",
        repo: "portfoliojs",
        template: "bug_report.yml",
      }),
    },
    {
      text: "Request a feature",
      icon: LightbulbIcon,
      href: getGitHubIssueUrl({
        owner: "skredev",
        repo: "portfoliojs",
        template: "feature_request.yml",
      }),
    },
    {
      text: "Edit this page",
      icon: PencilIcon,
      href: getGithubFileUrl(doc.slug),
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
}
