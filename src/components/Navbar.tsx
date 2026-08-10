"use client"

interface Ur {
  url: string;
  title: string;
}

interface nav {
  link: Ur;
}

import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import NavLinks from "./navLinks";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/global-Img', title: 'Global Images' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-center gap-25 px-4 sm:px-6 lg:px-8 md:h-20 h-16">

        {/* desktop navItems */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLinks key={link.url} link={link} />
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoCloseSharp className="size-6" /> : <IoMenu className="size-6" />}
        </button>

        {/* logo */}
        <div className="">
          <Link href={"/"} className="bg-black rounded ring-3">
            <span className="text-white p-1">MIT</span>
            <span className="bg-white font-bold">.dev</span>
          </Link>
        </div>

        {/* social */}
        <div className="md:block hidden">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 text-gray-600 hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 space-y-3 py-4">
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 font-medium text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;