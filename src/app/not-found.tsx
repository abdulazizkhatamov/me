// app/not-found.tsx

import Link from "next/link";
import { Button } from "@/components/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-center gap-6 px-4 md:px-8 lg:px-12 py-8 md:py-10 text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-red-500 dark:text-canary">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
            Page Not Found
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button asChild variant="primary" icon={<ArrowLeftIcon />}>
            Back to Home
          </Button>
        </Link>
      </section>
    </main>
  );
}
