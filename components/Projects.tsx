"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, FileVideo, ExternalLink, Github, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "SceneSearch AI",
    subtitle: "AI-Powered Semantic Video Search",
    description: "Revolutionary AI platform enabling natural language video search with instant scene navigation.",
    longDescription:
      "Built an AI-driven platform that allows users to search and instantly navigate to specific video scenes using natural language queries. Utilized Retrieval-Augmented Generation (RAG) to deliver fast, precise clip extraction from any uploaded movie or short video.",
    icon: <Search className="w-8 h-8" />,
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Natural language video search (e.g., 'show me the fight scene')",
      "Automated transcription via OpenAI Whisper",
      "Semantic search powered by LangChain and DeepSeek LLM",
      "Real-time video clip extraction using FFmpeg",
      "Netflix-style UI with Material UI",
      "Light/dark mode toggle and persistent settings",
    ],
    technologies: [
      "React.js",
      "Material UI",
      "FastAPI",
      "LangChain",
      "DeepSeek R-1:1.5B",
      "Whisper",
      "FAISS",
      "FFmpeg",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SlideStream",
    subtitle: "PowerPoint to Video Converter",
    description: "Automated system converting PowerPoint presentations into narrated videos with synchronized speech.",
    longDescription:
      "Developed a comprehensive system to convert PowerPoint presentations into narrated videos by extracting speaker notes and synchronizing slides with synthesized speech. Delivered an end-to-end automated solution with an intuitive Windows GUI.",
    icon: <FileVideo className="w-8 h-8" />,
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Extract speaker notes from PowerPoint files",
      "Convert notes to speech using Azure Text-to-Speech",
      "Customizable voice models, languages, and speech speed",
      "Transform slides into PNG images",
      "Generate synchronized MP4 videos with FFmpeg",
      "Windows Forms GUI for easy configuration",
    ],
    technologies: ["Python", "Azure Text-to-Speech", "FFmpeg", "Windows Forms", "Visual Studio"],
    gradient: "from-purple-500/20 to-pink-500/20",
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card
                className={`h-full bg-gradient-to-br ${project.gradient} border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-background/50 rounded-lg backdrop-blur-sm">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl font-orbitron">{project.title}</CardTitle>
                      <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-background/50 border-border/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-background/50 border-border/50">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demoUrl, "_blank")
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">{selectedProject.icon}</div>
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
