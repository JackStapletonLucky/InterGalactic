import React from "react";
import Planet from "./Planet";
import PlanetData from "./PlanetData";

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
        resolve(PlanetData.basicData);
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
          <div>From Wikipedia</div>
        </div>
      )
  }
}

export default PlanetList;
