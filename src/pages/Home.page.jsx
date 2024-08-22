import React from "react";
import StorySection from "../components/story-section.component";

const Home = () => {
  return (
    <>
      <section className="container bg-[#2F5946] mx-auto h-[100vh] flex justify-center items-center p-10">
        <div className=" flex flex-col text-center space-y-4">
          <span className="font-light sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
            Jennifer & Lance
          </span>
          <span className="font-baskervville sm:text-[2rem] text-[#EFD19C]">
            TIE THE KNOT
          </span>
          <span className="font-baskervville text-[1.5rem] italic text-[#EFD19C]">
            With immense joy and excitement, we invite you to join us on our
            special day as we exchange our vows and celebrate our love.
          </span>
          <span className="font-baskervville sm:text-[2rem] text-[#EFD19C]">
            12.07.24
          </span>
        </div>
      </section>
      <section className=" bg-[#234435] mx-auto h-[100vh] p-10 flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="me-auto">
            <span className="font-light sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
              Our{" "}
            </span>
            <span className="font-baskervville sm:text-[8rem] font-bold text-[#EFD19C]">
              Story
            </span>
          </div>
          <div className="">
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
          <div className="grid grid-cols-7 text-center text-[#EFD19C] mt-5">
            <span className="font-bold font-baskervville">
              First Interaction
            </span>
            <i></i>
            <span className="font-bold font-baskervville">How It Started</span>
            <i></i>
            <span className="font-bold font-baskervville">Our Struggles</span>
            <i></i>
            <span className="font-bold font-baskervville">To Lifetime</span>
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
      <section className=" bg-[#2F5946] mx-auto h-[1500px] p-10 flex flex-col justify-center">
        <div className="container mx-auto space-y-5">
          <div className="me-auto">
            <span className="font-light sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
              The{" "}
            </span>
            <span className="font-baskervville sm:text-[8rem] font-bold text-[#EFD19C]">
              Entourage
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-center font-baskervville text-[#EFD19C]">
            <div className="bg-[#234435] rounded-xl p-5">
              <h1 className="font-bold text-xl">PARENTS OF THE GROOM</h1>
              <ul>
                <li className="font-medium text-xl italic">Lorem Ipsum</li>
                <li className="font-medium text-xl italic">Lorem Ipsum</li>
              </ul>
            </div>
            <div className="bg-[#234435] rounded-xl p-5">
              <h1 className="font-bold text-xl">PARENTS OF THE BRIDE</h1>
              <ul>
                <li className="font-medium text-xl italic">Lorem Ipsum</li>
                <li className="font-medium text-xl italic">Lorem Ipsum</li>
              </ul>
            </div>
          </div>
          <div className="text-center font-baskervville text-[#EFD19C] bg-[#234435] rounded-xl p-5 space-y-5">
            <h1 className="text-xl font-bold">PRINCIPAL SPONSORS</h1>
            <p className="text-lg mb-5">
              To stand as principal witnesses in our exchange of vows
            </p>
            <div className="grid sm:grid-cols-2 gap-4 w-[800px] mx-auto">
              <div>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="text-center font-baskervville text-[#EFD19C] bg-[#234435] rounded-xl p-5 space-y-5">
              <p className="text-lg mb-5">To assist us with our needs</p>
              <div className="grid sm:grid-cols-2">
                <div className="text-center  mx-auto">
                  <ul>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  </ul>
                </div>
                <div className="text-center  mx-auto">
                  <ul>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center font-baskervville text-[#EFD19C] bg-[#234435] rounded-xl p-5 space-y-5">
              <p className="text-lg mb-5">To guide us in our way</p>
              <div className="grid sm:grid-cols-2">
                <div className="text-center  mx-auto">
                  <ul>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  </ul>
                </div>
                <div className="text-center  mx-auto">
                  <ul>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                    <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-baskervville text-[#EFD19C] bg-[#234435] rounded-xl p-5 space-y-5">
            <h1 className="text-xl font-bold">SECONDARY SPONSORS</h1>

            <div className="grid sm:grid-cols-3 gap-4 w-[800px] mx-auto">
              <div>
                <p className="text-lg mb-5">To light our path</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-5">To clothe us as one</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-5">To bind us together</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center font-baskervville text-[#EFD19C] bg-[#234435] rounded-xl p-5 space-y-5">
            <h1 className="text-xl font-medium">
              To carry our symbol of love, treasure, and faith
            </h1>

            <div className="grid sm:grid-cols-3 gap-4 w-[800px] mx-auto">
              <div>
                <p className="text-lg mb-5 uppercase">ring bearer</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-5 uppercase">coin bearer</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
              <div>
                <p className="text-lg mb-5 uppercase">bible bearer</p>
                <ul>
                  <li className="font-medium text-xl italic">Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
