import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";

import { useEffect, useState } from "react";
import {
  createNewProposal,
  createProposal,
  getAllProposals,
  getProposalIDs,
} from "../../Blockchain/funder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProposalHero from "../../components/CreateProposalHero";
import { useFormik } from "formik";
import ButtonComponent from "../../components/Button";
import Footer from "../../components/Footer";
import { useAddress } from "@thirdweb-dev/react";

const InputField = ({
  label,
  value,
  handleBlur,
  handleChange,
  placeholder,
  name,
  selectField = false,
}) => {
  const arr = new Array(100).fill(0).map((_, i) => i + 1);
  return (
    <div className="flex items-start flex-col gap-2 w-full md:w-[565px]">
      <label className="text-[14px] leading-[20px] text-blackTert font-semibold">
        {label}
      </label>

      {!selectField ? (
        <div className="w-full">
          {name === "description" ? (
            <textarea
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              className="w-full h-[140px] py-2 text-black px-3 border border-greenPrim"
            />
          ) : (
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              name={name}
              className="w-full h-[40px] py-2 text-black px-3 border border-greenPrim"
            />
          )}
        </div>
      ) : (
        <select
          name={name}
          onChange={handleChange}
          value={value}
          className="w-full h-[40px] py-2 text-black px-3 border border-greenPrim cursor-pointer">
          <option value="">{placeholder}</option>
          {arr.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default function CreateProposal() {
  // const [proposals, setProposals] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const address = useAddress();
  console.log(address);

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      amount: "",
      duration: "",
      projectCID: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      const response = createNewProposal(
        values.name,
        values.description,
        values.projectCID,
        values.amount,
        Number(values.duration),
        address
      ).then((res) => {
        console.log(res);
        return res;
        //   setSubmitting(false);
        //   toast.success("Proposal created successfully");
      });

      console.log(response);
    },
  });

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-white text-whitePrim font-Inter`}>
      <Head>
        <title>Startup-Sphere</title>
        <meta
          name="description"
          content="DApp for investing in startup ideas"
        />
      </Head>

      {/* <Header /> */}
      <CreateProposalHero />
      <div className="py-[4rem] md:py-[8rem] flex items-start justify-center w-full px-4">
        <form
          className="flex items-center flex-col w-full justify-center gap-[20px]"
          onSubmit={handleSubmit}>
          <InputField
            label="Project Name"
            name="name"
            placeholder="Enter your name here"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.name}
          />
          <InputField
            label="Project Description"
            name="description"
            placeholder="Describe your project here"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.description}
          />
          <InputField
            label="Target Amount"
            name="amount"
            placeholder="Enter your proposed amount here"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.amount}
          />
          <InputField
            label="Project IPFS CID"
            name="projectCID"
            placeholder="Enter your proposed IPFS CID here"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.projectCID}
          />

          <InputField
            label="Proposal Duration"
            name="duration"
            placeholder="Select your duration here"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.duration}
            selectField={true}
          />
          <button type="submit">
            <ButtonComponent bg text="Submit" />
          </button>
        </form>
      </div>

      <Footer />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const getAllProposal = async () => {
    const Proposals = await getAllProposals();
    console.log(Proposals);
  };

  console.log(getAllProposal);

  return {
    props: {}, // will be passed to the page component as props
  };
};
