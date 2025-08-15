"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, MessageCircle, Calendar, Timer } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

export function Contact() {
  const [status, setStatus] = useState("idle") // idle | loading | success | error
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    if (!formRef.current) return
    const formData = new FormData(formRef.current)

    try {
      const res = await fetch("https://formsubmit.co/ajax/wahla1338@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (res.ok) {
        setStatus("success")
        setMessage("✅ Your message has been sent!")
        formRef.current.reset()
      } else {
        const data = await res.json()
        throw new Error(data.message || "Something went wrong.")
      }
    } catch (err: any) {
      setStatus("error")
      setMessage(`❌ ${err.message}`)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "wahla1338@gmail.com",
      href: "mailto:wahla1338@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Availability",
      value: "10am to 10pm",
      description: "Mon-Sun ",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
      description: "Available for remote work",
    },
  ]

  return (
    <section id="contact" className="py-20 relative z-10 container mx-auto px-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;m always excited to work on new projects and collaborate with amazing
            people. Let&apos;s discuss how we can create something incredible together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <a
                    href={info.href}
                    className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className=" grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold">Quality First</h4>
                      <p className="text-muted-foreground text-sm">Clean, maintainable code with best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold">On-Time Delivery</h4>
                      <p className="text-muted-foreground text-sm">Reliable project completion within deadlines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold">Clear Communication</h4>
                      <p className="text-muted-foreground text-sm">Regular updates and transparent collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold">Post-Launch Support</h4>
                      <p className="text-muted-foreground text-sm">Ongoing maintenance and feature updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="flex-1"
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 w-full cursor-pointer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </a>

                <a
                  className="flex-1"
                >
                  <Button size="lg" variant="outline" className="w-full cursor-pointer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quick Chat
                  </Button>
                </a>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I&apos;ll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />

                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input name="name" required placeholder="John Doe" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input name="email" type="email" required placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer"
                    disabled={status === "loading"}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>

                  {message && (
                    <p className={`text-sm mt-2 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                      {message}
                    </p>
                  )}
                </form>


              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
