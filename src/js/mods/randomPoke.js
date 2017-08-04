//Function that determines the random pokemon selected, out of 151, come on guys, classics!

exports.pokemonNumber = function(){
		var randomPokeNum = Math.floor(Math.random() * 151);

		if(randomPokeNum === 0){
			randomPokeNum = 1;
		}
		return randomPokeNum;
 };
  
