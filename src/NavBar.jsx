import React from "react";
import "./NavBar.css";
import clubLogo from "./assets/GolfClubLogo.svg";

const NavBar = () => {
    // {/* <img src={clubLogo} alt="club logo" /> */} need to implement a stylable svg
    return (
        <nav className="navBar">
            <div className="menu">
                <div className="title"> May Shaw Golf Genius </div>
                <div className="NavItems">
                    <div className="item"> ******* </div>
                    <div className="item"> Lessons </div>
                    <div className="item"> Booking </div>
                    <div className=""> Contact Me </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
