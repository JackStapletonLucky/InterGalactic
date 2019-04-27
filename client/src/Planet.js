import React from "react";

const Planet = (props) => {
    return (
        <div id="root-elem-id" className="lol">
            <h1>{ props.name }</h1>
            <h2>{ props.weight }</h2>
            <h2>{ props.moons }</h2>
        </div>
    );
};

export default Planet;
