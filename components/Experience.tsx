"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award, TrendingUp, Users, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineer",
    company: "Equations Work IT Services Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "Oct 2023 – Present",
    type: "Full-time",
    achievements: [
      {
        icon: <Users className="w-5 h-5" />,
        text: "Led a team of 3 engineers, mentoring freshers on writing clean, maintainable, and efficient code",
        impact: "Team Leadership",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Developed and deployed a multilingual AI-powered video dubbing platform, reducing manual translation efforts by 85%",
        impact: "85% Efficiency Gain",
      },
      {
        icon: <Code className="w-5 h-5" />,
        text: "Designed REST APIs and UI components enabling seamless integration of AI pipeline stages",
        impact: "System Integration",
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: "Built a modular pipeline achieving approximately $600K annual cost savings",
        impact: "$600K Savings",
      },
    ],
    technologies: ["Python", "React.js", "Azure Cognitive Services", "FastAPI", "Docker", "AWS ECS", "Terraform"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Trainee Software Engineer",
    company: "Equations Work IT Services Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "Mar 2023 – Oct 2023",
    type: "Training",
    achievements: [
      {
        icon: <Code className="w-5 h-5" />,
        text: "Contributed to foundational R&D projects focused on AI workflow chaining and cloud audio pipelines",
        impact: "R&D Innovation",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Implemented speech-to-text workflows using Azure Functions, Power Automate, and Cognitive Services",
        impact: "Cloud Integration",
      },
      {
        icon: <Users className="w-5 h-5" />,
        text: "Developed early prototypes of chained model pipelines using React Flow for modular experimentation",
        impact: "Prototype Development",
      },
    ],
    technologies: ["Azure Functions", "Power Automate", "React Flow", "Cognitive Services", "Python"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Data Science Intern",
    company: "Exposys Data Labs",
    location: "Remote",
    period: "Mar 2022 – Apr 2022",
    type: "Internship",
    achievements: [
      {
        icon: <Code className="w-5 h-5" />,
        text: "Independently developed a machine learning project in Python to predict diabetes",
        impact: "ML Implementation",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Applied the full data science lifecycle under guided mentorship",
        impact: "End-to-End Learning",
      },
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    gradient: "from-green-500/10 to-teal-500/10",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative AI solutions and leading teams to success
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br ${exp.gradient} border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-orbitron group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <Badge variant="outline" className="border-muted-foreground/50">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">{achievement.icon}</div>
                          <div className="flex-1">
                            <p className="text-muted-foreground leading-relaxed mb-1">{achievement.text}</p>
                            <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                              {achievement.impact}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recognition Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-500/20 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
                className="inline-block mb-4"
              >
                <Award className="w-16 h-16 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-bold font-orbitron mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Recognition
              </h3>
              <p className="text-lg text-yellow-200 mb-1">Most Committed Contributor of the Year 2023–2024</p>
              <p className="text-yellow-300/80">Equations Work IT Services Pvt. Ltd.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
