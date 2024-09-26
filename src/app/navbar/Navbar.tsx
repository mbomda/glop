"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = (props: { land: string }) => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeSection, setActiSection] = useState("");

  useLayoutEffect(() => {
    const storedNavbarBg = localStorage.getItem("navbarBg");
    if (storedNavbarBg) {
      setNavbarBg(JSON.parse(storedNavbarBg));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("navbarBg", JSON.stringify(navbarBg));
  }, [navbarBg]);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const handleSetActive = (to: string) => {
    handleSetActive(to);
  };

  function padding() {
    return props.land === "home" ? "px-10" : "px-6";
  }
  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <section className="py-2 bg-[#007bff] text-white text-right px-10">
        <p className="text-sm">
          <strong className="mx-3">Address:</strong>SWF New York 185669
          <strong className="mx-3">Contact No:</strong>693633626
        </p>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
        <Image
          src="/photos/LOGO.jpg"
          alt="logo"
          className="w-400"
          width={100}
          height={100}
        />

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link href="javascript:void(0)">
                <img src="/photos/LOGO.jpg" alt="logo" className="w-36" />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="http://localhost:3000/"
                className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="produits"
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
              >
                Produits
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="about"
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
              >
                About Us
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="services"
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
              >
                Nos services
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="contact"
                className="hover:text-[#007bff] text-[#333] block font-bold text-[15px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex max-lg:ml-auto">
          <button id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
