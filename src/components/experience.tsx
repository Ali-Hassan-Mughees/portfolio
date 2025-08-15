"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      title: "Mobile Application Developer",
      company: "DictaLabs",
      location: "Lahore, Pakistan",
      period: "Aug 2024 – Present",
      type: "Full-time",
      description:
        "Developing cross-platform mobile apps with Flutter. Implementing MVVM architecture, backend integrations, and secure authentication flows.",
      technologies: [
        "Flutter", "Dart", "MVVM", "Firebase", "REST APIs", "Provider", "GitHub"
      ],
      achievements: [
        "Built vScrawl mobile app – eSignature and workflow automation",
        "Developed eTugra Auth App with 2FA and remote signing",
        "Optimized performance using Flutter Method Channels for native calls",
        "Integrated real-time data sync with Firebase and REST APIs"
      ],
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Web Application Developer",
      company: "DictaLabs",
      location: "Lahore, Pakistan",
      period: "Jan 2024 – Present",
      type: "Full-time",
      description:
        "Creating responsive, scalable web applications using React and Angular. Focused on clean architecture, reusable components, and REST API integration.",
      technologies: [
        "React", "Angular", "TypeScript", "Tailwind CSS", "Bootstrap", "REST APIs", "GitHub"
      ],
      achievements: [
        "Built WizePDF – PDF editing, converting, and management tool",
        "Developed vScrawl web platform with Angular and integrated API flows",
        "Implemented reusable UI components in Tailwind and Bootstrap",
        "Optimized API calls and frontend performance for large datasets"
      ],
      color: "from-teal-500 to-lime-500",
    },
  ]


  return (
    <section id="experience" className="py-20 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Professional Journey

          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My career progression through innovative companies, building amazing products and growing with incredible
            teams
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 top-32 w-0.5 h-32 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block transform -translate-x-1/2" />
              )}

              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background transform -translate-x-1/2 z-10">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                </div>

                <motion.div whileHover={{ scale: 1.02, y: -5 }} className="w-full lg:w-1/2">
                  <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm relative overflow-hidden group">
                    <div className={`absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />


                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <motion.h3
                            className="text-2xl font-bold mb-2  transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-5 w-5 text-blue-500" />
                            <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                          </div>
                        </div>
                        <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0`}>{exp.type}</Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant="secondary"
                                className={`bg-gradient-to-r ${exp.color} bg-opacity-10 text-foreground border border-current/20 hover:bg-opacity-20 transition-all duration-300`}
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="w-full lg:w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
