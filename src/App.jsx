import GameBoard from "./components/GameBoard";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [score, setScore] = useState({
    prevScore: 0,
    currentScore: 0,
    bestScore: 0,
  });
  const [clickArray, setClickArray] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    handleScore(id);
    console.log("Array ", clickArray);
    setIsClicked((prev) => !prev);
  };

  const handleScore = (id) => {
    if (clickArray.includes(id) == false) {
      setClickArray((prev) => {
        let array = [...prev];
        array.push(id);
        return array;
      });
      clickArray.push(id);
      setScore((prev) => ({ ...prev, currentScore: prev.currentScore + 1 }));

      console.log("current Score", score.currentScore);
    } else {
      if (score.prevScore < score.currentScore) {
        console.log(score);
        setScore((prev) => {
          const newPrevScore = prev.currentScore;
          return {
            ...prev,
            prevScore: newPrevScore,
            bestScore: newPrevScore,
          };
        });
        console.log("hi", score);
        // setScore((prev) => ({
        //   ...prev,
        //   prevScore: prev.currentScore,
        // }));
      }
      setScore((prev) => ({ ...prev, currentScore: 0 }));
      setClickArray([]);
    }
  };

  return (
    <>
      <Navbar score={score}></Navbar>
      <GameBoard handleClick={handleClick} isClicked={isClicked}></GameBoard>
    </>
  );
}

export default App;
