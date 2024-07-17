"use client";

import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import GetPdfSvg from "@/public/Transaction_Management_Assets/Svgs/GetPdf.svg";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#A2A1A8",
  maxWidth: "450px",
  p: 4,
};

const PaymentModal = ({
  openPaymentModal,
  handlePaymentModalClose,
}: {
  openPaymentModal: boolean;
  handlePaymentModalClose: () => void;
}) => {
  return (
    <Modal
      open={openPaymentModal}
      onClose={handlePaymentModalClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
          style: {
            backdropFilter: "blur(5px)",
          },
        },
      }}
    >
      <Box sx={style} className="bg-white rounded-t-2xl rounded-b-none">
        <div className="flex justify-center relative">
          <div className="p-3 bg-white rounded-full shadow-md absolute top-[-60px]">
            <div className="p-1 bg-[#6BA10F] rounded-full">
              <DoneIcon className="text-[white]" />
            </div>
          </div>
        </div>
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          className="text-center my-4 font-semibold"
        >
          Payment Success!
        </Typography>
        <Typography id="modal-description" className="mt-2 text-center">
          Your payment has been successfully done.
        </Typography>
        <hr className="my-6" />
        <div className="mt-4">
          <Typography id="modal-description" className="text-center">
            Total Payment
          </Typography>
          <Typography
            id="modal-title"
            variant="h5"
            component="h1"
            className="text-center my-4 font-semibold"
          >
            IDR 1,000,000
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col p-2 border-2 border-black border-opacity-15 rounded-lg">
              <span>Ref Number</span>
              <span>000085752257</span>
            </div>
            <div className="flex flex-col p-2 border-2 border-black border-opacity-15 rounded-lg">
              <span>Payment Time</span>
              <span>25 Feb 2023, 13:22</span>
            </div>
            <div className="flex flex-col p-2 border-2 border-black border-opacity-15 rounded-lg">
              <span>Payment Method</span>
              <span>Bank Transfer</span>
            </div>
            <div className="flex flex-col p-2 border-2 border-black border-opacity-15 rounded-lg">
              <span>Sender Name</span>
              <span>Antonio Roberto</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="py-1 px-4 rounded-lg flex justify-center items-center">
            <Image src={GetPdfSvg} alt="pdf" />
            Get PDF Receipt
          </button>
        </div>
        <div className="relative">
          <div className="absolute bottom-[-33px] w-full overflow-hidden h-3">
            <div className=" flex justify-between">
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
              <div className=" p-3 rounded-full bg-[#A2A1A8]"></div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
