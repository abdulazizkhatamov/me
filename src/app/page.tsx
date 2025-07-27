import { Button } from "@/components/button";
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
          <Link href="download">
            <Button asChild variant="primary" icon={<DownloadIcon />}>
              Download CV
            </Button>
          </Link>
          <Link href="github">
            <Button asChild variant="outline" icon={<GitHubLogoIcon />}>
              GitHub
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
