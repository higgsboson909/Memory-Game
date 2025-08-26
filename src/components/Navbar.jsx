import { ScoreBoard } from "./ScoreBoard";
const Navbar = () => {
  return (
    <div>
      <div className="sm:mx-auto flex justify-between items-center px-20 py-0">
        <div className="text-white font-semibold py-2 text-center max-sm:mx-auto text-xl sm:text-2xl sm:font-bold md:text-3xl">
          <a href="#">
            <h1>Memory Game</h1>
          </a>
        </div>
        <div className="hidden sm:block">
          <ScoreBoard></ScoreBoard>
        </div>
      </div>

      <hr className="text-white mx-auto text-center" />
      <div className="sm:hidden">
        <ScoreBoard></ScoreBoard>
      </div>
    </div>
  );
};

export default Navbar;
