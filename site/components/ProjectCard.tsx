import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  tech: string
  link: string
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-xs text-gray-500 mb-4">{tech}</p>
      <Link href={link} target="_blank" className="text-blue-500 underline">
        View Project
      </Link>
    </div>
  )
}
