'use client'
import { usePathname } from "next/navigation";
import  Link  from 'next/link';

export default function NavLink({link}) {
    const pathName = usePathname()
    
  return <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
    {link.title}
  </Link>
}
