import getData from "../services/getData";
import { useEffect, useState } from "react";
import Card from "./Card";
const GameBoard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      setItems(response);
    });

    return () => {
      return;
    };
  }, []);

  return (
    <div className=" lg:mt-19">
      {items.length != 0 ? (
        <div className="grid grid-cols-2 justify-items-center gap-y-4 gap-x-7 mx-6 sm:grid-cols-3 sm:m-8  sm:gap-8 lg:grid-cols-6 ">
          {items.map((item) => (
            <Card object={item}></Card>
          ))}
        </div>
      ) : (
        <div className="w-full mx-auto text-center text-base sm:mt-9 sm:text-2xl sm:font-semibold text-white">
          Loading Cards...
        </div>
      )}
    </div>
  );
};

export default GameBoard;
