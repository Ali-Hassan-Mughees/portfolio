"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Globe, Smartphone, Cloud, Zap, Palette } from "lucide-react"
import { motion } from "framer-motion"

export function Services() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Platform Mobile Development",
      description:
        "Build robust, high-performance apps for Android and iOS using Flutter and clean architecture.",
      features: [
        "Flutter & Dart",
        "MVVM + State Mgmt (Provider/Riverpod/GetX)",
        "Native Plugins & Method Channels",
        "Animations, Offline & Caching"
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Application Development",
      description:
        "Ship scalable SPAs and dashboards with React or Angular and modern frontend tooling.",
      features: [
        "React & Angular",
        "TypeScript + ES6+",
        "Tailwind CSS & Bootstrap",
        "Reusable Components & Routing"
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Design clear, consistent interfaces and handoffs that translate directly into code.",
      features: [
        "Figma Wireframes & Prototypes",
        "Design Systems & Tokens",
        "Accessibility & UX Heuristics",
        "Pixel-Perfect Flutter/Web UI"
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "REST APIs & Backend Integration",
      description:
        "Integrate secure, real-time backends and data flows for web and mobile apps.",
      features: [
        "REST API Design & Postman",
        "Firebase Auth, Firestore, Cloud Functions",
        "Data Modeling & Validation",
        "Realtime Sync & Caching Layers"
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Authentication & Security",
      description:
        "Implement secure auth, roles, and auditability for sensitive user journeys.",
      features: [
        "OAuth2 & JWT",
        "2FA and Remote Signing (eTugra)",
        "Secure Storage & Key Handling",
        "Role-Based Access & Audit Trails"
      ],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Deployment & Release Management",
      description:
        "Automate builds, releases, and monitoring across web and mobile platforms.",
      features: [
        "Vercel/Netlify for Web",
        "Google Play & TestFlight",
        "GitHub + CI/CD Pipelines",
        "Crashlytics & Analytics"
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web and mobile development, UI/UX, secure integrations, and CI/CD deploys
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <Button
                      className="w-full cursor-pointer"
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        contactSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
