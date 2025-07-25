interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string; // e.g., 'bg-gray-100'
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bgColor,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-20 md:py-32 ${
        bgColor ?? ""
      } ${className}`}
    >
      <div className="w-full max-w-7xl">{children}</div>
    </section>
  );
}
