import GameBoard from "./components/GameBoard";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [score, setScore] = useState({
    prevScore: 0,
    currentScore: 0,
    bestScore: 0,
  });
  const [clickArray, setClickArray] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (id) => {
    handleScore(id);
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
    } else {
      if (score.prevScore < score.currentScore) {
        setScore((prev) => {
          const newPrevScore = prev.currentScore;
          return {
            ...prev,
            prevScore: newPrevScore,
            bestScore: newPrevScore,
          };
        });
      }
      setScore((prev) => ({ ...prev, currentScore: 0 }));
      setClickArray([]);
    }
  };

  return (
    <>
      <Navbar score={score}></Navbar>
      <GameBoard
        handleClick={handleClick}
        score={score}
        isClicked={isClicked}
      ></GameBoard>
      <Footer></Footer>
    </>
  );
}

export default App;
