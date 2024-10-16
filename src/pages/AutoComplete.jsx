import React, { useEffect, useState } from "react";
import Suggestions from "../components/Suggestions";
import ShimmerAutoComplete from "../components/ShimmerAutoComplete";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = async () => {
    setLoading(true)
    // console.log("call");
    
    try {
      const data = await fetch(
        `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
      );
      const jsondata = await data.json();
    //   console.log(jsondata[1]);

      setSuggestions(jsondata[1]);
      setLoading(false)
      setShowSugg(true)
    }catch (error) {

        console.log(error);
        setLoading(false)
    }
    
    
  };

  const debounce = ( fn , delay )=>{
    let t1 = "" ;
    return (...args)=>{
        clearTimeout( t1 );
        t1 = setTimeout(()=>{
            fn(...args);
        } , delay)
    }
  }

  const copyFromSuggestion = (data = "")=>{
    // console.log(data);
    setQuery(data);
    setLoading(false)
    setShowSugg(false)

    
  }

//   useEffect(() => {
//     // handleQueryChange();
//     if(query!==""){
//         setLoading(true);

//         debounce( handleQueryChange , 1000 )();
//     }

//   }, [query]);

//   const debouncedfn = ()=>{
//     setLoading(true);
//     debounce( handleQueryChange , 1000 )
//   }

    const [c,setC] = useState(0);

    const handleInputChange = (e)=>{
        setQuery(e.target.value)
        // here if we not use c then text is changing after calling api
        setC( (prev) => prev+1 )
    }
    
    useEffect(()=>{

        debounce( handleQueryChange , 1000 )();
        
    } , [c])

  return (
    <div className=" relative bg-[#121212] w-full min-h-[100vh] h-full text-white flex justify-start py-40 items-center flex-col gap-16">
      <div className=" text-5xl border-b-2 border-b-blue-100">
        {" "}
        Auto Complete / Type Ahead{" "}
      </div>
      <div className=" w-[50%]  flex ">
        <input
          placeholder="Search here!!!"
          onFocus={() => setShowSugg(true)}
        //   onBlur={() => {
        //     setShowSugg(false)
        //     setLoading(false);
        //   }}
          className=" w-[85%] text-2xl p-3 text-black rounded-l-2xl"
          type="text"
          value={query}
          onChange={handleInputChange}
        ></input>
        <button
          onClick={() => {
            setShowSugg(false);
            setQuery("");
            setLoading(false);
          }}
          className=" w-[15%] text-3xl p-3 bg-gray-800 rounded-r-2xl h-full"
        >
          {" "}
          ❌{" "}
        </button>
      </div>

      <div className=" w-[50%]  absolute top-[350px]  ">
        {" "}
        {showSugg && !loading &&  <Suggestions copy={copyFromSuggestion}  suggestionsArr={suggestions}></Suggestions> }
        {loading && <ShimmerAutoComplete /> }
      </div>
    </div>
  );
};

export default AutoComplete;
