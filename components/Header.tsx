import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useAppDispatch } from "../redux/hooks";
import { setUserAddress } from "../redux/userSlice";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const address = useAddress();

  useEffect(() => {
    dispatch(setUserAddress(address));
  }, [dispatch, address]);

  return (
    <header className="z-[100]">
      <nav className="flex justify-center items-center max-w-7xl mx-auto py-2 px-3 md:h-[63px] w-full">
        <div className="flex items-center flex-wrap justify-between w-full gap-1 transition-all duration-300">
          <span className="font-b-600 font-Titillium md:text-[20px]">
            <Link href="/">Startup-Sphere</Link>
          </span>
          <div className="flex items-center gap-1 md:hidden">
            {/* <div className="border rounded-[4px] border-blackTert p-[0.45rem] text-[1.4rem]">
              <Icon icon="bx:search" />
            </div> */}
            <div
              className="border rounded-[4px] border-greenPrim border-opacity-30 p-[0.45rem] text-[1.4rem]"
              onClick={() => {
                setOpen(!open);
              }}>
              <Icon icon="bx:menu-alt-right" />
            </div>
          </div>
          <div
            className={`w-[100%] md:w-auto md:basis-0 border border-greenPrim border-opacity-[0.3] bg-blackSec md:bg-transparent md:border-none rounded-[4px] px-[1rem] mt-[10px] md:mt-0 py-[0.5rem] transition-all duration-500 ${
              open ? "absolute top-[60px] left-0" : "hidden md:block"
            }  `}>
            <ul
              className={`items-center flex flex-col md:flex-row gap-[10px] md:gap-4 bg-blackSec md:bg-transparent text-[16px] md:h-[19px] w-auto md:pt-0 transition-all duration-500
          `}>
              {/* <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:telegram" />
                </Link>
              </li>
              <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:discord-alt" />
                </Link>
              </li>
              <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:twitter" />
                </Link>
              </li> */}
              {/* <li className="navItem">
                <Link href="/">Features</Link>
              </li>
              <li className="navItem">
                <Link href="/about" className="w-[80px] inline-block">
                  My Orders
                </Link>
              </li>
              <li className="navItem">
                <Link href="/services">FAQs</Link>
              </li>
              <li className="p-2 border border-blackTert rounded-[4px]">
                <Link href="/contact">Login</Link>
              </li> */}
              <ConnectWallet
                accentColor="#00eaa1"
                colorMode="dark"
                btnTitle="Connect Wallet"
              />
              <li className="p-2 border border-blackText rounded-[4px] flex items-center justify-center">
                <Link href="" className="w-[122px] inline-block">
                  Create Proposal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
