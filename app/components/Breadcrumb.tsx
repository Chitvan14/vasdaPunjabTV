"use client";
import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;

  capitalizeLinks?: boolean;
};
export function Breadcrumb({
  homeElement,
  separator,

  capitalizeLinks,
}: TBreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div className="w-full text-xs text-gray-500">
      <ul className="flex pb-2 bg-primary_custom">
        <li className="hover:underline mr-2">
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? `${"hover:underline mx-2"} ${"text-brandColor"}`
              : "hover:underline mx-2";
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink.toUpperCase().replaceAll('-'," ")}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
