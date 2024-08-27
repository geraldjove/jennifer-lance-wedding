import React from "react";
import SectionDefault from "./section.component";
import { FaChurch, FaWineBottle } from "react-icons/fa";
import GoogleMaps from "./maps.component";
import Map_QRCode from "../assets/img/Map_QRCode.png";

const Venue = () => {
  return (
    <>
      <SectionDefault bgColor="#234435" id="venue">
        <div className="container mx-auto  text-center space-y-5">
          <div>
            <h1>
              <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
                The{" "}
              </span>
              <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
                Venue
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i>
              <FaChurch className="text-[100px] p-5" />
            </i>
            <h2 className="text-[25px] font-bold font-baskervville">
              The Ceremony
            </h2>
            <h3 className="font-bold font-baskervville">
              Lights of Love Events Place
            </h3>
            <h4 className="text-[18px] font-baskervville">Quezon City</h4>
            <h4 className="text-[18px] font-baskervville">3:00 PM</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i>
              <FaWineBottle className="text-[100px] p-5" />
            </i>
            <h2 className="text-[25px] font-bold font-baskervville">
              The Reception
            </h2>
            <h3 className="font-bold text-[18px] font-baskervville">
              To Follow
            </h3>
          </div>
        </div>
      </SectionDefault>
      <SectionDefault bgColor="#2F5946">
        <div className="container mx-auto text-center space-y-4">
          <div>
            <h1>
              <span className="font-baskervville text-[40px] sm:text-[3rem] font-bold text-[#EFD19C]">
                Map going the the Ceremony Venue
              </span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5">
              <h2 className="font-baskervville">Important Details</h2>
              <br></br>
              <p className="font-baskervville">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <br></br>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <br></br>
              <div className=" bg-[#234435] rounded-xl h-[200px] w-[200px] mx-auto">
                <img src={Map_QRCode} />
              </div>
            </div>
            <div className=" bg-[#234435] rounded-xl h-[500px]">
              <GoogleMaps />
            </div>
          </div>
        </div>
      </SectionDefault>
    </>
  );
};

export default Venue;
