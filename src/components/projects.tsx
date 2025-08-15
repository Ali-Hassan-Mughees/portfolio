"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Projects() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "WizePDF",
      description: "Online PDF editor and converter built with React.",
      longDescription:
        "Developed a full-featured web application for viewing, editing, converting, and managing PDF files. Focused on performance, user experience, and responsive design.",
      image: "/images/project/wizepdf_app.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
      category: "Web Apps",
      featured: true,
      demoLink: "https://wizepdf.com/"
    },
    {
      title: "vScrawl web app",
      description: "Electronic signature app with mobile-first experience.",
      longDescription:
        "Built a seamless eSignature solution to enhance workflow efficiency and legal compliance. Features include customizable templates, real-time tracking, and secure document signing.",
      image: "/images/project/app.vscrawl_app.png",
      technologies: ["Angular", "Tailwind CSS", "JavaScript", "REST APIs"],
      category: "Web Apps",
      featured: true,
      demoLink: "https://app.vscrawl.com/"
    },
    {
      title: "vScrawl mobile app",
      description: "Electronic signature app with mobile-first experience.",
      longDescription:
        "Built a seamless eSignature solution to enhance workflow efficiency and legal compliance. Features include customizable templates, real-time tracking, and secure document signing.",
      image: "/images/project/vscrawl_app.png",
      technologies: ["Flutter", "Dart", "APIs", "Firebase"],
      category: "Flutter Apps",
      featured: true,
      demoLink: "https://vscrawl.com/"

    },
    {
      title: "Valid Marker",
      description: "Electronic signature app with mobile-first experience.",
      longDescription:
        "Built a seamless eSignature solution to enhance workflow efficiency and legal compliance. Features include customizable templates, real-time tracking, and secure document signing.",
      image: "/images/project/valid_marker_app.png",
      technologies: ["Flutter", "Dart", "APIs", "Firebase"],
      category: "Flutter Apps",
      featured: false,
      demoLink: "https://app.validmarker.com/sign-in"
    },
  ]

  const categories = [
    "All",
    "Web Apps",
    "Flutter Apps",
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/50 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work, demonstrating expertise across the full development stack
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="mb-2"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.longDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Give It a Go
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Give It a Go
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
