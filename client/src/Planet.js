import React from "react";
import {Link} from "@reach/router";

class Planet extends React.Component {
    render() {
        const { name, weight, moons, media, axialTilt, id } = this.props;

        let photos = [];

        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo["@size"] === 'pn');
        }

        return (
            <Link to={`/details/${id}`} className="planet" >
                <div className="image-container">
                    <img src={photos[0].value} alt={name} />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{moons} - {weight} - {axialTilt}</h2>
                </div>
            </Link>
        );
    }
}

export default Planet;
