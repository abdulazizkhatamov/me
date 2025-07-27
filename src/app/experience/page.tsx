import SectionWrapper from "@/components/section-wrapper";

export default function Page() {
  return (
    <SectionWrapper>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Experience
      </h1>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
        Freelance & Local Projects (2020 – Present)
      </h3>
      <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
        Since 2020, I’ve been working as a freelance full stack developer,
        delivering web solutions for clients both remotely and locally in
        Uzbekistan. While I haven’t worked at a formal company, I’ve completed
        numerous production-grade projects ranging from{" "}
        <b>e-commerce platforms</b> and <b>admin dashboards</b> to{" "}
        <b>API integrations</b> and <b>real-time apps</b>.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
        What I&apos;ve Done
      </h3>
      <ul className="text-black dark:text-gray-200 mt-3 text-base list-disc pl-5">
        <li>
          Built full stack web apps with <b>Next.js</b>, <b>Node.js</b>, and{" "}
          <b>PostgreSQL</b>
        </li>
        <li>
          Developed real-time dashboards using <b>WebSockets</b> (Socket.IO)
        </li>
        <li>Implemented secure authentication flows (JWT, OAuth, Sessions)</li>
        <li>
          Led technical decisions on small freelance teams using <b>Agile</b>{" "}
          workflows
        </li>
        <li>
          Deployed projects on <b>Vercel</b>, <b>Render</b>, and <b>Railway</b>{" "}
          with CI/CD pipelines
        </li>
      </ul>

      <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
        These experiences have shaped me into a pragmatic developer who can take
        a product from idea to launch—handling both backend and frontend with
        performance, security, and scalability in mind.
      </p>
    </SectionWrapper>
  );
}
