const ScoreBoard = ({ score }) => {
  return (
    <div className=" w-[200px]  sm:w-full sm:max-w-95 text-center mx-auto bg-teal-50 rounded-sm my-3 sm:px-3">
      <div className="py-1.5 px-2 text-center flex justify-center gap-x-4 text-sm sm:text-base md:text-xl lg:text-xl">
        <div>Score: {score.currentScore}</div>
        <div>Best Score: {score.bestScore}</div>
      </div>
    </div>
  );
};

export { ScoreBoard };
