const ScoreBoard = () => {
  return (
    <div className="w-full max-w-48 sm:max-w-64 text-center mx-auto bg-amber-200 rounded-sm">
      <div className="py-1.5 px-0 text-center flex justify-center gap-x-4 text-sm sm:text-base md:text-lg lg:text-xl">
        <div>Score : 99</div>
        <div>Best Score : 99</div>
      </div>
    </div>
  );
};

export { ScoreBoard };
