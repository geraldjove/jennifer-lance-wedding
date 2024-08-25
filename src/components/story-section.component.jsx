import React from "react";

const StorySection = ({ title1, title2, paragraph, bgColor, imageColor }) => {
  return (
    <section
      className="h-[100vh] flex flex-col justify-center items-center p-5"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1>
            <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C] ">
              {title1}{" "}
            </span>
            <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
              {title2}
            </span>{" "}
          </h1>
        </div>
        <div className="mb-10">
          <p className="text-[#EFD19C]">{paragraph}</p>
        </div>
        <div
          className=" max-h-[500px] max-w-[1080px] rounded-xl mx-auto"
          style={{ backgroundColor: imageColor }}
        ></div>
      </div>
    </section>
  );
};

export default StorySection;
