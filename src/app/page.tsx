import { DownloadIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-center gap-6 px-4 md:px-8 lg:px-12 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            Hello,&nbsp;
            <span className="text-red-500 dark:text-canary">
              I’m Abdulaziz.
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Full-Stack Developer
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I’m a talented freelancer from Uzbekistan with over 4 years of
            experience in full-stack development. I specialize in building
            scalable web applications and crafting seamless user experiences.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-800 hover:bg-gray-700 transition"
            href="download"
          >
            <DownloadIcon width={20} height={20} />
            Download CV
          </Link>
          <Link
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-800 hover:bg-gray-700 transition"
            href="github"
          >
            <GitHubLogoIcon width={20} height={20} />
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
