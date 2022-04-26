import React from "react";

const Card = ({name, email, id})=> {
    return (
        <div className="tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="kitty" src={`https://robohash.org/${id}?set=set4`} width="250"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card