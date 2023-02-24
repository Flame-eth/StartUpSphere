import React from "react";
import Header from "./Header";

import { getAllProposals } from "../Blockchain/funder";

const CreateProposalHero = (props) => {
  const stats = [
    { title: "projects funded", value: "234,589" },
    { title: "towards creative work", value: "$6,896,124,456" },
    { title: "pledges", value: "70,484,415" },
  ];

  return (
    <div className="py-[16px] px-[16px] md:py-[20px] md:px-[60px] h-screen md:h-[522px] w-full relative animate-ChangeBg sm:bg-cover bg-center bg-hero-bg">
      <Header />
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <h1 className="text-[34px] md:text-[60px] md:leading-[70px] font-b-700 text-center">
            Create a <span className="text-greenPrim">new Proposal</span>
          </h1>
          <span className="text-[14px] leading-[20px] md:w-[50%] text-center">
            Fund your dream startup idea by filling the form below
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateProposalHero;
