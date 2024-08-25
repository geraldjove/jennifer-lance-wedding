import React from "react";
import StorySection from "../components/story-section.component";
import { FaChurch, FaWineBottle } from "react-icons/fa";
import { createRoot } from "react-dom/client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="container bg-[#2F5946] mx-auto h-[100vh] flex justify-center items-center p-10"
      >
        <div className=" flex flex-col text-center space-y-4">
          <h1>
            <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
              Jennifer & Lance
            </span>
          </h1>
          <h2>
            <span className="font-baskervville sm:text-[2rem] text-[#EFD19C]">
              TIE THE KNOT
            </span>
          </h2>
          <p>
            <span className="font-baskervville text-[1.5rem] italic text-[#EFD19C]">
              With immense joy and excitement, we invite you to join us on our
              special day as we exchange our vows and celebrate our love.
            </span>
          </p>
          <h3>
            <span className="font-baskervville sm:text-[2rem] text-[#EFD19C]">
              12.07.24
            </span>
          </h3>
        </div>
      </section>
      <section
        id="story"
        className=" bg-[#234435] mx-auto h-[100vh] p-10 flex flex-col justify-center"
      >
        <div className="container mx-auto">
          <div className="me-auto">
            <h1>
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
      {/* Anything above here works just fine */}

      <section className="bg-[#2F5946] h-[100%] p-5">
        <div className="container mx-auto  text-center">
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
            <div className="mx-auto p-5">
              <h2 className="text-[25px] font-bold">Parents of the Groom</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5">
              <h2 className="text-[25px] font-bold">Parents of the Bride</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-[25px] font-bold">Principal Sponsors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="mx-auto p-5">
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5">
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
            <div className="mx-auto p-5">
              <h2 className="text-[25px] font-bold">Best Man</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5">
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
            <div className="mx-auto p-5">
              <h2 className="text-[25px] font-bold">Groomsmen</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5">
              <h2 className="text-[25px] font-bold">Bridesmaids</h2>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="text-center col-span-2">
              <h2 className="text-[25px] font-bold">Secondary Sponsors</h2>
            </div>
            <div className="mx-auto p-5">
              <h3 className="text-[18px] font-bold">To light our path</h3>
              <ul className="text-[18px]">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div className="mx-auto p-5">
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
          <div className="grid sm:grid-cols-3 p-5">
            <div className="col-span-3">
              <h2 className="text-[25px] font-bold italic">
                To carry our symbol of love, treasure, and faith
              </h2>
            </div>
            <div>
              <h2 className="text-[25px] font-bold">Ring Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[25px] font-bold">Coin Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[25px] font-bold">Bible Bearer</h2>
              <ul>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#234435] h-[100%] p-5">
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
            <h2 className="text-[25px] font-bold">The Ceremony</h2>
            <h3 className="font-bold">Lights of Love Events Place</h3>
            <h4 className="text-[18px]">Quezon City</h4>
            <h4 className="text-[18px]">3:00 PM</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <i>
              <FaWineBottle className="text-[100px] p-5" />
            </i>
            <h2 className="text-[25px] font-bold">The Reception</h2>
            <h3 className="font-bold text-[18px]">To Follow</h3>
          </div>
        </div>
      </section>
      <section className="bg-[#2F5946] h-[100%] p-5">
        <div className="container mx-auto  text-center">
          <div>
            <h1>
              <span className="font-baskervville text-[40px] sm:text-[3rem] font-bold text-[#EFD19C]">
                Map going the the Ceremony Venue
              </span>
            </h1>
          </div>
          <div className="grid sm:grid-cols-2">
            <div className="p-5">
              <h2>Important Details</h2>
              <br></br>
              <p>
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
              <div className="p-5 bg-[#234435] rounded-xl h-[200px] w-[200px] mx-auto"></div>
            </div>
            <div className="p-5 bg-[#234435] rounded-xl h-[500px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
