import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="margin-t justify-end">
      <div className="flex-center wrapper justify-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo2.jpeg"
            alt="logo"
            width={50}
            height={15}
          ></Image>
        </Link>
        <p>2023 EventSwift. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
