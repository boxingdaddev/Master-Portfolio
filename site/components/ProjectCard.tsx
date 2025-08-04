import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  tech: string
  link: string
  thumbnail?: string // static image fallback
  video?: string // gif or video path
}

export default function ProjectCard({ title, description, tech, link, thumbnail, video }: ProjectCardProps) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-xl transition p-4 mb-8">
      <div className="mb-4 relative w-full h-48 overflow-hidden rounded-lg">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : thumbnail ? (
          <Image 
            src={thumbnail} 
            alt={`${title} thumbnail`} 
            fill 
            style={{ objectFit: 'cover' }}
          />
        ) : null}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-xs text-gray-500 mb-4">{tech}</p>
      <Link href={link} target="_blank" className="text-blue-500 underline">
        View Project
      </Link>
    </div>
  )
}
