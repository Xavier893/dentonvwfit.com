import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container bg-grey">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo-black.svg" alt="logo" width={75} height={75} priority={true}/>
      </Link>

      {/* Links */}
      <ul className="hidden gap-20 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="nav-link flexCenter cursor-pointer">
            {link.label}
          </Link>
        ))}

        {/* Button */}
        <Button type="button" title="Get Started"/>
      </ul>

      {/* Hamburger Menu */}
      <Image 
        src="menu.svg"
        alt="menu" 
        width={25} 
        height={25} 
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar