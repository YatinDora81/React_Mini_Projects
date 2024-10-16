import React, { useEffect, useRef, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { FaAngleRight, FaFolder, FaFileCirclePlus } from "react-icons/fa6";
import { PiFolderSimplePlusFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { addInFile, deleteInFile } from "../utils/folder_system_helper";


const Folder = ({ files  , setFiles , orgFiles}) => {
  const [isDown, setIsDown] = useState(false);

  const [isInput, setIsInput] = useState(false);
  const [isCurrFolder, setIsCurrFolder] = useState(true);
  const inputRef = useRef();



  const addFile = (e ,i)=>{
    if( e.key==="Enter" || i){
        if( inputRef.current.value.trim()==="" ) {
            // console.log("khali");
        }else{

            // add logic here
            const data = addInFile( orgFiles , files?.id , inputRef.current.value , isCurrFolder  )
            setFiles(data);
          
            inputRef.current.value = "";
            setIsInput(false);
            inputRef.current.blur();
        }   
    }
  }

  const deleteFile = (id)=>{
    const data = deleteInFile( orgFiles , id  )
    setFiles(data);
    // console.log(data);
  }

  useEffect(()=>{
    if(isInput){
        inputRef.current.focus()
    }
  } , [isInput])

  return (
    <div  className=" flex flex-col gap-2 min-w-[20vw] w-[25vw]">
      <div className=" flex gap-1 text-xl items-center justify-between px-2 border ">
        <div onClick={()=>setIsDown(!isDown)} className=" flex items-center justify-start gap-1 w-[80%] bgpink-600">
          {files?.isFolder &&
            (isDown ? (
              <FaAngleDown onClick={() => setIsDown(!isDown)} />
            ) : (
              <FaAngleRight onClick={() => setIsDown(!isDown)} />
            ))}{" "}
          {files?.isFolder ? <FaFolder></FaFolder> : <CiFileOn></CiFileOn>}{" "}
          {files?.name}
        </div>
        <div className=" text-xl flex justify-center items-center gap-1">
          {files?.isFolder && (
            <div>
              <FaFileCirclePlus
                onClick={() => {
                  setIsCurrFolder(false);
                  setIsInput(true);
                //   inputRef.current?.focus()
                  setIsDown(true)
                }}
              ></FaFileCirclePlus>
            </div>
          )}
          {files?.isFolder && (
            <div>
              {" "}
              <PiFolderSimplePlusFill
                onClick={() => {
                  setIsCurrFolder(true);
                  setIsInput(true);
                //   inputRef.current?.focus()
                  setIsDown(true)
                }}
              ></PiFolderSimplePlusFill>
            </div>
          )}
          <div>
            {files?.name !== "root" && files?.id != "1" && (
              <MdDelete onClick={()=>deleteFile(files?.id)}></MdDelete>
            )}
          </div>
        </div>
      </div>

      {isDown && files?.isFolder && (
        <div className=" pl-6 flex flex-col gap-2 border-l">
          {/* add input here */}
          {isInput && <div className="flex items-center gap-1">
            {" "}
            {isCurrFolder ? (
              <PiFolderSimplePlusFill className=" text-xl opacity-60" />
            ) : (
              <FaFileCirclePlus className=" text-xl opacity-60" />
            )}{" "}
            <input
              ref={inputRef}
              onKeyDown={addFile}
              onBlur={(e)=>addFile(e,1)}
              className="w-full rounded-xl text-lg text-black px-3"
              placeholder="Enter here!!!"
              type="text"
            ></input>
          </div>}

          {files?.child?.length > 0 &&
            files?.child?.map((ele) => <Folder orgFiles={orgFiles} setFiles={setFiles} key={ele?.id} files={ele}></Folder>)}
        </div>
      )}
    </div>
  );
};

export default Folder;
