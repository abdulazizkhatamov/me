"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import projects from "@/data/projects.json";
import Link from "next/link";
import { Button } from "@/components/button";

export default function Page() {
  const progressCircle = React.useRef<SVGSVGElement>(null);
  const progressContent = React.useRef<HTMLDivElement>(null);

  const onAutoplayTimeLeft = (_s: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="w-screen min-h-screen py-10 md:py-0">
      <Swiper
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full min-h-screen"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="w-full min-h-screen relative flex items-center justify-start">
              <div className="absolute inset-0 backdrop-blur-sm" />

              <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-0">
                <h2 className="text-5xl font-extrabold mb-2">
                  {project.title}
                </h2>

                <p className="text-xl italic mb-4">{project.subtitle}</p>

                <p className="text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Role & Duration */}
                <div className="text-sm text-foreground-dark/70 dark:text-foreground-light/70 mb-8 space-y-1">
                  {project.role && (
                    <p>
                      <strong>Role:</strong> {project.role}
                    </p>
                  )}
                  {project.duration && (
                    <p>
                      <strong>Duration:</strong> {project.duration}
                    </p>
                  )}
                </div>

                {/* Features */}
                {project.features?.length > 0 && (
                  <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-foreground-light/10 dark:bg-foreground-dark/10 text-xs px-3 py-1 rounded-full border border-foreground-light/20 dark:border-foreground-dark/30 text-foreground-dark dark:text-foreground-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button asChild variant="primary">
                        Live Site
                      </Button>
                    </Link>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button asChild variant="outline">
                        GitHub
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay Progress Circle */}
        {projects.length > 1 && (
          <div
            className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-foreground-dark dark:text-foreground-light"
            slot="container-end"
          >
            <svg
              className="absolute left-0 top-0 z-10 w-full h-full stroke-foreground-dark dark:stroke-foreground-light"
              style={{
                strokeWidth: "4px",
                fill: "none",
                strokeDasharray: "125.6",
                strokeDashoffset: "calc(125.6px * (1 - var(--progress)))",
                transform: "rotate(-90deg)",
              }}
              viewBox="0 0 48 48"
              ref={progressCircle}
            >
              <circle cx="24" cy="24" r="20" />
            </svg>
            <span ref={progressContent}></span>
          </div>
        )}
      </Swiper>
    </div>
  );
}
