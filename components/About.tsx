"use client"

import { motion } from "framer-motion"
import { Brain, Code, Zap, Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    items: ["LangChain", "OpenAI APIs", "RAG Pipelines", "Generative AI", "Multimodal AI", "Vector Databases"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Full-Stack Development",
    icon: <Code className="w-6 h-6" />,
    items: ["React.js", "Next.js", "Python", "FastAPI", "Node.js", "TypeScript"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Cloud & DevOps",
    icon: <Zap className="w-6 h-6" />,
    items: ["Azure Cognitive Services", "AWS ECS", "Docker", "Terraform", "CI/CD", "GitHub Actions"],
    color: "from-green-500 to-teal-500",
  },
]

const timeline = [
  {
    year: "2023-Present",
    title: "Software Engineer",
    company: "Equations Work IT Services",
    description:
      "Leading AI-powered video dubbing platform development, achieving 85% reduction in manual translation efforts and $600K annual cost savings.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Trainee Software Engineer",
    company: "Equations Work IT Services",
    description: "Contributed to foundational R&D projects focused on AI workflow chaining and cloud audio pipelines.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    year: "2019-2023",
    title: "Computer Engineering",
    company: "Savitribai Phule Pune University",
    description: "Graduated with CGPA 8.43/10.0, specializing in AI and software engineering fundamentals.",
    icon: <Brain className="w-5 h-5" />,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate AI Engineer with 2.3+ years of experience building cutting-edge AI solutions. I specialize in
            transforming complex problems into intelligent, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-orbitron">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-orbitron text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Journey Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.year}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background"></div>

                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold font-orbitron mb-2">Recognition</h3>
              <p className="text-lg text-yellow-200 mb-1">Most Committed Contributor of the Year 2023–2024</p>
              <p className="text-yellow-300/80">Equations Work IT Services Pvt. Ltd.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
