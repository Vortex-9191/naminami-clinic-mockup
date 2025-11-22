import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  href: string;
  label: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-muted-foreground py-4" aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {idx > 0 && <span className="mx-2">/</span>}
            <Link href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
