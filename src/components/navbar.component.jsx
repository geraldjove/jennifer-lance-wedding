import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navCollapse, setNavCollapse] = useState(false);

  const toggleNavbar = () => {
    setNavCollapse((navCollapse) => !navCollapse);
  };

  const handleLinkClick = () => {
    toggleNavbar(); // Close the dropdown menu
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY - 50, // Offset scroll by 50px
        behavior: "smooth", // Enable smooth scrolling
      });
    }, 0); // Delay to ensure menu is closed before scrolling
  };

  return (
    <div className=" h-[50px] fixed w-[100vw] top-0 bg-[#1C3A2C] z-10">
      <div className="container h-[50px] mx-auto flex justify-between items-center p-5 font-baskervville font-bold text-[#EFD19C]">
        <div className="flex">
          <ul>
            <a href="/">
              <li className="font-baskervville">J & L Wedding</li>
            </a>
          </ul>
        </div>
        {/* Collapse Toggle */}
        <div className="sm:hidden block">
          <button onClick={toggleNavbar}>
            <RxHamburgerMenu className="text-2xl" />
          </button>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-4">
            <a href="/" onClick={handleLinkClick}>
              <li className="font-baskervville">Home</li>
            </a>
            <a href="#story" onClick={handleLinkClick}>
              <li className="font-baskervville">Our Story</li>
            </a>
            <a href="#entourage" onClick={handleLinkClick}>
              <li className="font-baskervville">Entourage</li>
            </a>
            <a href="#venue" onClick={handleLinkClick}>
              <li className="font-baskervville">Venue</li>
            </a>
            <a href="#attire" onClick={handleLinkClick}>
              <li className="font-baskervville">Attire</li>
            </a>
            <a href="#rsvp" onClick={handleLinkClick}>
              <li className="font-baskervville">RSVP</li>
            </a>
            <a href="#faq" onClick={handleLinkClick}>
              <li className="font-baskervville">FAQs</li>
            </a>
          </ul>
        </div>
      </div>
      {/* Dropdown Menu */}
      {navCollapse && (
        <div className="sm:hidden block top-[50px] absolute w-[100%] z-10 bg-[#234435]">
          <div>
            <ul className="text-center">
              <a href="/" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  Home
                </li>
              </a>
              <a href="#story" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  Our Story
                </li>
              </a>
              <a href="#entourage" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  Entourage
                </li>
              </a>
              <a href="#venue" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  Venue
                </li>
              </a>
              <a href="#attire" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  Attire
                </li>
              </a>
              <a href="#rsvp" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border">
                  RSVP
                </li>
              </a>
              <a href="#faq" onClick={handleLinkClick}>
                <li className="font-baskervville block p-5 font-bold border-[#EFD19C] border rounded-b-xl">
                  FAQs
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
