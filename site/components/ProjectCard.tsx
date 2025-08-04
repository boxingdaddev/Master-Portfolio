'use client'
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
    <div className="rounded-xl shadow-md hover:shadow-xl transition p-4 mb-8 bg-white dark:bg-gray-800 dark:shadow-gray-700">
      <div className="flex flex-col">
        {/* Media */}
        <div className="relative w-full h-56 overflow-hidden rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          ) : thumbnail ? (
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-500 text-sm">Preview Coming Soon</span>
          )}
        </div>

        {/* Text */}
        <div className="pt-2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-xs text-gray-500 mb-4">{tech}</p>
          <Link href={link} target="_blank" className="text-blue-500 underline">
            View Project
          </Link>
        </div>
      </div>
    </div>
  )
}
