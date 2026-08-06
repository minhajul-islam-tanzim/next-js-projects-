"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
;

interface NavLinkItem {
  url: string;
  title: string;
}

interface NavLinksProps {
  link: NavLinkItem;   
}



const NavLinks = ({ link }: NavLinksProps) => {

const pathName = usePathname()


  return (
    <div>
        <Link className={`rounded p-1 ${pathName == link.url ? 'bg-black text-white':'font-semibold'}`} href={link.url}>{link.title}</Link>
    </div>
  );
};

export default NavLinks;