// List of Pokemons and their name, height, and types
let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	function getAll() {
		return pokemonList;
	}

	// The following function adds new pokemon arrays to the list of pokemon
	function add(pokemon) {
		pokemonList.push(pokemon);
	}

	// The following function creates buttons for each pokemon in the repository
	function addListItem(pokemon) {
		let pokemonList = document.querySelector('.pokemon-list');	
		let listItem = document.createElement('li');
		let button = document.createElement('button');

		button.innerText = pokemon.name;

		button.classList.add('button-class');

		listItem.appendChild(button);

		pokemonList.appendChild(listItem);

		button.addEventListener ('click', function(event) {
			showDetails(pokemon);
		});
	}

	function showDetails(pokemon) {
		loadDetails(pokemon).then(function () {
			console.log(pokemon);
		});
	}

	//The following function fetches data from the API and adds it to the list using the add function
	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function(json) {
			json.results.forEach(function (item) {
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}

	//The following function will load details about individual pokemon
	function loadDetails(item) {
	    let url = item.detailsUrl;
	    return fetch(url).then(function (response) {
	      return response.json();
	    }).then(function (details) {
	      item.imageUrl = details.sprites.front_default;
	      item.height = details.height;
	      item.types = details.types;
	    }).catch(function (e) {
	      console.error(e);
	    });
	  }

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

// forEach() loop to display pokemonList
pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach( function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});

// Modal for pokemon details
let modalContainer = document.querySelector('#modal-container');

function showModal(title, text) {
	// Clears all existing modal content
	modalContainer.innerHTML = '';

	let modal = document.createElement('div');
	modal.classList.add('modal');

	// Add new model content
	let closeButtonElement = document.createElement('button');
	closeButtonElement.classList.add('modal-close')
	closeButtonElement.innerText = 'X';
	closeButtonElement.addEventListener('click', hideModal);

	let pokemonTitle = document.createElement('h1');
	pokemonTitle.innerText = title;

	let pokemonDetails = document.createElement('p');
	pokemonDetails.innerText = text;

	modal.appendChild(closeButtonElement);
	modal.appendChild(pokemonTitle);
	modal.appendChild(pokemonDetails);
	modalContainer.appendChild(modal);

	modalContainer.classList.add('is-visible');
};

function hideModal(){
	modalContainer.classList.remove('is-visible');
};

// Close module with escape key
window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
		hideModal();
	}
});

// Close module with click outside
modalContainer.addEventListener('click', (e) => {
	let target = e.target;
	if (target === modalContainer) {
		hideModal();
	}
});