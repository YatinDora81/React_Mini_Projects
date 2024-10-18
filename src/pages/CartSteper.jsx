import React, { useEffect, useRef, useState } from "react";
import { TiTickOutline } from "react-icons/ti";




const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => (
      <div className=" text-white text-2xl"> Provide your contact details Step1</div>
    ),
  },
  {
    name: "Shipping Info",
    Component: () => <div className=" text-white text-2xl">Enter your Shipping Address Step2</div>,
    // Component : Hell,
  },
  {
    name: "Payment",
    Component: () => <div className=" text-white text-2xl">Complete payment for your order Step3</div>,
  },
  {
    name: "Delivered",
    Component: () => <div className=" text-white text-2xl">Your Order has been Delivered Step4</div>,
  },
];

const CartSteper = () => {
  const [currStep, setCurrStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });
  const stepref = useRef([]);

  console.log(margins);

  const handleNext = () => {
    setCurrStep((prev) => {
      console.log(prev, CHECKOUT_STEPS.length);

      if (prev === CHECKOUT_STEPS.length) {
        return prev;
      } else return prev + 1;
    });
  };

  useEffect(() => {
    setMargins({
      leftMargin: stepref.current[0].offsetWidth / 2,
      rightMargin: stepref.current[stepref.current.length - 1].offsetWidth / 2,
    });
  }, [stepref.current]);

  useEffect(() => {
    if (currStep === CHECKOUT_STEPS.length) setIsComplete(true);
  }, [currStep]);

  return (
    <div className="bg-[#121212] min-h-[100vh] text-white">
      <div className=" min-h-[100%] w-[80%] mx-auto">
        <div className=" flex justify-between items-center h-[30vh] w-full bg-pink -500 ">
          {CHECKOUT_STEPS.map((step, ind) => (
            <div
              ref={(el) => (stepref.current[ind] = el)}
              className="   flex flex-col items-center z-[11]"
              key={ind}
            >
              <div
                className={` border  text-center text-2xl rounded-full h-12 w-12 flex justify-center items-center bg-gray-300 text-black ${
                  ind === currStep ? " bg-blue-500 text-white" : ""
                } ${currStep > ind ? "bg-green-500 text-white" : ""}`}
              >
                {currStep > ind ? <TiTickOutline></TiTickOutline> : ind + 1}
              </div>
              <div> {step.name} </div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: `calc(100% - ${margins.leftMargin + margins.rightMargin}px)`,
          }}
          className=" mx-auto h-1 relative -top-[17vh] bg-blue-200 z-[5] "
        >
          <div
            style={{
              width: `calc(${(currStep / (CHECKOUT_STEPS.length - 1)) * 100}%)`,

            }}
            className={`h-full bg-green-500 max-w-full`}
          ></div>
        </div>

        

        <div className=" flex justify-center items-center ">
          {isComplete ? (
            <div className=" text-3xl">You Have Complete the process</div>
          ) : (
            CHECKOUT_STEPS[currStep]?.Component()
          )}
        </div>

        {currStep !== CHECKOUT_STEPS.length && (
          <div className=" flex justify-center items-center">
            <button
            className=" bg-blue-700 text-xl px-6 py-2 rounded-xl mt-3"
            onClick={handleNext}
          >
            {currStep === CHECKOUT_STEPS.length ? "Finish" : "Next"}
          </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default CartSteper;





// Test Componemt
const Hell = ()=>{
  return <div>Yoyo</div>
}