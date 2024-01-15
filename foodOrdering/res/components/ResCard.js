import { res_img } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, locality,avgRating } = resData?.info;
  return (
    <div className="resCard">
      <img
        alt="res-food-logo"
        className="food-image"
        src={res_img + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ResCard;
