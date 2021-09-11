import React from "react";
import Navigation from "../components/Navigation";

function Main({ children }) {
    return (
        <div>
            <Navigation />
            <div>
                { children }
            </div>
        </div>
    )
}

export default Main;