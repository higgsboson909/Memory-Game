const ScoreBoard = () => {
  return (
    <div className="w-full max-w-48 sm:max-w-95 text-center mx-auto bg-teal-50 rounded-sm my-3 sm:px-3">
      <div className="py-1.5 px-2 text-center flex justify-center gap-x-4 text-sm sm:text-base md:text-xl lg:text-xl">
        <div>Score : 99</div>
        <div>Best Score : 99</div>
      </div>
    </div>
  );
};

export { ScoreBoard };
