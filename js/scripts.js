// List of Pokemons and their name, height, and types
let pokemonRepository = (function () {
	let pokemon = [
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
		return pokemon;
	}

	function add(pokemon) {
		pokemon.push(pokemon);
	}

	return {
		getAll: getAll,
		add: add
	};
})();


// forEach() loop to display pokemonList
pokemonRepository.getAll().forEach( function (pokemon) {
	let pokemonList = document.querySelector('.pokemon-list');	
	let listItem = document.createElement('li');
	let button = document.createElement('button')

	button.innerText = 'placeholder';

	button.classList.add('button-class');

	listItem.appendChild(button);

	pokemonList.appendChild(listItem);
});
