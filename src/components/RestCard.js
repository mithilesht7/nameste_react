import { IMG_URL } from "../utils/constants";
const RestCard = ({ cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo }) => {
    // const { restObj } = props;
    // const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo } = restObj?.data;
    return (
        <div className="restoCard">
            <img src={IMG_URL + cloudinaryImageId} className="cardImg" alt="" />
            <div className="cardContent">
                <h2 className="cardTitle">{name}</h2>
                <p className="cardSubTitle">{cuisines.join(", ")}</p>
                <ul>
                    <li>{avgRating}</li>
                    <li>{deliveryTime} MINS</li>
                    <li>₹ {costForTwo / 100} FOR TWO</li>
                </ul>
            </div>
        </div>
    )
};

export default RestCard;