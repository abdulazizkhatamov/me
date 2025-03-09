export default function AboutHeader() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-4 md:px-8 lg:px-12 py-20 md:py-32">
      <div className="inline-block max-w-3xl text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          About Me
        </h1>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          Who am I ?
        </h3>
        <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
          I’m a passionate developer from Uzbekistan, crafting high-performance
          web applications since 2020. With expertise in{" "}
          <b>React, Next.js, Tailwind, Node.js, and PostgreSQL</b>, I specialize
          in building scalable, secure, and efficient digital solutions.
        </p>

        <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
          My journey into development started in 2020 when I became fascinated
          by how software powers the world around us. Over the years, I have
          built{" "}
          <b>
            e-commerce platforms, authentication systems, and API-driven
            applications
          </b>
          , always prioritizing performance, security, and scalability.
        </p>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          My Tech Stack
        </h3>
        <ul className="text-black dark:text-gray-200 mt-3 text-base list-disc pl-5">
          <li>
            <b>Frontend:</b> React, Next.js, TypeScript, Tailwind CSS
          </li>
          <li>
            <b>Backend:</b> Node.js, Express.js, Prisma, Sequelize
          </li>
          <li>
            <b>Databases:</b> PostgreSQL, MongoDB
          </li>
          <li>
            <b>State Management:</b> React Query, Redux Toolkit
          </li>
          <li>
            <b>Authentication:</b> JWT, OAuth
          </li>
          <li>
            <b>DevOps & Tools:</b> Docker, Ubuntu, Git, CI/CD
          </li>
          <li>
            <b>Other:</b> WebSockets (real-time apps), GraphQL
          </li>
        </ul>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          Why Work With Me?
        </h3>
        <ul className="text-black dark:text-gray-200 mt-3 text-base list-disc pl-5">
          <li>
            <b>Problem Solver:</b> I enjoy tackling complex challenges and
            finding elegant solutions.
          </li>
          <li>
            <b>Performance-Focused:</b> I optimize applications for speed and
            efficiency.
          </li>
          <li>
            <b>Security-First Approach:</b> I ensure that applications are
            secure from the ground up.
          </li>
          <li>
            <b>Scalability in Mind:</b> I build systems that grow with your
            business.
          </li>
        </ul>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          Beyond Development
        </h3>
        <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
          When I’m not coding, you’ll probably find me{" "}
          <b>exploring blockchain technology</b>, diving into{" "}
          <b>crypto trading</b>, or watching <b>historical series</b> like{" "}
          <i>Marco Polo</i> and <i>Rise of Empires: Ottoman</i>. I also enjoy
          movies like <i>Allied (2016)</i> and <i>The Gorge (2025)</i>, as well
          as playing video games like <i>Europa Universalis IV</i> and{" "}
          <i>Dota 2</i>.
        </p>
      </div>
    </section>
  );
}
