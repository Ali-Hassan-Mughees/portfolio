"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  const navItems = ["About", "Experience", "Skills", "Services", "Projects", "Contact"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map((item) => item.toLowerCase())
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      //   isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-lg" : "bg-transparent"
      // }`}
      className="fixed top-0 w-full z-40 transition-all duration-300 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {"<Dev-Ali-Hassan />"}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative transition-colors ${
                  activeSection === item.toLowerCase() ? "text-blue-600" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div layoutId="activeSection" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </Button>
            ))}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="justify-start"
                >
                  {item}
                </Button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
