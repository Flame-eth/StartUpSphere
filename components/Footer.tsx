import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import ButtonComponent from "./Button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-blackPrim py-[20px] px-4 md:px-0">
      <div className="flex items-center py-[40px] flex-col lg:flex-row max-w-7xl mx-auto pr-4">
        <div className="flex items-start flex-1 flex-col gap-2 pl-[16px]">
          <span className="font-b-600 font-Titillium md:text-[20px]">
            <Link href="/">Startup-Sphere</Link>
          </span>
          <p className="text-[14px] leading-[25px] tracking-[0.03em] text-blueTert ">
            Startup Sphere is a decentralized crowdfunding platform designed to
            help startups raise funds for their projects. The platform is built
            on blockchain technology, which makes it secure, transparent, and
            accessible to anyone with an internet connection. Startup Sphere
            allows startups to create their own fundraising campaigns, set their
            funding goals, and offer rewards to their backers. Once the funding
            goal is reached, the startup receives the funds and can use them to
            develop their project.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[70px] lg:justify-end flex-1 w-[100%] lg:w-auto pl-4 lg:pl-0 mt-[40px] lg:mt-0">
          <div className="flex items-start flex-col gap-4">
            <h5 className="text-blueSec font-bold text-[20px] leading-[28px] tracking-[0.03em]">
              Company
            </h5>
            <div className="flex items-start flex-col gap-[10px]">
              {["Home", "About", "Service"].map((item, index) => (
                <span
                  key={index}
                  className="text-[14px] leading-[20px] tracking-[0.015em] text-blueTert cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-start flex-col gap-4">
            <h5 className="text-blueSec font-bold text-[20px] leading-[28px] tracking-[0.03em]">
              Explore
            </h5>
            <div className="flex items-start flex-col gap-[10px]">
              {["Terms & Conds", "Privacy Policy", "Pricing"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="text-[14px] leading-[20px] tracking-[0.015em] text-blueTert cursor-pointer">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex items-start flex-col gap-4">
            <h5 className="text-blueSec font-bold text-[20px] leading-[28px] tracking-[0.03em]">
              Social Media
            </h5>
            <div className="flex items-start flex-row gap-[10px]">
              <SocialIcon
                url="https://twitter.com/"
                bgColor="#fff"
                style={{ height: "24px", width: "24px" }}
              />
              <SocialIcon
                url="https://www.facebook.com/"
                bgColor="#fff"
                style={{ height: "24px", width: "24px" }}
              />
              <SocialIcon
                url="https://www.linkedin.com/"
                bgColor="#fff"
                style={{ height: "24px", width: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="max-w-7xl mx-auto flex items-start flex-col md:flex-row">
        <div className="flex items-start flex-col gap-[17px] md:w-[333px]">
          <div className="md:text-[20px]">
            
          </div>
          <span className="text-[14px] leading-[22px] text-[#F3F3F3]">
            Event-go is a global self-service blockchain ticketing platform for
            live experiences that allows anyone to create, share, find and
            attend events that fuel their passions and enrich their lives.
          </span>
          <div className="flex items-center gap-2 text-[14px]">
            <SocialIcon
              url="https://twitter.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
            <SocialIcon
              url="https://www.linkedin.com/"
              bgColor="#fff"
              style={{ height: "24px", width: "24px" }}
            />
          </div>
        </div>
        <div className="md:ml-[140px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[141px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">Plan Events</h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col">
            <span>Sell Tickets</span>
            <span>Online Events</span>
          </div>
        </div>
        <div className="md:ml-[84px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[100px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">Event-go</h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col">
            <span className="text-[14px]">Home</span>
            <span>About</span>
            <span>Help Center</span>
            <span>Privacy</span>
          </div>
        </div>
        <div className="md:ml-[111px] mt-[20px] md:mt-0 flex items-start gap-6 flex-col md:w-[363px]">
          <h4 className="text-[18px] leading-[21px] font-b-700">
            Stay in the loop
          </h4>
          <div className="flex items-start text-[14px] leading-[28px] font-b-500 text-[#F3F3F3] flex-col gap-6">
            <span className="text-[14px]">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </span>
            <div className="flex items-start relative w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="rounded-[45px] w-full h-[60px] border-[2px] border-[#F1F1F1] pl-[20px] placeholder:text-[12px] placeholder:text-[#959595]"
              />
              <div className="absolute right-[5px] top-[5px]">
                <ButtonComponent text="Subscribe Now" bg={true} />
              </div>
            </div>
          </div>
        </div>
      </div> */
}
