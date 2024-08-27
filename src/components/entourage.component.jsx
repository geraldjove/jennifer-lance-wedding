import React from "react";
import SectionDefault from "./section.component";

const Entourage = () => {
  return (
    <div className="backgroundGoldFloral">
      <SectionDefault id="entourage">
        <div className="container mx-auto text-center">
          <div>
            <h1>
              <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
                The{" "}
              </span>
              <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
                Entourage
              </span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2">
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold font-baskervville">
                Parents of the Groom
              </h2>
              <ul className="text-[18px] font-baskervville">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold font-baskervville">
                Parents of the Bride
              </h2>
              <ul className="text-[18px] font-baskervville">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-[25px] font-bold font-baskervville">
                Principal Sponsors
              </h2>
              <p className="font-baskervville">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <ul className="font-baskervville">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="text-center col-span-2">
              <h2 className="text-[25px] font-bold italic">
                To Assist us with our needs
              </h2>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold">Best Man</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold">Maid of Honor</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="text-center col-span-2">
              <h2 className="text-[25px] font-bold italic">
                To guide us in our way
              </h2>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold ">Groomsmen</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h2 className="text-[25px] font-bold">Bridesmaids</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="text-center col-span-2">
              <h2 className="text-[25px] font-bold">Secondary Sponsors</h2>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h3 className="text-[18px] font-bold">To light our path</h3>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5 col-span-2 sm:col-span-1">
              <h3 className="text-[18px] font-bold">To clothe us as one</h3>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-[25px] font-bold italic">
                To bind us together
              </h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            {/* This is the end of the div grid */}
          </div>
          <div className="grid sm:grid-cols-3 p-5 space-y-4">
            <div className="col-span-3">
              <h2 className="text-[25px] font-bold italic">
                To carry our symbol of love, treasure, and faith
              </h2>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <h2 className="text-[25px] font-bold ">Ring Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <h2 className="text-[25px] font-bold">Coin Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <h2 className="text-[25px] font-bold">Bible Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionDefault>
    </div>
  );
};

export default Entourage;
