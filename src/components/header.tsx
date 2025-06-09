import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="akash dewangan" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          bhilai, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          building @molecule
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a data science undergrad with a strong interest in deep learning, competitive programming, and web development. I enjoy building projects from the ground up and often find myself diving into research papers just to satisfy my curiosity.
      </p>
      <p className="leading-relaxed animate-fade-in-up">
        outside of tech, I like playing chess, sketching whatever comes to mind, and exploring photography. Whether it's capturing light through a lens or solving a tricky puzzle on the board, I’m always up for something creative or challenging.
      </p>    
    </header>
  )
}
