import React from 'react'

const Suggestions = ({suggestionsArr = [] , copy }) => {
  return (
    <div  className=' bg-gray-700 rounded-xl flex  flex-col justify-start w-full max-h-[45vh] overflow-y-auto'>
        
        { suggestionsArr.length==0 ? (<div className=' border-b rounded-xl text-center text-2xl p-2'> No Suggestions is there!!! </div>) : (

            suggestionsArr.map( (sugg , i)=> <div tabIndex={i} onKeyDown={(e)=>{ if(e.key==="Enter") copy(sugg)} } key={i} onClick={()=>copy(sugg)} className={` cursor-pointer border-b rounded-xl text-left text-2xl p-3 focus:bg-blue-500 focus:outline-none hover:bg-gray-600`}> {sugg} </div> )


        ) }

    </div>
  )
}

export default Suggestions