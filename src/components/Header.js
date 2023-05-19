import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    let [greenTitle, setGreenTitle] = useState("Desi");
    let greenTitleChange = () => {
        setGreenTitle("Spirit of ");
    };

    let [orangeTitle, setOrangeTitle] = useState("licious");
    let orangeTitleChange = () => {
        setOrangeTitle("India");
    };

    const changeTitle = () => {
        greenTitleChange();
        orangeTitleChange();
    }

    return (
        <div className="headerSection">
            <div className="container flex-header">
                <div className="logo"><img alt="" src={LOGO_URL} onClick={changeTitle} /> <h1><span>{greenTitle}</span>{orangeTitle} </h1></div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header;