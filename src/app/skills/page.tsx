"use client";

import SectionWrapper from "@/components/section-wrapper";
import { useAnimate } from "motion/react";
import { IconType } from "react-icons";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastify,
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

export default function Page() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        My Tech Stack & Expertise
      </h2>
      <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
        I specialize in building scalable and high-performance applications
        using modern web technologies. Here’s a preview of my key skills and
        tools:
      </p>

      <div className="mt-10">
        <ClipPathLinks />
      </div>
    </SectionWrapper>
  );
}

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900 dark:border-neutral-100 dark:divide-neutral-100">
      <div className="grid grid-cols-2 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiHtml5} />
        <LinkBox Icon={SiCss3} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiJavascript} />
        <LinkBox Icon={SiTypescript} />
        <LinkBox Icon={SiReact} />
        <LinkBox Icon={SiNextdotjs} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiTailwindcss} />
        <LinkBox Icon={SiRedux} />
        <LinkBox Icon={SiReactquery} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiFramer} />
        <LinkBox Icon={SiShadcnui} />
        <LinkBox Icon={SiRadixui} />
        <LinkBox Icon={SiMaterialdesign} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiNodedotjs} />
        <LinkBox Icon={SiFastify} />
        <LinkBox Icon={SiExpress} />
      </div>
      <div className="grid grid-cols-5 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiPostgresql} />
        <LinkBox Icon={SiPrisma} />
        <LinkBox Icon={SiMongodb} />
        <LinkBox Icon={SiMongoose} />
        <LinkBox Icon={SiMysql} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={TbApi} />
        <LinkBox Icon={SiGraphql} />
        <LinkBox Icon={SiSocketdotio} />
        <LinkBox Icon={SiJsonwebtokens} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiGit} />
        <LinkBox Icon={SiGithub} />
        <LinkBox Icon={SiGitlab} />
      </div>
      <div className="grid grid-cols-5 divide-x divide-neutral-900 dark:divide-neutral-100">
        <LinkBox Icon={SiDocker} />
        <LinkBox Icon={SiNginx} />
        <LinkBox Icon={SiPm2} />
        <LinkBox Icon={SiUbuntu} />
        <LinkBox Icon={SiVercel} />
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

const LinkBox = ({ Icon }: { Icon: IconType }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
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

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
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
    </div>
  );
};
