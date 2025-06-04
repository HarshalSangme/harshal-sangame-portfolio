import { Brain, Code, Database, Cloud, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "React.js",
        "Next.js",
        "Electron.js",
        "Python (Flask & FastAPI)",
        "Node.js",
        "RESTful APIs",
        "Prisma",
        "PostgreSQL",
        "MySQL",
        "JavaScript/TypeScript",
        "C++",
        "SQL",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Generative AI & Agentic Systems",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "Retrieval-Augmented Generation (RAG)",
        "LangChain",
        "OpenAI / Azure OpenAI",
        "CrewAI",
        "LangGraph",
        "Multimodal AI",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Vector Databases & Retrieval",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "PGVector",
        "FAISS",
        "OpenSearch",
        "Advanced Retrieval Techniques",
        "ModelContextProtocol (MCP)",
        "Distributed Inference Orchestration",
      ],
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "AI & Cognitive Services",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "Azure Speech Studio",
        "Speech & Audio Processing",
        "Translation & Transcription",
        "Speaker Recognition",
        "Intent Recognition",
        "Keyword Recognition",
      ],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Tooling & Productivity",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Git",
        "Postman",
        "Power Automate",
        "Power Apps",
        "VS Code",
        "React Flow",
        "Figma",
        "JIRA",
        "GitHub Actions",
        "AWS ECS",
        "Terraform",
        "Docker",
      ],
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${category.gradient} border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-white/10 rounded-lg">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/10 text-white border-white/20 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
