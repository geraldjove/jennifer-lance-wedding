import React, { useState } from "react";

const FAQAccordion = ({ question, answer }) => {
  const [display, setDisplay] = useState(false);

  const toggleAccordion = () => {
    if (display == false) {
      setDisplay(true);
    } else setDisplay(false);
  };
  return (
    <div className="p-5">
      <button
        className="accordion w-full bg-[#2F5946] border-[#EFD19C] border rounded-t-xl p-5 text-2xl font-bold"
        onClick={toggleAccordion}
      >
        {question}
      </button>
      {display && (
        <div className="border-[#EFD19C] rounded-b-xl border p-5">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
