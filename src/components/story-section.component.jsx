import React from "react";

const StorySection = ({ title1, title2, paragraph, bgColor, imageColor }) => {
  return (
    <section
      className="h-[100vh]  flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <span className="font-light sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C] ">
            {title1}{" "}
          </span>
          <span className="font-baskervville sm:text-[8rem] font-bold text-[#EFD19C]">
            {title2}
          </span>
        </div>
        <div className="mb-10">
          <p className="text-[#EFD19C]">{paragraph}</p>
        </div>
        <div
          className=" h-[500px] w-[1080px] rounded-xl mx-auto"
          style={{ backgroundColor: imageColor }}
        ></div>
      </div>
    </section>
  );
};

export default StorySection;
