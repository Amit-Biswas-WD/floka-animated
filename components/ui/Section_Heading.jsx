"use client";

const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={`text-5xl text-[#0A0A0A] font-normal leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
