'use client'

import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RiskSummaryCard = () => {
  return (
    <div className="border-[1px] border-black border-opacity-[0.28] rounded-xl p-4 font-normal">
      <div className="box my-4 flex w-full justify-between">
        <h3 className="font-normal text-2xl">Risk Summary</h3>
        <MoreHorizIcon
          className="text-[#686464] cursor-pointer"
          fontSize="large"
        />
      </div>
      <div className="box my-4 flex w-full justify-between">
        <h3 className="font-light text-xl">Total Risk</h3>
        <h2 className="font-bold text-xl">54</h2>
      </div>
      <div className="flex justify-between items-center w-full gap-2">
        <div className="py-3 bg-[#D5F68A] rounded-sm w-full"></div>
        <div className="p-3 bg-[#A9E338] rounded-sm w-full"></div>
        <div className="p-3 bg-[#6BA10F] rounded-sm w-full"></div>
      </div>
      <div className="box my-4 flex w-full justify-between">
        <span>0%</span>
        <span>100%</span>
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 rounded-full bg-black"></div>
          <span className="font-medium">Risk 1</span>
        </div>
        <div className="flex gap-2 font-medium">
          <span>High</span>
          <span>Open</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 rounded-full bg-[#DDFF8F]"></div>
          <span className="font-medium">Risk 2</span>
        </div>
        <div className="flex gap-2 font-medium">
          <span>Medium</span>
          <span>Progress</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full my-3">
        <div className="flex justify-center items-center gap-2">
          <div className="p-2 rounded-full bg-[#DDFF8F]"></div>
          <span className="font-medium">Risk 3</span>
        </div>
        <div className="flex gap-2 font-medium">
          <span>Low</span>
          <span>Close</span>
        </div>
      </div>
    </div>
  );
};

export default RiskSummaryCard;
