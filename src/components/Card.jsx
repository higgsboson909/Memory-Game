const Card = ({ object, handleClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-600-200 hover:transform text-center  rounded-lg shadow-md border-1 border-gray-300  
            cursor-pointer transform transition duration-300 hover:scale-105 sm:hover:scale-105  hover:shadow-lg"
      onClick={(e) => handleClick(e.target.id)}
      id={object.id}
    >
      <img
        id={object.id}
        alt="parasect"
        className="overflow-hidden object-contain rounded-t-lg "
        src={object.image}
      />
      <div
        className="w-full text-center text-xs sm:text-base text-white py-1"
        id={object.id}
      >
        {object.name}
      </div>
    </div>
  );
};

export default Card;
