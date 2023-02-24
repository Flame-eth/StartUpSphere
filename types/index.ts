export type Coin = {
  featured?: boolean;
  hasExternalId?: boolean;
  image?: string;
  isFiat?: boolean;
  isStable?: boolean;
  name?: string;
  supportsFixedRate?: boolean;
  ticker?: string;
};

export type userState = {
  proposalIDs: string[];
  AllProposals: any[];
  MyProposals: any[];
  userAddress: string;
  VoteableProposals: any[];
};
