import React from "react";
import SectionDefault from "./section.component";

const Attire = () => {
  return (
    <SectionDefault bgColor="#234435" id="attire">
      <div>
        <h1>
          <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
            The{" "}
          </span>
          <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
            Attire
          </span>
        </h1>
      </div>
      <div>
        <h1 className="text-5xl font-bold tracking-widest p-5 font-baskervville">
          Formal
        </h1>
      </div>
      <div className="grid sm:grid-cols-5 p-5 space-y-4">
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto"></div>
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto"></div>
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto"></div>
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto"></div>
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto"></div>
      </div>
      <div className="p-5">
        <p className="font-baskervville">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br></br>
        <p className="font-baskervville">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br></br>
        <p className="font-baskervville">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h1 className="text-5xl font-bold tracking-widest p-5 font-baskervville">
          For Principal Sponsors
        </h1>
      </div>
      <div className="grid sm:grid-cols-5 p-5">
        <div className="bg-[#2F5946] h-[100px] w-[100px] rounded-full mx-auto col-span-5"></div>
      </div>
      <div className="px-5">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br></br>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br></br>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </SectionDefault>
  );
};

export default Attire;
