import React from "react";
import Header from "./Header";

import { getAllProposals } from "../Blockchain/funder";

type Props = {};

const Hero = (props: Props) => {
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
          <h1 className="text-[34px] md:text-[60px] md:leading-[70px] font-b-700 text-center md:w-[80%]">
            Our Mission is to Help Bring{" "}
            <span className="text-greenPrim">Creative Projects</span> to Life
          </h1>
          <span className="text-[14px] leading-[20px] md:w-[50%] text-center">
            Campaigns make ideas into reality. It is where creators share new
            visions for creative work with the communities that will come
            together and fund them
          </span>
          <div className="flex items-center flex-col md:flex-row">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center flex-col justify-center p-4 border-[2px] border-greenSec bg-black gap-1 w-[250px]">
                <span className="font-b-700 md:text-[24px]">{stat.value}</span>
                <span className="text-[12px]">{stat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
