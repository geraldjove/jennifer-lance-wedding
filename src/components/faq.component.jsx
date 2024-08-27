import React from "react";
import SectionDefault from "./section.component";
import FAQAccordion from "./faq-accordion.component";

const FAQ = () => {
  return (
    <SectionDefault bgColor="#234435" id="faq">
      <div>
        <h1>
          <span className="font-light text-[40px] sm:text-[8rem] font-greatVibes tracking-wider text-[#EFD19C]">
            The{" "}
          </span>
          <span className="font-baskervville text-[40px] sm:text-[8rem] font-bold text-[#EFD19C]">
            FAQs
          </span>
        </h1>
      </div>
      <FAQAccordion
        question="Question 1"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 1"
      />
      <FAQAccordion
        question="Question 2"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 2"
      />
      <FAQAccordion
        question="Question 3"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 3"
      />
      <FAQAccordion
        question="Question 4"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. 4"
      />
    </SectionDefault>
  );
};

export default FAQ;
