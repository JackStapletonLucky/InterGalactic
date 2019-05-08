import React from 'react';
import Carousel from "./Carousel";
import PlanetData from "./PlanetData";

class PlanetDetail extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        let res = PlanetData.basicData;

        let props = this.props;

        const promise = new Promise(function(resolve, reject) {
            setTimeout(function () {
                resolve(res.intergalactic.planets.planet.find(planet => planet.id == props.id));
            }, 300);
        });

        promise.then(data => {
            const planet = data;
            let moons;
            if(Array.isArray(planet.moons)) {
                moons = planet.moons.join(', ');
            } else {
                moons = planet.moons;
            }

            this.setState({
                name: planet.name,
                weight: planet.weight,
                axialTilt: `${planet.axialTilt}, ${planet.surfaceGravity}`,
                description: planet.description,
                media: planet.media,
                moons,
                loading: false
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                error: err
            });
            // navigate("/");
        });
    }

    render() {
        if(this.state.loading) {
            return <h1>Loading ...</h1>
        }

        const { name, weight, moons, axialTilt, description, media } = this.state;

        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{weight} -- {moons} -- {axialTilt}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default PlanetDetail;
