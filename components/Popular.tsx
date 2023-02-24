import { log } from "console";
import React, { useEffect, useState } from "react";
import { getTotalProposals } from "../Blockchain/funder";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setAllProposals } from "../redux/userSlice";
import Card from "./Card";

type Props = {
  // proposals: any[];
};

const Popular = ({}: Props) => {
  const { proposalIDs, AllProposals } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  // const convertProposal = (proposal: any[]) => {
  //   const proposalArray: any[] = [];
  //   proposal.map((item) => {
  //     getProposal(item).then((res) => {
  //       proposalArray.push(res);
  //       return res;
  //     });
  //   });
  //   return proposalArray;
  // };
  useEffect(() => {
    console.log(proposalIDs.length);
    let proposalArr: any[] = [];
    for (let index = 0; index < proposalIDs.length; index++) {
      getTotalProposals(index).then((res) => {
        // proposalArr.push(res);
        dispatch(setAllProposals(res));
        console.log(res.proposer);
        ``;
      });
    }
    // dispatch(setAllProposals(proposalArr
  }, []);

  const popularCampaigns = [
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
      walletAdd: "0x854740248ade985d00C15bCdB5f6Cf0a206F3141",
      desc: "We’ll get you directly seated and inside for you to enjoy the show.",
    },
  ];

  const filteredArr: any[] = AllProposals.map((obj) => obj.name)
    .filter((name, index, names) => names.indexOf(name) === index)
    .map((name) => AllProposals.find((obj) => obj.name === name))!;

  // console.log(filteredArr);
  return (
    <div className="flex items-center max-w-7xl mx-auto py-4 md:px-0 md:py-[3rem]">
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between px-[16px] md:px-[60px] w-full">
          <h2 className="text-greenSec text-[32px] md:text-[45px] font-b-600">
            Popular Proposals
          </h2>
          <span className="text-blackPrim">See All</span>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center py-[2rem] md:py-[3rem] w-[100%] flex-wrap justify-between md:px-[2rem] gap-4">
            {/* {popularCampaigns.map((campaign, index) => (
              <div key={index}>
                <Card
                  title={campaign.title}
                  walletAdd={campaign.walletAdd}
                  description={campaign.desc}
                />
              </div>
            ))} */}
            {filteredArr.map((campaign, index) => (
              <div key={index}>
                <Card
                  title={campaign.name}
                  walletAdd={campaign.proposer}
                  description={campaign.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
