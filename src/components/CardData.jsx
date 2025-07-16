import { CDN_URL } from "../Util/constant";
const CardData = ({ resData }) => {
  return (
    <div className="p-4 m-4 w-[240px] bg-slate-200 rounded-lg shadow-lg shadow-slate-500/50 h-[450px] flex flex-col">
      <div className="h-[180px] overflow-hidden rounded-xl mb-4">
        <img
          alt="Food-img"
          className="w-full h-full object-cover"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="company">
          <h4 className="font-bold text-pink-500 text-xl mb-1">
            {resData.info.cuisines[1] || resData.info.cuisines[0]}
          </h4>
          <h4 className="font-semibold text-gray-800 text-lg mb-2">
            {resData.info.name}
          </h4>
        </div>
        <div className="customer mt-auto">
          <h6 className="text-gray-600">{resData.info.costForTwo}</h6>
          <h6 className="text-gray-600">⭐ {resData.info.avgRating} stars</h6>
        </div>
      </div>
    </div>
  );
};

export const Suggestion = (CardData) => {
  return (prps) => {
    return (
      <div>
        <div className="absolute bg-slate-100 mr-14 text-black px-3 py-2 text-xs font-bold rounded-br-lg z-10 transform rotate-0 shadow-md">
          RECOMMENDED
        </div>{" "}
        <CardData {...prps} />
      </div>
    );
  };
};
export default CardData;
