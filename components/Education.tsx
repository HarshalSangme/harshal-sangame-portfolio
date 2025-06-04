import { GraduationCap, Calendar, Award } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "Aug 2019 – Jun 2023",
      grade: "CGPA: 8.43 / 10.0",
      gradeType: "cgpa",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dr. D.Y. Patil Arts, Commerce & Science College, Pune",
      period: "Aug 2018 – May 2019",
      grade: "Score: 60.00 / 100.0",
      gradeType: "percentage",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Indira Gandhi High School, Pune",
      period: "Aug 2016 – Jun 2017",
      grade: "Score: 73.40 / 100.0",
      gradeType: "percentage",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                    <p className="text-lg text-blue-400 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`border-green-500/50 text-green-300 ${
                          edu.gradeType === "cgpa" ? "bg-green-500/10" : "bg-blue-500/10"
                        }`}
                      >
                        <Award className="w-4 h-4 mr-1" />
                        {edu.grade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
