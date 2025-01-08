"use client";

import Image from "next/image";

import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { IoCloseSharp } from "react-icons/io5";
import { NAVIGATION } from "../constants";
import { useState } from "react";
import Link from "next/link";

const TopNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="fixed w-full justify-between items-center py-8 hidden md:flex shadow-lg bg-background top-0 z-10">
        <Link href="/" className="mx-12">
          <Image
            src="/assets/fogverse.png"
            height={42.5}
            width={128}
            alt="FogVerse Icon"
            priority
          />
        </Link>
        <div className="flex justify-end items-center mx-12">
          {NAVIGATION?.map((nav, index) => (
            <a
              key={index}
              href={nav.path}
              className="text-sm font-bold ml-12 hover:text-primaryblue"
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full justify-between items-center pb-6 flex md:hidden">
        <div />
        <Link href="/">
          <Image
            src="/assets/fogverse.png"
            height={500}
            width={96}
            alt="FogVerse Icon"
            priority
          />
        </Link>
        <div
          className="hover:cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <GiHamburgerMenu size={28} />
        </div>
      </div>
      {mobileNav && (
        <TopNavMobile setMobileNav={() => setMobileNav(!mobileNav)} />
      )}
    </>
  );
};

const TopNavMobile: React.FC<mobileNavigatonInterface> = ({ setMobileNav }) => {
  return (
    <div className="flex justify-between md:none h-screen w-full fixed z-10 top-0 bg-background mx-[-48px] px-12 py-6">
      <div />
      <div className="flex flex-col justify-center">
        {NAVIGATION?.map((nav, index) => (
          <a
            key={index}
            href={nav.path}
            className="my-4 text-center font-bold hover:text-primaryblue"
          >
            {nav.name}
          </a>
        ))}
      </div>
      <div onClick={() => setMobileNav()} className="hover:cursor-pointer">
        <IoCloseSharp size={24} />
      </div>
    </div>
  );
};

export default TopNav;
