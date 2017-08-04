import React from 'react';
import { browserHistory as history } from 'react-router';
import randomPoke from '../mods/randomPoke'

class Choose extends React.Component {
    constructor(props) {
        super(props);
    }
    _handleChoice = () => {
        alert("Who's that pokemon?")
        let num = randomPoke.pokemonNumber()

        console.log(num, "number for pokemon")
        history.push(`/pokemon/${num}`)
    }

    render() {
        return (
            <div className="choose page">
                <h2>Click the button to find out which pokemon you are!</h2>
                <button className="choose-button" onClick={this._handleChoice}>Search</button>
            </div>
        );
    }
};

export default Choose;