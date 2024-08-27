import React from "react";
import StorySection from "./story-section.component";

const Story = () => {
  return (
    <>
      <section
        id="story"
        className=" bg-[#234435] mx-auto h-[100vh] p-10 flex flex-col justify-center backgroundFlower"
      >
        <div className="container mx-auto">
          <div className="me-auto">
            <h1 className="drop-shadow-md">
              <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
                Our{" "}
              </span>
              <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
                Story
              </span>
            </h1>
          </div>
          <div>
            <p className="text-[#EFD19C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="grid grid-cols-7 justify-center items-center">
            <div className="mx-auto">
              <span className="circle-sm1 block"></span>
            </div>
            <span className="hz-line"></span>
            <div className="mx-auto">
              <span className="circle-sm2 block"></span>
            </div>
            <span className="hz-line"></span>
            <div className="mx-auto">
              <span className="circle-sm3 block"></span>
            </div>
            <span className="hz-line"></span>
            <div className="mx-auto">
              <span className="circle-sm4 block"></span>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center text-[#EFD19C] mt-5 ">
            <h3>
              <span className="font-bold font-baskervville text-xs sm:text-lg">
                First Interaction
              </span>
            </h3>
            <i></i>
            <h3>
              <span className="font-bold font-baskervville text-xs sm:text-lg">
                How It Started
              </span>
            </h3>
            <i></i>
            <h3>
              <span className="font-bold font-baskervville text-xs sm:text-lg">
                Our Struggles
              </span>
            </h3>
            <i></i>
            <h3>
              <span className="font-bold font-baskervville text-xs sm:text-lg">
                To Lifetime
              </span>
            </h3>
          </div>
        </div>
      </section>
      <StorySection
        title1={"First"}
        title2={"Interaction"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        bgColor={"#2F5946"}
        imageColor={"#234435"}
      />
      <StorySection
        title1={"How"}
        title2={"It Started"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        bgColor={"#234435"}
        imageColor={"#2F5946"}
      />
      <StorySection
        title1={"Our"}
        title2={"Struggles"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        bgColor={"#2F5946"}
        imageColor={"#234435"}
      />
      <StorySection
        title1={"To"}
        title2={"Lifetime"}
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`}
        bgColor={"#234435"}
        imageColor={"#2F5946"}
      />
    </>
  );
};

export default Story;
