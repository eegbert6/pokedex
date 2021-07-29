// List of Pokemons and their name, height, and types
let pokemonList = [
	{
		name: 'Bulbasaur',
		height: .7,
		type: [ 'poison', 'grass']
	},
	{
		name: 'Squirtle',
		height: .5,
		type: [ 'water', 'defense']
	},
	{
		name: 'Dragonite',
		height: 2.2,
		type: [ 'dragon', 'flying']
	}
];

for (let i=0; i < pokemonList.length; i++) {
	document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") ");
}