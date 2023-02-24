import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getTotalProposals } from "../Blockchain/funder";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setAllProposals } from "../redux/userSlice";
type Props = {};

const MyProposal = (props: Props) => {
  const { proposalIDs, AllProposals, userAddress } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();

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
  }, []);

  const [isProposer, setIsProposer] = useState(false);

  function filterByProposer(array: any[], proposer: string): any[] {
    return array.filter((obj) => obj.proposer === proposer);
  }

  const filteredArrAddr: any[] = filterByProposer(AllProposals, userAddress);

  const filteredArrName: any[] = filteredArrAddr
    .map((obj) => obj.name)
    .filter((name, index, names) => names.indexOf(name) === index)
    .map((name) => filteredArrAddr.find((obj) => obj.name === name))!;

  useEffect(() => {
    if (filteredArrName.length > 0) {
      setIsProposer(true);
    } else {
      setIsProposer(false);
    }
  }, [userAddress, filteredArrName]);

  console.log(isProposer);

  return (
    <div className="flex items-center max-w-7xl mx-auto py-4 md:px-0 md:py-[3rem]">
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between px-[16px] md:px-[60px] w-full">
          <h2 className="text-greenSec text-[32px] md:text-[45px] font-b-600">
            My Proposals
          </h2>
          <span className="text-blackPrim">See All</span>
        </div>

        {isProposer ? (
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
              You have not created any proposals yet. Create a proposal to start
              funding your project.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProposal;
