import React from "react";
import "./NavBar.css";
import clubLogo from "./assets/logos/GolfClubLogo.jpg";

const NavBar = () => {
    
    return (
        <div className="navBar">
            <div className="menu">
                <div className="title"> May Shaw Golf Genius </div>
                <img className="clubLogo" src={clubLogo} alt="club logo" /> {/* adjust styling */}
                <div className="NavItems">
                    <div className="item"> ******* </div>
                    <div className="item"> Lessons </div>
                    <div className="item"> Booking </div>
                    <div className=""> Contact Me </div>
                </div>
            </div>
        </div>
    );
};
export default NavBar;
