import React from "react";
import SectionDefault from "./section.component";
import RSVPQRCode from "../assets/img/RSVP_QRCode.png";

const RSVP = () => {
  return (
    <SectionDefault bgColor="#2F5946" id="rsvp">
      <div className="container mx-auto  text-center ">
        <div>
          <h1>
            <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
              The{" "}
            </span>
            <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
              RSVP
            </span>
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <br></br>
        <div className="bg-[#234435] rounded-xl h-[200px] w-[200px] mx-auto">
          <img src={RSVPQRCode} />
        </div>
      </div>
    </SectionDefault>
  );
};

export default RSVP;
