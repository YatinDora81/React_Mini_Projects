import React, { useEffect, useRef, useState } from "react";

const Multi_Select_Input = () => {
  const [text, setText] = useState("");
  const [sugg, setSugg] = useState([]);
  const [selected, setSelected] = useState([])
    const inpRef = useRef()
  

  const searchFn = async () => {
    if (text === "") return;
    console.log("apui");
    
    const data = await fetch(`https://dummyjson.com/users/search?q=${text}`);
    const json = await data.json();

    // console.log(json?.users);
    setSugg(json?.users || []);
  };

//   const debounced = (fn , delay)=>{
//     let t ;
//     return (...args)=>{
//         clearTimeout(t);
//         t = setTimeout(()=>{
//             fn(...args)
//         } , delay)
//     }

//   }

  useEffect(() => {
    // debounced( searchFn , 2000 )()
    let t = setTimeout(() => {
        searchFn()
    }, 1000);

    return ()=>{
        clearTimeout(t);
    }
  }, [text]);

//   console.log(selected);

  return (
    <div className="bg-[#121212] min-h-[100vh] text-white flex flex-col justify-start items-center py-16 gap-16">
      <div className=" text-5xl "> Multi Input Select </div>

      <div className=" w-[75%] flex flex-wrap bg-white ">
        {/* pillls */}

        {/* <div className=" flex gap-2 flex-wrap"> */}
          {selected.length > 0 &&
            selected.map((s,i) => (
              <div key={i} className=" m-1  flex justify-center items-center gap-1 bg-gray-700 py-2 px-2 rounded-2xl">
                <img src={s?.image} className=" w-4"></img>
                <div className=" text-sm">
                  {" "}
                  {s?.firstName}
                </div>
                <div onClick={()=>{ setSelected( selected.filter( (sel)=> sel?.id!==s?.id ) ) }} className=" text-red-600 font-bold">X</div>
              </div>
            ))}
        {/* </div> */}

        <div className="  relative flex-grow">
          <input
            ref={inpRef}
            onKeyDown={ (e)=>{
                if(e.key==="Backspace" && text.trim()==="" && selected.length>0){
                    const ele = selected[selected.length-1];
                    setSelected( selected.filter( (sel)=> sel?.id!==ele?.id ) )
                }
            } }
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className=" bg-gray-300 w-full text-3xl py-2 text-black px-3 focus-within:outline-none rounded-xl"
            placeholder="Search Users Here!!!"
          ></input>
          {sugg.length > 0 && (
            <ul className=" absolute  w-full flex flex-col gap-2 bg-blue-800   rounded-2xl max-h-[50vh] overflow-y-auto py-1">
              {sugg.length > 0 &&
                sugg.map((s) => ( !selected.includes(s) ) && (
                  <li
                    onClick={() => {setSelected([...selected, s])
                        inpRef.current.focus();
                        setText("");
                        setSugg([])
                    }}
                    key={s?.id}
                    className=" min-h-8 border-b border-b-white rounded-xl text-xl py-1 px-3 bg-blue-800 hover:bg-blue-500 flex justify-start items-center gap-2"
                  >
                    <img src={s?.image} className=" w-6"></img>
                    <div>
                      {" "}
                      {s?.firstName} {s?.lastName}{" "}
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Multi_Select_Input;
