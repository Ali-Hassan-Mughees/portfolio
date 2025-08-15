"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Ali-Hassan-Mughees", // your actual GitHub URL
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ali-hassan-mughees/", // your actual LinkedIn URL
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:wahla1338@gmail.com", // your email
      label: "Email"
    },
  ]

  return (
    <footer className="bg-muted/50 py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {"<Dev-Ali-Hassan/>"}
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Thanks for visiting! Let&apos;s connect and create something amazing together.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </a>
            ))}
          </div>

          <div className="text-center border-t border-border pt-8 w-full">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved By Dev Ali Hassan Mughees
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
