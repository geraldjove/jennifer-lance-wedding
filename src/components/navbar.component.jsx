import React from "react";

const Navbar = () => {
  return (
    <div className=" h-[50px] fixed w-[100vw] top-0 bg-[#1C3A2C]">
      <div className="container h-[50px] mx-auto flex justify-between items-center p-5 font-baskervville font-bold text-[#EFD19C]">
        <div className="flex">
          <ul>
            <a href="/">
              <li>J & L Wedding</li>
            </a>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Our Story</li>
            </a>
            <a href="/">
              <li>Entourage</li>
            </a>
            <a href="/">
              <li>Venue</li>
            </a>
            <a href="/">
              <li>Attire</li>
            </a>
            <a href="/">
              <li>RSVP</li>
            </a>
            <a href="/">
              <li>FAQs</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
