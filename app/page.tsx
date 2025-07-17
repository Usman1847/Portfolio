"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { SimpleLoader } from "@/components/simple-loader"
import {
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Globe,
  Calendar,
  Briefcase,
  Star,
  Heart,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    backend: ["Node.js", "Python", "Express", "FastAPI", "Django", "GraphQL"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
    tools: ["Docker", "AWS", "Vercel", "Git", "Jest", "Cypress"],
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      tech: ["Vue.js", "Python", "FastAPI", "WebSocket", "OpenAI API"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed client websites and web applications using modern frameworks and best practices.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description:
        "Built responsive user interfaces and collaborated with design teams to implement pixel-perfect designs.",
    },
  ]

  if (isLoading) {
    return <SimpleLoader />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-cyan-950/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-yellow-300/30 dark:bg-yellow-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative group hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="relative mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="relative rounded-full mx-auto border-4 border-background shadow-2xl transform group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              John{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer & <span className="text-primary font-semibold">Problem Solver</span>
            </p>

            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about creating <span className="text-pink-600 font-semibold">scalable web applications</span>{" "}
              and turning ideas into reality. Specialized in modern JavaScript frameworks and{" "}
              <span className="text-cyan-600 font-semibold">cloud technologies</span>.
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="transform hover:scale-105 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="#projects">
                  <Code2 className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transform hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="mailto:john@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate full stack developer with over{" "}
                <span className="text-primary font-semibold">5 years of experience</span> building web applications that
                solve real-world problems. I love working with cutting-edge technologies and am always eager to learn
                new skills.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                My expertise spans across frontend frameworks like{" "}
                <span className="text-cyan-600 font-semibold">React and Vue.js</span>, backend technologies including
                <span className="text-green-600 font-semibold"> Node.js and Python</span>, and various databases and
                cloud platforms.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-blue-500" />
                  Available for remote work
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, number: "50+", label: "Projects Completed", color: "text-purple-500" },
                { icon: Briefcase, number: "5+", label: "Years Experience", color: "text-blue-500" },
                { icon: Server, number: "20+", label: "Technologies", color: "text-green-500" },
                { icon: Heart, number: "100%", label: "Client Satisfaction", color: "text-pink-500" },
              ].map(({ icon: Icon, number, label, color }, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${color}`} />
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {number}
                    </div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Frontend", icon: Code2, skills: skills.frontend, color: "from-purple-500 to-pink-500" },
              { title: "Backend", icon: Server, skills: skills.backend, color: "from-blue-500 to-cyan-500" },
              { title: "Database", icon: Database, skills: skills.database, color: "from-green-500 to-emerald-500" },
              { title: "Tools & Cloud", icon: Globe, skills: skills.tools, color: "from-orange-500 to-red-500" },
            ].map(({ title, icon: Icon, skills: skillList, color }, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                      >
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

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-video relative">
                  {project.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-muted transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      asChild
                    >
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                {index !== experience.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-border -translate-x-0.5"></div>
                )}
                <Card className="ml-4 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Let's work together
                </CardTitle>
                <CardDescription className="text-lg">
                  I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like
                  to collaborate!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Developer. Built with <Heart className="inline h-4 w-4 text-red-500" /> using Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
