// List of Pokemons and their name, height, and types
let pokemonList = [
	{
		name: 'Bulbasaur',
		height: 0.7,
		type: [ 'poison', 'grass']
	},
	{
		name: 'Squirtle',
		height: 0.5,
		type: [ 'water', 'defense']
	},
	{
		name: 'Dragonite',
		height: 2.2,
		type: [ 'dragon', 'flying']
	}
];

// Loop to write pokemon's name and height
for (let i=0; i < pokemonList.length; i++) {
	// Conditional to highlight big pokemon
	if (pokemonList[i].height > 1) {
		document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big! <br>");
	} else {
		document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") <br> ");
	}
}