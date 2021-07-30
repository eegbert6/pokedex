// List of Pokemons and their name, height, and types
let pokemonRepository = (function () {
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

	function getAll() {
		return pokemonList;
	}

	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	return {
		getAll: getAll,
		add: add
	};
})();


// forEach() loop to display pokemonList
	if (pokemon.height > 1) {
		document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big! </p>');
	} else {
		document.write( '<p>' + pokemon.name + ' (height: ' + pokemon.height + ') </p>');
	}
});
