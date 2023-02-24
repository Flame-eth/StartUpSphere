import React, { Dispatch, SetStateAction, useState } from "react";
import ButtonComponent from "./Button";
import CloseIcon from "../public/close.jpg";
import Image from "next/image";
import { fundNewProposal } from "../Blockchain/funder";
import { InputField } from "../pages/create-proposal";
import { useFormik } from "formik";

const Modal = ({
  setShowModal,
  name,
  projectCID,
  targetAmount,
  AmountRaised,
  proposer,
  deadline,
}) => {
  const { ethers } = require("ethers");

  function weiToEther(wei) {
    const ether = ethers.utils.formatEther(wei);
    return ether;
  }

  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      amount: "",
    },
    onSubmit: (values) => {},
  });
  const [amount, setAmount] = useState("");
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 h-screen flex items-center justify-center z-[300] bg-[rgba(7,7,7,0.7)]">
      <div className="w-[300px] md:w-[440px] rounded-[10px] text-left flex items-center justify-center flex-col py-[20px] md:py-[30px] px-[30px] md:px-[60px] bg-white gap-3 relative">
        <div
          className="absolute right-[16px] md:right-[32px] top-[16px] cursor-pointer"
          onClick={() => {
            setShowModal(false);
          }}>
          <Image src={CloseIcon} alt="close-icon" className="w-[20px]" />
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            Name:
          </h2>
          <span className="text-[11px] font-b-500 text-greenSec">{name}</span>
        </div>
        <div className="flex items-start justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            ProjectCID:
          </h2>
          <span className="text-[11px] font-b-500 text-greenSec w-[200px]">
            {projectCID}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            targetAmount:
          </h2>
          <span className="text-[11px]  font-b-500 text-greenSec">
            {weiToEther(targetAmount)}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            Amount Raised:
          </h2>
          <span className="text-[11px]  font-b-500 text-greenSec">
            {weiToEther(AmountRaised)}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            Proposer:
          </h2>
          <span className="text-[12px] md:text-[14px] font-b-500 text-greenSec">
            {proposer}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-greenSec">
            Deadline:
          </h2>
          <span className="text-[12px] md:text-[14px] font-b-500 text-greenSec">
            {deadline}
          </span>
        </div>

        {/* <InputField
          label="Amount"
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.amount}
          name="amount"
          placeholder="Enter amount here"
        /> */}

        <input
          type="text"
          placeholder="Enter amount here"
          className="w-full py-2 px-3 border border-greenPrim text-black"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <div
          className="flex items-center justify-center w-full"
          onClick={() => {
            fundNewProposal(projectCID, Number(amount));
          }}>
          <ButtonComponent text="Fund Proposal" bg />
        </div>
      </div>
    </div>
  );
};

export default Modal;
