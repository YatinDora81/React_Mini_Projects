import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(null);
  const [currFlip, setCurrFlip] = useState(null);
  const [solved, setSolved] = useState([]);

  const [disable, setDisable] = useState(false);
  const [won, setWon] = useState(false);
  const [lose , setLose ] = useState(false);

  const [clicks , setClicks] = useState(0);
  const [moves , setMoves] = useState(0);
  

  //   console.log(cards);
  useEffect(()=>{
    if(moves<=0) return 
    if(clicks>=moves){
      setLose(true);
    }
  } , [clicks , moves])

  const onGridSizeChange = (e) => {
    let value = parseInt(e.target.value);
    if (!value || value < 2) value = 2; 
    if (value > 10) value = 10; 
    setGridSize(value);
  };

  const initializeGame = () => {
    setCards([]);
    setFlipped(null);
    setSolved([]);
    setDisable(false);
    setWon(false);

    const cardlen = gridSize * gridSize;
    const pair = Math.floor(cardlen / 2);
    const arr = new Array(pair).fill(0).map((e, i) => i + 1);
    const arr2 = [...arr, ...arr];
    arr2.sort(() => Math.random() - 0.5);
    // console.log(arr2);
    const final = arr2.map((e) => {
      return { id: uuidv4(), num: e };
    });

    setCards([...final]);
  };

  const isSolved = (id) => solved.includes(id);

  const isFlipped = (card) => {
    if (!flipped) return false;
    if (flipped.num != card.num || flipped.id === card.id) return false;
    return true;
  };

  const clickHandler = (card) => {
    setClicks((prev)=>prev+1)
    if (disable) return;
    if (isSolved(card.id)) return;
    if (!flipped) {
      setFlipped({ ...card });
      return;
    } else {
      setDisable(true);
      setCurrFlip( card )
      if (isFlipped(card)) {
        // match
        setSolved([...solved, card.id, flipped.id]);
        setFlipped(null);
        setCurrFlip(null)
        setDisable(false)
      } else {
        setTimeout(()=>{
          setFlipped(null);
          setCurrFlip(null);
          setDisable(false);
        } , 500)
      }
    }
    
  };

  useEffect(() => {
    if (solved.length === cards.length) {
      setDisable(true);
      setWon(true);
    }
  }, [solved]);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  // console.log(flipped, solved);.
  console.log(clicks , moves);
  

  return (
    <div className="bg-[#121212] min-h-[100vh] text-white flex justify-center items-center">
      <div className=" bg- pink-600 flex flex-row gap-4 justify-evenly items-center py-5 min-h-[80vh] w-[80%] max-w-full ">
        <div
          className={` grid gap-1  border-zinc-500 p-1 rounded-xl`}
          style={{
            gridTemplateColumns: `repeat( ${gridSize} , minmax(0, 1fr)`,
          }}
        >
          {/* Grid */}
          {cards.map((card) => (
            <div
              className={` rounded-xl  flex justify-center items-center  ${
                isSolved(card.id) ? "bg-green-700 cursor-not-allowed" : `${ ((flipped && flipped.id === card.id) || currFlip && currFlip.id === card.id ) ? "bg-blue-600" : "bg-zinc-800" }` }   cursor-pointer text-2xl  h-16 text-center aspect-square `}
              key={card?.id}
              onClick={() => clickHandler(card)}
            >
              { ( ( flipped && flipped.id === card.id) || ( currFlip && currFlip.id === card.id) || isSolved(card.id)) ? card?.num : "?" }
            </div>
          ))}
        </div>

        <div className=" flex flex-col gap-8 items-center">
          <div className=" text-6xl font-semibold">Memory Game</div>
          <div className=" flex justify-center items-center gap-1">
            <label className=" text-xl" htmlFor="gs">
              Grid Size (Max 10) :{" "}
            </label>
            <input
              id="gs"
              type="number"
              value={gridSize}
              onChange={onGridSizeChange}
              className=" text-black text- w-20 p-1 font-bold"
            />
          </div>

          <div className=" flex justify-center items-center gap-1">
            <label className=" text-xl" htmlFor="gs">
              No of Moves :{" "}
            </label>
            <input
              id="gs"
              type="number"
              value={moves}
              onChange={(e)=>{
                let val = parseInt(e.target.value)
                if(!val) setMoves(0);
                else setMoves(val);

              }}
              className=" text-black text- w-20 p-1 font-bold"
            />
          </div>

          {won && (
            <div className=" text-green-500 text-5xl animate-bounce my-4">
              You WON
            </div>
          )}

          {
            !won && lose && (
              <div className=" text-red-500 text-5xl animate-bounce my-4">
                You Lose
              </div>
            )
          }

          <button
            onClick={initializeGame}
            className=" bg-red-900 hover:bg-red-800 text-2xl py-2 px-6 rounded-xl"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
