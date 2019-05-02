import React from "react";
import {render} from "react-dom";
import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";
import {Link, Router} from "@reach/router";

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">InterGalactic</Link>
                </header>
                <Router>
                    <PlanetList path="/" />
                    <PlanetDetail path="/details/:id" />
                </Router>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));
