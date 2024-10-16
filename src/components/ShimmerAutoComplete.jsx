import React from 'react'

const ShimmerAutoComplete = ({suggestionsArr = [0,0,0,0]}) => {
  return (
    <div className='   rounded-xl flex  flex-col justify-start w-full max-h-[45vh] overflow-y-auto'>
        
        { suggestionsArr.length>0 &&(

            suggestionsArr.map( (sugg , i)=> <div key={i} className=' shimmerAutoCompleteAnimation  h-16  border-b rounded-xl text-left text-2xl p-3'>  </div> )


        ) }

    </div>
  )
}

export default ShimmerAutoComplete