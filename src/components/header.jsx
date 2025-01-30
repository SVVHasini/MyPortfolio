import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
    let [currentRoute, setCurrentRoute] = useState("");
    return (
        <div className="topnav">
            <Link className={currentRoute == "" ? "active" : "inactive"} to="/" onClick={() => setCurrentRoute("")}>Home</Link>
            <Link className={currentRoute == "about" ? "active" : "inactive"} to="/about" onClick={() => setCurrentRoute("about")}>About</Link>
            <Link className={currentRoute == "portfolio" ? "active" : "inactive"} to="/portfolio" onClick={() => setCurrentRoute("portfolio")}>Portfolio</Link>
            <Link className={currentRoute == "contact" ? "active" : "inactive"} to="/contact" onClick={() => setCurrentRoute("contact")}>Contact</Link>
        </div>
    )
}