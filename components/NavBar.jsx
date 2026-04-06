"use client";

import Image from "next/image";
import React, { useState } from "react";
import Container from "./common/Container";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Pages", "Portfolio", "Blog"];

  return (
    <nav className="relative">
      <Container className="mx-auto flex lg:grid lg:grid-cols-8 gap-2 items-center justify-between text-base text-[#202020] font-medium h-[72px]">
        <div className="relative lg:col-span-2">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={90}
            height={24}
            className="object-contain"
          />
        </div>

        <div className="hidden lg:block lg:col-span-4">
          <ul className="flex justify-between items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block lg:col-span-2">
          <h3 className="text-end font-semibold">info@floka.com</h3>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-3xl p-2">
            <CiMenuFries />
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out p-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={90}
            height={24}
            className="object-contain"
          />
          <button onClick={() => setIsOpen(false)} className="text-2xl p-1">
            <IoMdClose />
          </button>
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="KEYWORDS..."
            className="w-full bg-gray-50 border-none py-3 px-4 rounded text-xs tracking-widest outline-none focus:ring-1 focus:ring-gray-200"
          />
          <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        </div>

        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li
              key={link}
              className="border-b border-gray-100 last:border-none"
            >
              <a
                href="#"
                className="flex justify-between items-center py-4 text-sm font-bold uppercase tracking-wide hover:text-gray-500"
              >
                {link}
                <FaChevronDown className="text-[10px] text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
