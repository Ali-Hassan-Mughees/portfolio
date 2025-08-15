"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Server, Smartphone, Download, Palette, Globe, Rocket, Code2, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Platform App Development",
      description:
        "Building robust mobile apps with Flutter using MVVM. High-quality delivery on Android and iOS.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web App Development",
      description:
        "Shipping fast, scalable SPAs with React and Angular. Clean architecture, reusable components, and TypeScript when needed.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "REST API Integration",
      description:
        "Designing and consuming RESTful APIs. Secure auth, error handling, caching, and offline-ready flows.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive, user-centered designs in Figma. From wireframes to developer-ready handoff.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Responsive Frontends",
      description:
        "Building accessible, responsive UIs with Tailwind CSS, Bootstrap, HTML, and modern tooling. SEO-friendly and fast.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Performance & Optimization",
      description:
        "Optimizing load time, animations, and UI responsiveness. Smooth UX across devices and networks.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Integration",
      description:
        "Connecting apps to databases and cloud services. Handling data flow, real-time updates, and secure storage.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Testing & QA",
      description:
        "Ensuring stability with unit tests, integration tests, and manual QA. Delivering bug-free and reliable applications.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Ali Hassan Mughees, a Web and Mobile App Developer with over 2 years of experience, specializing in cross-platform development using Flutter, React, and Angular. I build scalable, secure, and high-performance applications with clean architecture, intuitive UI/UX, and seamless real-time integrations across Android, iOS, and the web.
          </p>

        </motion.div>

        <div className="  grid lg:grid-cols-2 gap-12 items-center mb-16 px-4 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                My journey began with a passion for intuitive user experiences and transformed into a career focused on modern web and mobile app development. At Dictalabs, I’ve developed real-world apps like vScrawl, wizePDF, validmarker and more.

              </p>
              <p className="text-muted-foreground">
                With expertise in React, Angular, Flutter, and REST APIs, I build responsive web interfaces and high-performance mobile applications. My focus includes secure authentication, scalable real-time features, and maintainable architectures that ensure long-term stability. I prioritize clean, efficient code to deliver seamless user experiences across platforms.
              </p>


              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/assets/Ali_Hassan_CV.pdf" download>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
                <Button size="lg" variant="outline"
                  className="cursor-pointer"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Let's Connect
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[550px] flex items-center justify-center">
              <Image
                src="/images/about.png"
                alt="Web developer illustration"
                fill
                className="object-contain rounded-xl"
              />
            </div>

          </motion.div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
