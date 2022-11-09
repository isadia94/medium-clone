import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export interface INavigationProps {}

const Navigation: FC<INavigationProps> = (props) => {
  return (
    <header className="bg-amber-400 px-2  py-4 md:px-3 lg:px-12 flex items-center justify-between border-b-[0.5px] border-black ">
      <Link href="/" className="">
        <Image src="/logo/logo.png" height={100} width={200} alt="logo" />
      </Link>
      <div className="text-xs flex items-center space-x-3 md:space-x-4 lg:space-x-6">
        <Link href="/about" className="hidden md:flex">
          Our Story
        </Link>
        <Link href="/membership" className="hidden md:flex">
          Membership
        </Link>
        <Link href="/creators" className="hidden md:flex">
          Write
        </Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/signin" className="bg-black text-white p-3 rounded-full">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
