import React, { useState } from "react";
import Folder from "../components/Folder";
import { folder } from "../utils/folder_system_helper";

const Folder_System = () => {
  const [files, setFiles] = useState(  {id: "1",
    isFolder: true,
    name: "root",
    child: []}  );

    // const changedFile = (data)=>{
    //   setFiles(data)
    //   console.log("parent");
      
    // }

  return (
    <div className="bg-[#121212] min-h-[100vh] text-white flex items-center justify-between ">
      <div className=" min-h-[100vh] h-fit place-self-start   py-4 px-3 ">
        
        <Folder orgFiles={files} setFiles={setFiles} files={files}></Folder>



      </div>

      
    </div>
  );
};

export default Folder_System;
