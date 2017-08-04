import React from 'react';
import { browserHistory as history } from 'react-router';


class Choose extends React.Component {
    constructor(props) {
        super(props);
    }
    _handleChoice = (e) => {
        e.preventDefault();
        alert("Who's that pokemon?")
        //history.push(`/user/${this.refs.userInput.value}`)
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