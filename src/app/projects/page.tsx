import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "pramanit",
    description:
      "blockchain platform for secure credential verification",
    role: "contributor",
    period: "september 2024 - november 2024",
    highlights: [
      "achieved instant verification (<30 sec) for 5K+ documents",
      "implemented cryptographic verification slashing costs by 68%",
      "guaranteed tamper-proof records via blockchain anchoring",
    ],
    technologies: [
      "next.js",
      "tailwind css",
      "express.js",
      "diamante ",
      "plunk",
    ],
    href: "https://pramanit.co/",
  },
  {
    title: "RAG nvidia genai",
    description: "multi-pdf question-answering application",
    role: "creator",
    period: "march 2025",
    highlights: [
      "built RAG pipeline cutting query latency by 35%",
      "built high-accuracy pdf processor with 98% extraction rate",
      "optimized faiss for sub-second search across 200+ page documents",
    ],
    technologies: ["python", "nvidia nemo","streamlit"],
    href: "https://github.com/akaswang/rag-nvidia-genai",
  },
  {
    title: "soccer analysis",
    description: "soccer player tracking and performance analytics",
    role: "creator and maintainer",
    period: "january 2025 - february 2025",
    highlights: [
      "built yolov5/opencv system detecting players at 94% accuracy",
      "automated team assignment via k-means clustering",
      "engineered homography transforms with ±0.5m precision",
    ],
    technologies: ["opencv", "yolov5"],
    href: "https://github.com/akaswang/soccer-analysis",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">☍</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
      not just side projects—these are deliberate attempts to solve gnarly problems; some succeeded, all taught me something
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.akaswang.com/og/home?title=projects",
      },
    ],
  },
}
