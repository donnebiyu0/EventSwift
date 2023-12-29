"use client";
import React from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className="flex flex-col md:flex-row justify-around">
      {headerLinks.map((item) => {
        const isActive = pathName == item.route;
        return (
          <li
            key={item.route}
            className={`m-3 ${isActive ? "text-neutral-400" : null}`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
