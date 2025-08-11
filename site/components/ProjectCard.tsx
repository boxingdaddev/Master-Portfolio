"use client";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  link?: string;
  thumbnail?: string;
  video?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  showPlayBadgePlaceholder?: boolean; // NEW
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  thumbnail,
  video,
  appStoreUrl,
  playStoreUrl,
  showPlayBadgePlaceholder, // ✅ add this
}: ProjectCardProps) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-xl transition p-4 mb-8 bg-white dark:bg-gray-800 dark:shadow-gray-700">
      <div className="flex flex-col">
        {/* Media */}
        <div className="relative w-full md:aspect-[9/16] lg:aspect-[9/16] overflow-hidden rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center max-h-[70vh] md:max-h-[60vh] mx-auto">
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
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500 text-sm">Preview Coming Soon</span>
          )}
        </div>

        {/* Text */}
        <div className="pt-2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-2">{description}</p>
          <p className="text-xs text-[#6B7280] dark:text-[#93B8BF] mb-4">
            {tech}
          </p>

          {/* Link + badges row (full width with equal spacing) */}
          {(link ||
            appStoreUrl ||
            playStoreUrl ||
            showPlayBadgePlaceholder) && (
            <div className="flex w-full justify-between items-center mt-1">
              {/* Left: View Project */}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Project
                </Link>
              )}

              {/* Middle: App Store */}
              {appStoreUrl && (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <img
                    src="/images/app-store-badge-white.svg"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
              )}

              {/* Right: Play Store or placeholder */}
              {playStoreUrl ? (
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="/images/google-play-badge-white.svg"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              ) : (
                showPlayBadgePlaceholder && (
                  <span
                    aria-disabled="true"
                    className="opacity-60 pointer-events-none select-none"
                  >
                    <img
                      src="/images/google-play-badge-white.svg"
                      alt="Google Play (coming soon)"
                      className="h-10"
                    />
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
