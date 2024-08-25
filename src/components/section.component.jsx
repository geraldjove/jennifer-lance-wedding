import React from "react";

const SectionDefault = ({ children, bgColor, id }) => {
  return (
    <section
      className="h-[100%] p-5"
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <div className="container mx-auto  text-center">{children}</div>
    </section>
  );
};

export default SectionDefault;
