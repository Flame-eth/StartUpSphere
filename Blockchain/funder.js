"use strict";
// const ethers = require("ethers");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.verifyVoter = exports.getTotalProposals = exports.getMyProposal = exports.setRequiredVotesPercentage = exports.removeVoter = exports.addVoter = exports.getFundersCount = exports.getVoterCount = exports.getProposalCount = exports.getRequiredVotesPercentage = exports.getRequiredVotes = exports.getVoters = exports.getProposalIDs = exports.getFunders = exports.refundFunders = exports.withdrawFunds = exports.getProposalVotes = exports.fundProposal = exports.vote = exports.createProposal = exports.transferOwnership = exports.getAllProposals = void 0;
// const provider = new ethers.providers.JsonRpcProvider(
//   "https://goerli.infura.io/v3/e3f8553f110f4c34bef36bf2153e8d88"
// );
var Web3 = require("web3");
// Set up Web3 provider
var web3 = new Web3("https://celo-alfajores.infura.io/v3/e3f8553f110f4c34bef36bf2153e8d88");
var ABI = [
    {
        anonymous: null,
        name: null,
        inputs: [
            { internalType: "address", name: "_voter", type: "address" },
            {
                internalType: "uint256",
                name: "_requiredVotesPercentage",
                type: "uint256"
            },
        ],
        outputs: [],
        type: "constructor",
        stateMutability: "nonpayable"
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
        stateMutability: null
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
        stateMutability: null
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
        stateMutability: null
    },
    {
        anonymous: null,
        name: "ProposalExpired",
        inputs: [{ internalType: "uint256", name: "proposalID", type: "uint256" }],
        outputs: [],
        type: "event",
        stateMutability: null
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
        stateMutability: null
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
        stateMutability: null
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
        stateMutability: null
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
        stateMutability: null
    },
    {
        anonymous: null,
        name: "addVoter",
        inputs: [{ internalType: "address", name: "_voter", type: "address" }],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
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
        stateMutability: "view"
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
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "fundProposals",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        type: "function",
        stateMutability: "payable"
    },
    {
        anonymous: null,
        name: "fundersCount",
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
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
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getAllProposalMap",
        inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }],
        outputs: [
            { internalType: "struct funder.fundProposal", name: "", type: "tuple" },
        ],
        type: "function",
        stateMutability: "view"
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
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getFundersCount",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getMyProposal",
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        outputs: [
            {
                internalType: "struct funder.fundProposal[]",
                name: "",
                type: "tuple[]"
            },
        ],
        type: "function",
        stateMutability: "view"
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
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getProposalCount",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getProposalIDs",
        inputs: [],
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getProposalVotes",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getProposalsArray",
        inputs: [],
        outputs: [
            {
                internalType: "struct funder.fundProposal[]",
                name: "",
                type: "tuple[]"
            },
        ],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getRequiredVotes",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getRequiredVotesPercentage",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getTotalVoters",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "getVoters",
        inputs: [],
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        type: "function",
        stateMutability: "view"
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
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "isVoter",
        inputs: [{ internalType: "address", name: "", type: "address" }],
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "proposalIDs",
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "view"
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
        stateMutability: "view"
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
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "refundFunders",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "removeVoter",
        inputs: [{ internalType: "address", name: "_voter", type: "address" }],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "setRequiredVotesPercentage",
        inputs: [
            {
                internalType: "uint256",
                name: "_requiredVotesPercentage",
                type: "uint256"
            },
        ],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "totalVotes",
        inputs: [],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "transferOwnership",
        inputs: [{ internalType: "address", name: "_newAdmin", type: "address" }],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "vote",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        type: "function",
        stateMutability: "nonpayable"
    },
    {
        anonymous: null,
        name: "voters",
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        outputs: [{ internalType: "address", name: "", type: "address" }],
        type: "function",
        stateMutability: "view"
    },
    {
        anonymous: null,
        name: "withdrawFunds",
        inputs: [{ internalType: "uint256", name: "_proposalID", type: "uint256" }],
        outputs: [],
        type: "function",
        stateMutability: "nonpayable"
    },
];
var contractAddress = "0x53D099f3ec58a27DaA968F7De1C1Fb9e3AD88C8B";
// Create contract instance
var contract = new web3.eth.Contract(ABI, contractAddress);
// console.log(contract);
var getAllProposals = function () { return __awaiter(void 0, void 0, void 0, function () {
    var proposals;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getProposalsArray().call()];
            case 1:
                proposals = _a.sent();
                return [2 /*return*/, proposals];
        }
    });
}); };
exports.getAllProposals = getAllProposals;
// getAllProposals().then((res) => console.log(res));
// export const getProposal = async (proposalID: number) => {
//   const proposal = await contract.methods.getProposal(proposalID).call();
//   return proposal;
// };
// getProposal(363949477).then((res) => console.log(res));
var transferOwnership = function (newAdmin) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.transferOwnership(newAdmin).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.transferOwnership = transferOwnership;
var createProposal = function (name, description, projectCID, goalAmount, deadline) { return __awaiter(void 0, void 0, void 0, function () {
    var goalAmountWei, tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                goalAmountWei = web3.utils.toWei(goalAmount, "ether");
                return [4 /*yield*/, contract.methods.createProposal(name, description, projectCID, goalAmountWei, deadline).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.createProposal = createProposal;
var vote = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.vote(proposalID).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.vote = vote;
var fundProposal = function (proposalID, amount) { return __awaiter(void 0, void 0, void 0, function () {
    var amountWei, tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                amountWei = web3.utils.toWei(amount, "ether");
                return [4 /*yield*/, contract.methods.fundProposal(proposalID).send({
                        value: amountWei
                    })];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.fundProposal = fundProposal;
var getProposalVotes = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var votes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getProposalVotes(proposalID).call()];
            case 1:
                votes = _a.sent();
                return [2 /*return*/, votes];
        }
    });
}); };
exports.getProposalVotes = getProposalVotes;
var withdrawFunds = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.withdrawFunds(proposalID).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.withdrawFunds = withdrawFunds;
var refundFunders = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.refundFunders(proposalID).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.refundFunders = refundFunders;
var getFunders = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getFunders(proposalID).call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getFunders = getFunders;
var getProposalIDs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getProposalIDs().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getProposalIDs = getProposalIDs;
// getProposalIDs().then((res) => console.log(res));
var getVoters = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getVoters().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getVoters = getVoters;
var getRequiredVotes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getRequiredVotes().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getRequiredVotes = getRequiredVotes;
var getRequiredVotesPercentage = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getRequiredVotesPercentage().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getRequiredVotesPercentage = getRequiredVotesPercentage;
var getProposalCount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getProposalCount().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getProposalCount = getProposalCount;
var getVoterCount = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getVoterCount().call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getVoterCount = getVoterCount;
var getFundersCount = function (proposalID) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getFundersCount(proposalID).call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getFundersCount = getFundersCount;
var addVoter = function (voter) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.addVoter(voter).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.addVoter = addVoter;
var removeVoter = function (voter) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.removeVoter(voter).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.removeVoter = removeVoter;
1;
var setRequiredVotesPercentage = function (percentage) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.setRequiredVotesPercentage(percentage).send];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.setRequiredVotesPercentage = setRequiredVotesPercentage;
var getMyProposal = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.getMyProposal(user).call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getMyProposal = getMyProposal;
var getTotalProposals = function (index) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.proposalsArray(index).call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.getTotalProposals = getTotalProposals;
// getTotalProposals(0).then((res) => console.log(res.name));
var verifyVoter = function (voter) { return __awaiter(void 0, void 0, void 0, function () {
    var tx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contract.methods.isVoter(voter).call()];
            case 1:
                tx = _a.sent();
                return [2 /*return*/, tx];
        }
    });
}); };
exports.verifyVoter = verifyVoter;
