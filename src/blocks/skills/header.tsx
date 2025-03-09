"use client";

import { useAnimate } from "motion/react";
import { IconType } from "react-icons";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPm2,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function SkillsHeader() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 py-20 md:py-32 text-center">
      <h2 className="text-4xl font-bold mb-6">My Tech Stack & Expertise</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        I specialize in building scalable and high-performance applications
        using modern web technologies. Here’s a preview of my key skills and
        tools:
      </p>

      <div className=" px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <ClipPathLinks />
        </div>
      </div>
    </section>
  );
}

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900 dark:border-neutral-100 dark:divide-neutral-100">
      <div className="grid grid-cols-2 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiHtml5} href="#" />
        <LinkBox Icon={SiCss3} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiJavascript} href="#" />
        <LinkBox Icon={SiTypescript} href="#" />
        <LinkBox Icon={SiReact} href="#" />
        <LinkBox Icon={SiNextdotjs} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiTailwindcss} href="#" />
        <LinkBox Icon={SiRedux} href="#" />
        <LinkBox Icon={SiReactquery} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiFramer} href="#" />
        <LinkBox Icon={SiShadcnui} href="#" />
        <LinkBox Icon={SiRadixui} href="#" />
        <LinkBox Icon={SiMaterialdesign} href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiNodedotjs} href="#" />
        <LinkBox Icon={SiExpress} href="#" />
      </div>
      <div className="grid grid-cols-5 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiPostgresql} href="#" />
        <LinkBox Icon={SiPrisma} href="#" />
        <LinkBox Icon={SiMongodb} href="#" />
        <LinkBox Icon={SiMongoose} href="#" />
        <LinkBox Icon={SiMysql} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={TbApi} href="#" />
        <LinkBox Icon={SiGraphql} href="#" />
        <LinkBox Icon={SiSocketdotio} href="#" />
        <LinkBox Icon={SiJsonwebtokens} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiGit} href="#" />
        <LinkBox Icon={SiGithub} href="#" />
        <LinkBox Icon={SiGitlab} href="#" />
      </div>
      <div className="grid grid-cols-5 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiDocker} href="#" />
        <LinkBox Icon={SiNginx} href="#" />
        <LinkBox Icon={SiPm2} href="#" />
        <LinkBox Icon={SiUbuntu} href="#" />
        <LinkBox Icon={SiVercel} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
