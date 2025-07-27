import SectionWrapper from "@/components/section-wrapper";

export default function Page() {
  return (
    <SectionWrapper>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Testimonials
      </h1>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
        What My Clients Say
      </h3>

      <div className="mt-6 space-y-8">
        <div className="border-l-4 pl-4 border-red-500 dark:border-canary">
          <p className="text-black dark:text-gray-200 text-base font-light italic">
            “Abdulaziz turned our outdated local website into a fast, modern
            platform. Communication was smooth, and the final product exceeded
            expectations.”
          </p>
          <p className="mt-2 font-semibold">— Murod M., Local Business Owner</p>
        </div>

        <div className="border-l-4 pl-4 border-red-500 dark:border-canary">
          <p className="text-black dark:text-gray-200 text-base font-light italic">
            “We needed a secure backend API with admin access and multilingual
            support — he delivered it fast and clean.”
          </p>
          <p className="mt-2 font-semibold">— Alexei K., Remote Client</p>
        </div>

        <div className="border-l-4 pl-4 border-red-500 dark:border-canary">
          <p className="text-black dark:text-gray-200 text-base font-light italic">
            “Professional, reliable, and really understands full stack
            development. I’ve worked with many freelancers — Abdulaziz is one of
            the best.”
          </p>
          <p className="mt-2 font-semibold">— Fatima R., Tech Consultant</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
