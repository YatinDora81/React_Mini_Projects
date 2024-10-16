import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const OtpSection = ({ phoneNo, length }) => {
  const [allOtps, setAllOpts] = useState(new Array(length).fill("") || []);
  const [currIndex, setCurrIndex] = useState(0);
  const inpRefs = useRef( [] )

  console.log(inpRefs);

  useEffect(()=>{
    inpRefs.current[0].focus()
  } , [])
  

  const onChangeHandler = (e,index)=>{

    // if( e.target.value==="" ) return
    const value = e.target.value;
    if (isNaN(value)) return;

    const arr = [...allOtps]
    arr[index] = e.target.value.substring( e.target.value.length-1 );
    // console.log(arr);    
    
    setAllOpts( arr )
    if( value && index+1<length ){
        inpRefs.current[index+1].focus()
    }
  }

  const onKeyDownHandler = (e,index)=>{
    if(e.key==="Backspace" && !allOtps[index] && index-1>=0 ){
      inpRefs.current[index-1].focus();
    }
    
  }

  const onClickHandler = (index)=>{
    inpRefs.current[index].setSelectionRange(1,1)
  }


  return (
    <div>
      <h1>An Otp is send to your phone number : {phoneNo}</h1>
      <div className=" flex justify-center items-center gap-2">
        {allOtps?.map((otp, i) => (
          <input 
            className=" w-10 h-10 text-xl text-black text-center"
            type="text"
            key={i}
            ref={(e)=> inpRefs.current[i] = e}
            value={allOtps[i]} 
            onChange={(e)=>onChangeHandler(e,i)}
            onClick={()=>{onClickHandler(i)}}
            onKeyDown={(e)=>onKeyDownHandler(e,i)}
            />
        ))}
      </div>
    </div>
  );
};

export default OtpSection;
