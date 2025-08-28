const Card = ({ object }) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-gray-600-200  text-center rounded-lg  border-1 border-gray-300"
      key={object.id}
    >
      <img
        alt="parasect"
        className="overflow-hidden object-contain rounded-t-lg "
        src={object.image}
      />
      <div className="w-full text-center text-xs sm:text-base text-white py-1">
        {object.name}
      </div>
    </div>
  );
};

export default Card;
