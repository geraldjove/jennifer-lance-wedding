import React from "react";

const Hero = () => {
  return (
    <div className="backgroundFlowerHero">
      <section
        id="home"
        className="container mx-auto h-[100vh] flex justify-center items-center p-10 "
      >
        <div className=" flex flex-col text-center space-y-4">
          <h1>
            <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C] drop-shadow-lg">
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
    </div>
  );
};

export default Hero;
