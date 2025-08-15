"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code2, Smartphone, Palette, Wrench } from "lucide-react"

const skillCategories = [
  {
    key: "web",
    title: "Web Application Development",
    icon: Code2,
    color: "from-sky-500 to-indigo-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Angular", level: 88 },
      { name: "TypeScript", level: 86 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 84 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    key: "mobile",
    title: "Mobile Application Development",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 82 },
      { name: "MVVM Architecture", level: 88 },
      { name: "State Mgmt (Provider/Riverpod/GetX)", level: 86 },
      { name: "Firebase Auth", level: 85 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    key: "design",
    title: "UI/UX & Visual Design",
    icon: Palette,
    color: "from-pink-500 to-violet-500",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Canva", level: 85 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "User-Centered Design", level: 80 },
      { name: "Color & Typography", level: 88 },
    ],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 90 },
      { name: "Xcode", level: 88 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "Firebase", level: 85 },
    ],
  },
]

const corePoints = [
  "Cross-platform apps with Flutter",
  "SPAs with React and Angular",
  "Clean patterns: MVVM and strong state management",
  "REST integrations, auth, caching, and offline",
  "Responsive, accessible UI with Tailwind/Bootstrap",
]

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies
          </p>
        </motion.div>

        {/* Top: Core card (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="border-0 bg-gradient-to-br from-background via-background to-muted/30">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">Core Strengths</CardTitle>
              <Badge className="bg-primary text-primary-foreground">Summary</Badge>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {corePoints.map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <p className="text-sm text-muted-foreground">{t}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Below: four cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 overflow-hidden bg-background">
                  <div className={`h-1 w-full bg-gradient-to-r ${cat.color}`} />
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      {cat.title}
                    </CardTitle>
                    <Badge className={`bg-gradient-to-r ${cat.color} text-white border-0`}>Focus</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {cat.skills.map((s) => (
                        <div key={s.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{s.name}</span>
                            <span className="text-sm text-muted-foreground">{s.level}%</span>
                          </div>
                          <div className="relative">
                            <div className={`absolute inset-0 rounded bg-gradient-to-r ${cat.color} opacity-20`} />
                            <Progress value={s.level} className="h-2 relative" aria-label={`${s.name} proficiency`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
