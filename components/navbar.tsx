"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { companyInfo } from "@/lib/mock-data"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const isHomePage = pathname === "/"
  const isTransparent = isHomePage && !isScrolled

  // Brand name as one word (ShravanElectricals). Use companyInfo.name without spaces.
  const brandName = ("Shravan Electricals")

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Taller navbar to fit larger logo */}
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${brandName} home`}
          >
            <span
              className={`inline-flex items-center justify-center rounded-xl ${
                isTransparent
                  ? "bg-white/85 border border-white/70 backdrop-blur-sm shadow-sm"
                  : ""
              }`}
            >
              <Image
                src="/logo.png"
                alt={`${brandName} logo`}
                width={220}
                height={56}
                priority={isHomePage}
                sizes="(max-width: 768px) 160px, 220px"
                className="h-12 w-auto md:h-14 select-none"
                draggable={false}
              />
            </span>

            <span
              className={`font-extrabold leading-none whitespace-nowrap tracking-tight
                text-xl md:text-2xl lg:text-3xl
                ${isTransparent ? "text-white" : "text-blue-900"}`}
            >
              {brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                  after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full
                  ${isTransparent ? "text-white hover:text-yellow-300" : "text-blue-900 hover:text-blue-600"}`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="border-white bg-yellow-400 text-blue-900 hover:bg-yellow-500 hover:text-blue-900"
            >
              <Link href="/admin">Admin</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className={isTransparent ? "text-white" : "text-blue-900"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden ${isTransparent ? "bg-blue-900/95" : "bg-white border-t"} backdrop-blur-md`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block font-medium py-2 transition-colors duration-200 ${
                    isTransparent ? "text-white hover:text-yellow-300" : "text-blue-900 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button
                  asChild
                  size="sm"
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                >
                  <Link href="/admin">Admin</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}