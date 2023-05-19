import { useState } from "react";

const Search = () => {
    const myText = "Hellow";
    //const [changeMyText, setChangeMyText] = useState(myText);
    const [searchRestro, setsearchRestro] = useState("KFC");
    const [clickSearch, setClickSearch] = useState("false");

    return (
        <div className="searchWrapper">
            <p>Search Value is: {searchRestro}</p>
            Search:
            <input className="searchInput" value={searchRestro} placeholder="Search Restaurants..." type="search"
                onChange={(e) => {
                    setsearchRestro(e.target.value);
                    //const toggleData = "Searching";
                }}
            />
            {/* <button onClick={() => {
                const toggleData = "World";
                if (changeMyText == toggleData) {
                    setChangeMyText("Hellow");
                } else {
                    setChangeMyText("World");
                }

            }}>
                Search
            </button>
            <h1>{changeMyText}</h1> */}
            <h1>{clickSearch}</h1>
            <button onClick={() => {

                if (clickSearch == "true") {
                    setClickSearch("false")
                } else {
                    setClickSearch("true")
                }

                //{ clickSearch == "true" ? setClickSearch("false") : setClickSearch("true") };


            }}
            >
                Search
            </button>
        </div>
    )
};

export default Search;