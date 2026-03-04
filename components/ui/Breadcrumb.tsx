'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-xs mb-3 overflow-x-auto">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="text-gray-400 mx-1">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
