"use client";

import { useState } from "react";
import SectionWrapper from "@/components/section-wrapper";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <SectionWrapper>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
        Contact Me
      </h1>

      <p className="text-black dark:text-gray-200 mt-3 text-base font-light">
        Have a project in mind or just want to say hi? I’d love to hear from
        you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </form>

      <div className="mt-10 text-black dark:text-gray-200 space-y-2">
        <p>
          <b>Email:</b>{" "}
          <a
            href="mailto:abdulazizkhatamov@hotmail.com"
            className="relative py-1 transition hover:text-inherit
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
              after:bg-red-500 dark:after:bg-canary after:transition-all after:duration-300 hover:after:w-full"
          >
            abdulazizkhatamov@hotmail.com
          </a>
        </p>
        <p>
          <b>Telegram:</b>{" "}
          <a
            href="https://t.me/abdulaziz_khatamov"
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-1 transition hover:text-inherit
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
              after:bg-red-500 dark:after:bg-canary after:transition-all after:duration-300 hover:after:w-full"
          >
            @abdulaziz_khatamov
          </a>
        </p>
        <p>
          <b>GitHub:</b>{" "}
          <a
            href="https://github.com/abdulazizkhatamov"
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-1 transition hover:text-inherit
              after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
              after:bg-red-500 dark:after:bg-canary after:transition-all after:duration-300 hover:after:w-full"
          >
            github.com/abdulazizkhatamov
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
