import React from "react";
import { useState } from "react";
import OtpSection from "../components/OtpSection";

const Phone_Otp = () => {
  const [number, setNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(true);

  return (
    <div className="bg-[#121212] min-h-[100vh] text-white flex justify-center items-center">
      <div className=" w-[40%] min-h-[50vh] border flex flex-col justify-center items-center gap-3 py-10">
        {openOtp ? (
          <OtpSection phoneNo={number} length={6}  />
        ) : (
          <>
            <h1 className=" text-5xl">Login using Otp</h1>
            <h1 className=" text-2xl">Enter Phone number here </h1>
            <input
              className=" text-black w-[60%] text-xl py-2 px-3"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
            ></input>
            <button onClick={()=>{
              setOpenOtp(true)
            }} className=" bg-blue-600 w-[60%] text-xl py-2 px-3 rounded-2xl">
              Send OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Phone_Otp;
