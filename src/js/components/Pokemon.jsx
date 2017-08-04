import React from 'react';


class Pokemon extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

   
    componentDidMount() {
       fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.params.number}`)
       	.then(result => result.json())
       	.then(pokemon => console.log(pokemon))
    }


    render() {

        return (
            <div>
            	<h2>Gotta catch 'em all!</h2>
            </div>
        );
    }
};

export default Pokemon;