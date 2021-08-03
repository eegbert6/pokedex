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

	// The following function adds new pokemon arrays to the list of pokemon
	function add(pokemon) {
		pokemon.push(pokemon);
	}

	// The following function creates buttons for each pokemon in the repository
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');	
		let listItem = document.createElement('li');
		let button = document.createElement('button')

		button.innerText = pokemon.name;

		button.classList.add('button-class');

		listItem.appendChild(button);

		pokemonList.appendChild(listItem);

		button.addEventListener ('click', showDetails);
	}

	function showDetails(pokemon) {
		console.log(pokemon);
	}

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem
	};
})();


// forEach() loop to display pokemonList
pokemonRepository.getAll().forEach( function (pokemon) {
	pokemonRepository.addListItem(pokemon);
});
