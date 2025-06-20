import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Navbar({theme, toggleTheme}){

    return(
        <div className="Navbar-container">
            <h2 className="logo">Axulux</h2>
            <div className="menu-container">
            <div className="menu-list">
                <h4>Home</h4>
                <h4>Men</h4>
                <h4>Women</h4>
                <h4>Cart</h4>
            </div>
                <h4 className="mode-theme" onClick={toggleTheme}>
                    {theme === "light" ? <MdOutlineDarkMode/> : <MdOutlineLightMode />}
                </h4>
            </div>
        </div>
    );
}

export default Navbar;