import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kitties } from "./kitties";


const App = () => {
    return (
        <div className="tc">
        <h1>KittyFriends</h1>
        <SearchBox />
        <CardList kitties={kitties}/>
    </div>
    );
}

export default App;