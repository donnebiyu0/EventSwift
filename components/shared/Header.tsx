import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo2.jpeg"
            alt="logo"
            width={128}
            height={18}
            className="object-contain h-11 w-128"
          ></Image>
        </Link>
        <SignedIn>
          <nav className="md:flex hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end">
          <SignedIn>
            <div className="mr-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedIn>
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full mr-4" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
