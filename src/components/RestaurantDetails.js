import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantDetails = () => {
    const [restDetail, setRestDetail] = useState(null);
    const [resOffer, setResOffer] = useState(null);
    useEffect(() => {
        console.log("Use Effect");
        getRestaurantDetailsData();
    }, []);

    async function getRestaurantDetailsData() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + id);
        const json = await data?.json();
        console.log(json?.data);
        setRestDetail(json?.data?.cards[0]?.card?.card?.info);
        setResOffer(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.offers);
        console.log("two");
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
        console.log(json?.data?.cards[0]?.card?.card?.info)
    };

    const { id } = useParams();
    return (!resOffer) ? <Shimmer /> : (
        <div className="container allSpacing">
            <div className="bodySection">
                <div><Link to="/">{`< Back`}</Link></div>
                <h1>{restDetail?.name} id:{id}</h1>
                <div>{restDetail?.cuisines?.join(', ')}</div>
                <div>{console.log(restDetail?.feeDetails?.icon)}</div>
                <div>{restDetail && restDetail.cuisines && restDetail?.cuisines[0]}</div>
                <div>{restDetail?.city}, {restDetail?.sla?.lastMileTravelString}</div>

                {restDetail && restDetail?.expectationNotifiers && restDetail?.expectationNotifiers[0] ? <div><img width="18" src={IMG_URL + restDetail?.expectationNotifiers[0]?.icon?.imageId} alt="" title="" /> {restDetail?.sla?.lastMileTravelString} {restDetail?.expectationNotifiers[0]?.enrichedText}</div> : null}

                <div><img width="18" src={IMG_URL + restDetail?.feeDetails?.icon} alt="" title="" /> {restDetail?.sla?.lastMileTravelString} {restDetail?.feeDetails?.message}</div>
                <div> &#9733; {restDetail?.avgRating}</div>
                <div>{restDetail?.totalRatingsString}</div>
                <hr />
                <div>{restDetail?.sla?.slaString} {restDetail?.costForTwoMessage}</div>
                {restDetail && restDetail?.aggregatedDiscountInfo?.descriptionList && restDetail?.aggregatedDiscountInfo?.descriptionList[0] ? <div>{restDetail?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</div> : null}
                {/* {console.log(restDetail.aggregatedDiscountInfo.descriptionList[0].meta)} */}

                <ul>

                    {
                        resOffer.map((offerItem) => {
                            return (
                                <li>{offerItem?.info?.header}</li>
                            )

                        })}
                </ul>
            </div>


        </div>
    )
}

export default RestaurantDetails;