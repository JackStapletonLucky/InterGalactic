import React from 'react';
import Carousel from "./Carousel";

class PlanetDetail extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        let res = {
            intergalactic: {
                planets: {
                    planet: [{
                        id: 1, name: 'Föld', weight: "5,9736x1024 kg", moons: "1 (a Hold)"
                        , media: {
                            photos: {
                                photo: [{
                                    value: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
                                    "@size": "pn"
                                }, {
                                    value: "https://www.jpl.nasa.gov/images/asteroid/20150819/globe-modis-16.jpg",
                                    "@size": "pn"
                                }, {
                                    value: "https://www.publicdomainpictures.net/pictures/90000/nahled/planet-earth-1401465698wt7.jpg",
                                    "@size": "pn"
                                }, {
                                    value: "https://live.staticflickr.com/6206/6049973495_b97aec7ee6_b.jpg",
                                    "@size": "pn"
                                }, {
                                    value: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Earth-Erde.jpg",
                                    "@size": "pn"
                                }]
                            }
                        }
                        , axialTilt: "23,439281°", surfaceGravity: "9,7801 m/s² (0,99732 g)"
                    }, {
                        id: 2, name: 'Vénusz', weight: "4,8685×1024 kg (a földi 0,815-szerese)", moons: "-"
                        , media: {
                            photos: {
                                photo: [{
                                    value: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
                                    "@size": "pn"
                                }]
                            }
                        }
                        , axialTilt: "2,64°", surfaceGravity: "8,87 m/s² (0,904 g)"
                    }, {
                        id: 3, name: 'Mars', weight: "6,4185·1023 kg (a földi 0,107-szerese)", moons: "2"
                        , media: {
                            photos: {
                                photo: [{
                                    value: "https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg",
                                    "@size": "pn"
                                }]
                            }
                        }
                        , axialTilt: "25,19°", surfaceGravity: "3,69 m/s² (0,376 g)"
                    }]
                }
            }
        };

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
