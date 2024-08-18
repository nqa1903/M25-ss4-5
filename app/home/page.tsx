"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
    const pathName = usePathname();
  return (
    <div>
      <Link className={pathName == "/app" ? "active":""} href={".."}>Home</Link>
      <Link className={pathName == "/home/about" ? "active":""} href={"/home/about"}>About</Link>
      <Link className={pathName == "/home/contact" ? "active":""} href={"/home/contact"}>Contact</Link>
      <Link className={pathName == "/home/login" ? "active":""} href={"/home/login"}>Login</Link>
    </div>
  )
}
