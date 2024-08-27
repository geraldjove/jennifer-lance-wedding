import React, { useState } from "react";
import StorySection from "../components/story-section.component";
import SectionDefault from "../components/section.component";

import { createRoot } from "react-dom/client";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import FAQAccordion from "../components/faq-accordion.component";
import Hero from "../components/hero-component";
import Story from "../components/story-component";
import Entourage from "../components/entourage.component";
import Venue from "../components/venue-component";
import Attire from "../components/attire-component";
import RSVP from "../components/rsvp-component";
import FAQ from "../components/faq.component";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Entourage />
      <Venue />
      <Attire />
      <RSVP />
      <FAQ />
    </>
  );
};

export default Home;
