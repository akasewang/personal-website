import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "company name",
    role: "your position",
    period: "timelime",
    description:
      "your contribution",
    href: "website",
  },
]

const educationItems: Item[] = [
  {
    title: "bhilai institute of technology - durg",
    role: "bachelor of technology in data science",
    period: "july 2021 - may 2025",
    description:
      "coursework: machine learning, big data analytics, statistics, discrete mathematics, data structures and algorithms, database management system, operating systems",
    href: "https://bitdurg.ac.in/",
  },
  {
    title: "delhi public school - bhilai",
    role: "intermediate",
    period: "april 2020 - july 2021",
    description:
      "93% in cbse (pcm), honored with pm trophy: merit scholarship for academic excellence",
    href: "https://dpsbhilai.in/index.php",
  },
]

const projectItems = [
  {
    title: "pramanit",
    role: "contributor",
    description:
      "blockchain platform for fraud-resistant certification platform with instant verification",
    href: "https://pramanit.co/",
  },
  {
    title: "RAG nvidia genai",
    role: "creator",
    description: "RAG document intelligence system- multi-pdf question-answering application",
    href: "https://github.com/akasewang/rag-nvidia-genai",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="education" items={educationItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
