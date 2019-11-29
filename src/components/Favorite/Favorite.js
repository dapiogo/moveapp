import React from "react";
import Header from "../Header/Header";


const Favorite = () => {
    const [favorite] = React.useState(JSON.parse(localStorage.getItem('favs')) || []);


    return (
        <>
        <Header/>
        <div className="favorite_list">
        <h1>FAVORITE</h1>
        </div>

        </>
    )
}

export default Favorite;