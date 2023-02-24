// const ethers = require("ethers");

// const provider = new ethers.providers.JsonRpcProvider(
//   "https://goerli.infura.io/v3/e3f8553f110f4c34bef36bf2153e8d88"
// );

const Web3 = require("web3");

// Set up Web3 provider
const web3 = new Web3(
  "https://celo-alfajores.infura.io/v3/e3f8553f110f4c34bef36bf2153e8d88"
);

const ABI = [
  {
    anonymous: null,
    name: null,
    inputs: [
      { internalType: "address", name: "_voter", type: "address" },
      {
        internalType: "uint256",
        name: "_requiredVotesPercentage",
        type: "uint256",
      },
    ],
    outputs: [],
    type: "constructor",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "LogFallback",
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalApproved",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalCreated",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "projectCID", type: "string" },
      { internalType: "address", name: "proposer", type: "address" },
      { internalType: "uint256", name: "goalAmount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
      { internalType: "uint256", name: "votes", type: "uint256" },
      { internalType: "bool", name: "approved", type: "bool" },
      { internalType: "bool", name: "funded", type: "bool" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalExpired",
    inputs: [{ internalType: "uint256", name: "proposalID", type: "uint256" }],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalFunded",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "bool", name: "funded", type: "bool" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalRefunded",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalVoted",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "uint256", name: "votes", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "ProposalWithdrawn",
    inputs: [
      { internalType: "uint256", name: "proposalID", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
    ],
    outputs: [],
    type: "event",
    stateMutability: null,
  },
  {
    anonymous: null,
    name: "addVoter",
    inputs: [{ internalType: "address", name: "_voter", type: "address" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "allProposalsMap",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "projectCID", type: "string" },
      { internalType: "address payable", name: "proposer", type: "address" },
      { internalType: "uint256", name: "goalAmount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
      { internalType: "uint256", name: "votes", type: "uint256" },
      { internalType: "bool", name: "approved", type: "bool" },
      { internalType: "bool", name: "funded", type: "bool" },
      { internalType: "uint256", name: "proposalTime", type: "uint256" },
      { internalType: "bool", name: "paidOut", type: "bool" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "createProposal",
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "string", name: "_projectCID", type: "string" },
      { internalType: "uint256", name: "_goalAmount", type: "uint256" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "fundProposals",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "payable",
  },
  {
    anonymous: null,
    name: "fundersCount",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "fundersList",
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    outputs: [
      { internalType: "address", name: "funder", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getAllProposalMap",
    inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }],
    outputs: [
      { internalType: "struct funder.fundProposal", name: "", type: "tuple" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getFunders",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [
      { internalType: "address[]", name: "", type: "address[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getFundersCount",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getMyProposal",
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    outputs: [
      {
        internalType: "struct funder.fundProposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getProposal",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "bool", name: "", type: "bool" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getProposalCount",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getProposalIDs",
    inputs: [],
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getProposalVotes",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getProposalsArray",
    inputs: [],
    outputs: [
      {
        internalType: "struct funder.fundProposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getRequiredVotes",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getRequiredVotesPercentage",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getTotalVoters",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "getVoters",
    inputs: [],
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "hasVoted",
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "isVoter",
    inputs: [{ internalType: "address", name: "", type: "address" }],
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "proposalIDs",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "proposals",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "projectCID", type: "string" },
      { internalType: "address payable", name: "proposer", type: "address" },
      { internalType: "uint256", name: "goalAmount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
      { internalType: "uint256", name: "votes", type: "uint256" },
      { internalType: "bool", name: "approved", type: "bool" },
      { internalType: "bool", name: "funded", type: "bool" },
      { internalType: "uint256", name: "proposalTime", type: "uint256" },
      { internalType: "bool", name: "paidOut", type: "bool" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "proposalsArray",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "projectCID", type: "string" },
      { internalType: "address payable", name: "proposer", type: "address" },
      { internalType: "uint256", name: "goalAmount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
      { internalType: "uint256", name: "votes", type: "uint256" },
      { internalType: "bool", name: "approved", type: "bool" },
      { internalType: "bool", name: "funded", type: "bool" },
      { internalType: "uint256", name: "proposalTime", type: "uint256" },
      { internalType: "bool", name: "paidOut", type: "bool" },
    ],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "refundFunders",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "removeVoter",
    inputs: [{ internalType: "address", name: "_voter", type: "address" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "setRequiredVotesPercentage",
    inputs: [
      {
        internalType: "uint256",
        name: "_requiredVotesPercentage",
        type: "uint256",
      },
    ],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "totalVotes",
    inputs: [],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "transferOwnership",
    inputs: [{ internalType: "address", name: "_newAdmin", type: "address" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "vote",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    type: "function",
    stateMutability: "nonpayable",
  },
  {
    anonymous: null,
    name: "voters",
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    outputs: [{ internalType: "address", name: "", type: "address" }],
    type: "function",
    stateMutability: "view",
  },
  {
    anonymous: null,
    name: "withdrawFunds",
    inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
    outputs: [],
    type: "function",
    stateMutability: "nonpayable",
  },
];

const contractAddress = "0x53D099f3ec58a27DaA968F7De1C1Fb9e3AD88C8B";

// Create contract instance
const contract = new web3.eth.Contract(ABI, contractAddress);

// console.log(contract);

export const getAllProposals = async () => {
  const proposals = await contract.methods.getProposalsArray().call();
  return proposals;
};

// getAllProposals().then((res) => console.log(res));

// export const getProposal = async (proposalID: number) => {
//   const proposal = await contract.methods.getProposal(proposalID).call();
//   return proposal;
// };

// getProposal(363949477).then((res) => console.log(res));

export const transferOwnership = async (newAdmin: string) => {
  const tx = await contract.methods.transferOwnership(newAdmin).send;
  return tx;
};

export const createProposal = async (
  name: string,
  description: string,
  projectCID: string,
  goalAmount: number,
  deadline: number
) => {
  const goalAmountWei: number = web3.utils.toWei(goalAmount, "ether");
  const tx = await contract.methods.createProposal(
    name,
    description,
    projectCID,
    goalAmountWei,
    deadline
  ).send;
  return tx;
};

export const vote = async (proposalID: number) => {
  const tx = await contract.methods.vote(proposalID).send;
  return tx;
};

export const fundProposal = async (proposalID: number, amount: number) => {
  const amountWei: number = web3.utils.toWei(amount, "ether");
  const tx = await contract.methods.fundProposal(proposalID).send({
    value: amountWei,
  });
  return tx;
};

export const getProposalVotes = async (proposalID: number) => {
  const votes = await contract.methods.getProposalVotes(proposalID).call();
  return votes;
};

export const withdrawFunds = async (proposalID: number) => {
  const tx = await contract.methods.withdrawFunds(proposalID).send;
  return tx;
};

export const refundFunders = async (proposalID: number) => {
  const tx = await contract.methods.refundFunders(proposalID).send;
  return tx;
};

export const getFunders = async (proposalID: number) => {
  const tx = await contract.methods.getFunders(proposalID).call();
  return tx;
};

export const getProposalIDs = async () => {
  const tx = await contract.methods.getProposalIDs().call();
  return tx;
};

// getProposalIDs().then((res) => console.log(res));

export const getVoters = async () => {
  const tx = await contract.methods.getVoters().call();
  return tx;
};

export const getRequiredVotes = async () => {
  const tx = await contract.methods.getRequiredVotes().call();
  return tx;
};

export const getRequiredVotesPercentage = async () => {
  const tx = await contract.methods.getRequiredVotesPercentage().call();
  return tx;
};

export const getProposalCount = async () => {
  const tx = await contract.methods.getProposalCount().call();
  return tx;
};

export const getVoterCount = async () => {
  const tx = await contract.methods.getVoterCount().call();
  return tx;
};

export const getFundersCount = async (proposalID: number) => {
  const tx = await contract.methods.getFundersCount(proposalID).call();
  return tx;
};

export const addVoter = async (voter: string) => {
  const tx = await contract.methods.addVoter(voter).send;
  return tx;
};

export const removeVoter = async (voter: string) => {
  const tx = await contract.methods.removeVoter(voter).send;
  return tx;
};
1;

export const setRequiredVotesPercentage = async (percentage: number) => {
  const tx = await contract.methods.setRequiredVotesPercentage(percentage).send;
  return tx;
};

export const getMyProposal = async (user: string) => {
  const tx = await contract.methods.getMyProposal(user).call();
  return tx;
};

export const getTotalProposals = async (index: number) => {
  const tx = await contract.methods.proposalsArray(index).call();
  return tx;
};

// getTotalProposals(0).then((res) => console.log(res.name));

export const verifyVoter = async (voter: string) => {
  const tx = await contract.methods.isVoter(voter).call();
  return tx;
};
