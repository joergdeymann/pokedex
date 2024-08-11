let pokemonDeck = [
    [],[],[]
]

let deckCardIndex = [
    null,null,null
];

function getDeckCardImage(deck) {
    if (pokemonDeck[deck]==null || pokemonDeck[deck].indexOf(pokemonData.id) == -1) {
        return "./img/pokeball.svg";
    } else {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`;    
    }
}

function renderDeckCard(deck) {
    let id=filteredPokemonList[pokemonArrayId].id;
    return /*html*/ `
    <div onclick="toggleDeckCard(${deck},${id})" class="pokemon-card bg-${filteredPokemonList[pokemonArrayId].typeList[0]}">Deck ${deck+1}
        <img src="${getDeckCardImage(deck)}">
        <br>
    </div>`;
}

function renderDeck() {
    html="";
    for(let i=0;i<3;i++) {
        html += renderDeckCard(i);
    }
    document.getElementById("tab-deck").innerHTML=html;
}

function toggleDeckCard(deck,id) {
    let i=-1;
    if (pokemonDeck[deck] != null) {
        i=pokemonDeck[deck].indexOf(id);
    } else {
        pokemonDeck[deck]=[];
    }
    if (i == -1 ) {
        pokemonDeck[deck].push(id);
        setOwnDeckPositionEnd();
        deckCardIndex[deck]=pokemonDeck[deck].length-1;
    } else {
        pokemonDeck[deck].splice(i,1);
        if (deckCardIndex[deck] > pokemonDeck[deck].length-1) {
            deckCardIndex[deck]=pokemonDeck[deck].length-1;
        }
    }
    renderDeck();
    getOwnDeck(deck);
    saveUser();
}

function addToActiveDeck(id,event) {
    let activeDeck=getActiveOwnDeck();
    let i=pokemonDeck[activeDeck].indexOf(id);
    if (i == -1 ) {
        pokemonDeck[activeDeck].push(id);
        deckCardIndex[activeDeck]=pokemonDeck[activeDeck].length-1;
        setOwnDeckPositionEnd();
        saveUser();
    } 
    getOwnDeck();
    if (event) {
        event.stopPropagation();
    } else {
        renderDeck();
    }
}