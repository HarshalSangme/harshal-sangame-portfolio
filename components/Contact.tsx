"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "harshalsangme10@gmail.com",
    href: "mailto:harshalsangme10@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+91 8999849050",
    href: "tel:+918999849050",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Pune, Maharashtra",
    href: null,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/harshal-sangame-6817751b9",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/HarshalSangme",
    color: "from-gray-600 to-gray-400",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on the next big AI innovation? Let's connect and build something extraordinary
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-orbitron mb-8">Let's Connect</h3>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group"
              >
                <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-1">{contact.label}</h4>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-primary hover:text-primary/80 transition-colors break-all"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-orbitron mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground">
            © 2024 Harshal Sangame. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
