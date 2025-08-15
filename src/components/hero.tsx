"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
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
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative z-10 overflow-hidden ">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-6 rounded-full p-1 border-2 shadow-2xl">
            <div className="rounded-full overflow-hidden w-full h-full relative">
              <Image
                src="/images/ali-profile.jpeg"
                alt="Ali Hassan Mughees"
                fill
                className="object-cover"
              />
            </div>
          </div>





        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ali Hassan Mughees
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 h-16"
        >
          <TypeAnimation
            sequence={[
              "Web & Mobile App Developer",
              2000,
              "React, Angular & Flutter Developer",
              2000,
              "Cross-Platform Application Expert",
              2000,
              "Clean UI/UX and Scalable Architecture",
              2000,
              "API Integration & Real-Time Features",
              2000,
              "Focused on Performance & Maintainability",
              2000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
          />
        </motion.div>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 px-4"
        >
          I'm a Web and Mobile App Developer Specializing in web and mobile app development with Flutter, React, and Angular, integrated with secure REST APIs. At DictaLabs, I developed both the web (Angular) and mobile (Flutter) versions of <strong>vScrawl</strong>, a full-featured digital signature platform. I also built <strong>WizePDF</strong> from scratch using React and other apps. Wize PDF is an online tool for viewing, editing, converting, and managing PDF files. I focus on creating scalable architectures, clean UI/UX, and seamless user experiences across Android, iOS, and the web.
        </motion.p>




        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg cursor-pointer"
          >
            View My Work
          </Button>
          <a href="/assets/Ali_Hassan_CV.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg cursor-pointer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-muted hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
