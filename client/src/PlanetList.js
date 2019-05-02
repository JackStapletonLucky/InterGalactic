import React from "react";
import Planet from "./Planet";

class PlanetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    const promise = new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({
          intergalactic: {
            planets: {
              planet: [{
                id: 1, name: 'Föld', weight: "5,9736x1024 kg", moons: "1 (a Hold)"
                , media: {
                  photos: {
                    photo: [{
                      value: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
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
        });
      }, 300);
    });

    promise.then(data => {
      let planets;

      if(data.intergalactic.planets && data.intergalactic.planets.planet) {
        if(Array.isArray(data.intergalactic.planets.planet)) {
          planets = data.intergalactic.planets.planet;
        } else {
          planets = [data.intergalactic.planets.planet];
        }
      }

      this.setState({
        planets
      })
    });
  }

  render() {
    return (
        <div>
          <div className="search">
            {this.state.planets.map(planet => {
              let moons;
              if(Array.isArray(planet.moons)) {
                moons = planet.moons.join(', ');
              } else {
                moons = planet.moons;
              }

              return (
                  <Planet key={planet.id} name={planet.name} weight={planet.weight} moons={moons}
                       media={planet.media} axialTilt={`${planet.axialTilt}, ${planet.surfaceGravity}`}
                       id={planet.id} />
              )
            })}
          </div>
        </div>
      )
  }
}

export default PlanetList;
