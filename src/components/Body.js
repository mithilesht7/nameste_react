import RestCard from "./RestCard";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import Search from "./Seach";
import { useEffect, useState } from "react";

function searchRestaurentWithName(searchRestro, filteredRestaurent) {
    // const searchRestaurentWithName = listOfRestaurant.filter(
    //     (res) => res.data.name.includes(searchRestro)
    // );
    const searchRestaurentWithName = filteredRestaurent.filter((res) =>
        res?.data?.name?.toLowerCase()?.includes(searchRestro)
    );

    return searchRestaurentWithName;
}

const Body = () => {
    let [listOfRestaurant, setlistOfRestaurant] = useState([]);
    let [filteredRestaurent, setFilteredRestaurent] = useState([]);
    const [searchRestro, setsearchRestro] = useState("");

    useEffect(() => {
        console.log("Use Effect");
        getRestaurant();
    }, []);

    // useEffect function return callBack function and dependencies array
    // Empty dependency array run once after render
    // Dependency array[searchRestro] => Once after initial render + everytime after render 

    async function getRestaurant() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6147804&lng=77.2776579&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining ?
        setlistOfRestaurant(json?.data?.cards[2].data?.data?.cards);
        setFilteredRestaurent(json?.data?.cards[2].data?.data?.cards);
        console.log(json?.data?.cards[2].data?.data?.cards?.name + " Result");
    }

    console.log("render");
    //if(filteredRestaurent?.length == 0) return <div> No restaurents found!...</div>;
    return (listOfRestaurant?.length == 0) ? (
        <Shimmer />
    ) : (<div className="container">

        <div className="bodySection">
            <div className="searchSec">
                <div className="searchWrapper">
                    Search:
                    <input className="searchInput" value={searchRestro} placeholder="Search Restaurants..." type="search"
                        onChange={(e) => {
                            setsearchRestro(e.target.value);
                        }}
                    />

                    <button onClick={() => {
                        const searchData = searchRestaurentWithName(searchRestro, listOfRestaurant);
                        setFilteredRestaurent(searchData);
                    }}
                    >
                        <i className="fa fa-search fa-lg" aria-hidden="true" /> Search
                    </button>
                </div>
                <div className="filterWrapper">
                    <button className="filterBtn"
                        onClick={() => {
                            const filteredListLessThanThree = filteredRestaurent.filter(
                                (res) => res?.data?.avgRating > 3
                            );
                            setFilteredRestaurent(restList);
                            setFilteredRestaurent(filteredListLessThanThree);
                        }}
                    >Rating greater 3</button>
                    <button className="filterBtn" onClick={() => {
                        const filteredList = filteredRestaurent.filter(
                            (res) => res?.data?.avgRating > 4
                        );
                        setlistOfRestaurant(restList);
                        setlistOfRestaurant(filteredList);
                    }}

                    >Rating greater than 4</button>
                    <button className="filterBtn"
                        onClick={() => {
                            const filteredListLessThanFive = filteredRestaurent.filter(
                                (res) => res?.data?.avgRating == 4
                            );
                            setFilteredRestaurent(restList);
                            setFilteredRestaurent(filteredListLessThanFive);

                        }}
                    >Rating greater than 5</button>
                </div>
            </div>
            <div className="cardSection">

                {
                    filteredRestaurent?.length == 0 ? "Filtered data not found"

                        : (
                            filteredRestaurent.map((restauringListing) => {
                                return <Link className="cardLink" to={"/restaurant-details/" + restauringListing.data.id} key={restauringListing.data.id}><RestCard {...restauringListing?.data} /></Link>

                            })
                        )



                }



            </div>
        </div>
    </div >
    )
};

export default Body;