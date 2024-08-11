let pokemonList=[];
let filteredPokemonList=[];

async function getPokemons(start,end) {
    DB.setUrl("https://pokeapi.co/api/v2/");
    DB.setProject("pokemon-form"); // nicht species
    let promises = [];
    for (let i = start; i <= end; i++) {
        promises.push(getPokeForm(i));
    }
    await Promise.all(promises);
    filterPokemonList();
    toggleLoadScreen();
    enableLoadMoreCards();
}

async function getPokeForm(pokemonId) {
    let object=await getData(pokemonId);
    let typeListEn=[];
    for (let i=0; i<object.types.length;i++ ) {
        typeListEn.push(object.types[i].type.name);
    }
    let pokemon={
        id: object.id,        name: object.name,
        typeList: typeListEn
    }
    pokemonList.push(pokemon);
    await loadScreen(++pokemonCounter.done*100/pokemonCounter.all,0); 
}

async function loadPokemon(pokemonId) {
    DB.setUrl("https://pokeapi.co/api/v2/");
    DB.setProject("pokemon-form"); // nicht species
    let object=await getData(pokemonId);

    let typeListEn=[];
    for (let i=0; i<object.types.length;i++ ) {
        typeListEn.push(object.types[i].type.name);
    }
    let pokemon={
        id: object.id,
        name: object.name,
        typeList: typeListEn
    }
    return pokemon;
}