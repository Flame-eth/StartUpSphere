import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getTotalProposals, verifyVoter } from "../Blockchain/funder";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setAllProposals } from "../redux/userSlice";

type Props = {};

const VotableProposals = (props: Props) => {
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

  const [IsVoter, setIsVoter] = useState(false);

  const { proposalIDs, AllProposals, userAddress } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();

  // console.log(userAddress);

  verifyVoter(userAddress).then((res) => {
    setIsVoter(res);
  });

  useEffect(() => {
    // console.log(proposalIDs.length);
    let proposalArr: any[] = [];
    for (let index = 0; index < proposalIDs.length; index++) {
      getTotalProposals(index).then((res) => {
        // proposalArr.push(res);
        dispatch(setAllProposals(res));
        // console.log(res.proposer);
        ``;
      });
    }
  }, [dispatch, proposalIDs.length]);

  function filterByApproved(array: any[]): any[] {
    return array.filter((obj) => obj.approved === false);
  }

  let filteredArrName: any[] = [];

  if (IsVoter) {
    const filteredArrAppr = filterByApproved(AllProposals);
    filteredArrName = filteredArrAppr
      .map((obj) => obj.name)
      .filter((name, index, names) => names.indexOf(name) === index)
      .map((name) => filteredArrAppr.find((obj) => obj.name === name))!;
  }

  // console.log(filteredArrName);
  return (
    <div className="flex items-center max-w-7xl mx-auto py-4 md:px-0 md:py-[3rem]">
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between px-[16px] md:px-[60px] w-full">
          <h2 className="text-greenSec text-[32px] md:text-[45px] font-b-600">
            Votable Proposals
          </h2>
          <span className="text-blackPrim">See All</span>
        </div>
        {IsVoter ? (
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center py-[2rem] md:py-[3rem] w-[100%] flex-wrap justify-between md:px-[2rem] gap-4">
              {filteredArrName.map((campaign, index) => (
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
        ) : (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <h1
              style={{ color: "black", fontSize: "20px", fontStyle: "italic" }}>
              Your account is not a registered voter.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotableProposals;
