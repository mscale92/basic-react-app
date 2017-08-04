import React from 'react';


class Pokemon extends React.Component {
    constructor(props) {
        super();
        this.state = {};
    }

   
    componentDidMount() {
       fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.params.number}`)
       	.then(result => result.json())
       	.then(pokemon => {
       		console.log(pokemon, "pokemon object")
       		this.setState({
	       		name: pokemon.name,
	       		sprite: pokemon.sprites.front_default
       		})
       	})
    }


    render() {
		if(!this.state.name){
			return(
				<div className="page">
					<h3>Loading...</h3>
            		<img src="/files/img/pokeball-loader.gif" alt="pokeball spinner"/>
            	</div>
			)
		}
        return (
            <div className="pokemon page">
            	<h2>It's {this.state.name}!</h2>
            	<div className="sprite-box">
					<img src={this.state.sprite} alt={this.state.name} className="sprite"/>
				</div>
            </div>
        );
    }
};

export default Pokemon;