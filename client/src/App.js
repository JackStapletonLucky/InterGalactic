import React from "react";
import { render } from "react-dom";
import Planet from "./Planet";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>InterGalactic</h1>
                <Planet name="Föld" weight="5,9736x1024 kg " moons="1 (a Hold)" />
                <Planet name="Vénusz" weight="4,8685×1024 kg (a földi 0,815-szerese)" moons="-" />
                <Planet name="Mars" weight="6,4185·1023 kg (a földi 0,107-szerese)" moons="2" />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
