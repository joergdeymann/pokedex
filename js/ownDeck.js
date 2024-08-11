function getActiveOwnDeck() {
    let id="right-menu";
    let scan="bg-ground";
    let tabs=Array.from(document.getElementById(id).firstElementChild.children);    
    return tabs.findIndex(element => element.classList.contains(scan));
}

function getAllOwnDecks() {
    getOwnDeck(0);
    getOwnDeck(1);
    getOwnDeck(2);
}

function setOwnDeckPositionEnd(deck=getActiveOwnDeck()) {
    if (pokemonDeck[deck] != null) {
        deckCardIndex[deck] = pokemonDeck[deck].length-1;    
    }
}

async function getOwnDeck(deck=getActiveOwnDeck()) {
    let tab="";
    let di = deckCardIndex[deck];
    if (di == null && pokemonDeck[deck] != null) {
        di=pokemonDeck[deck].length-1; // What is if empty
    }
    if (di == null) di=-1;
    if (di != -1 && di>pokemonDeck[deck].length-1) di=pokemonDeck[deck].length-1;
    if (di == -1) {
        tab=renderOwnDeckCardTabEmpty();        
    } else {
        let pokemon=await loadPokemon(pokemonDeck[deck][di]);
        tab=renderOwnDeckCardTab(pokemon, deck, di);    
    }
    document.getElementById(`tab-deck${deck}`).innerHTML=tab;
}

async function reloadOwnDeck(pokemon,deck=getActiveOwnDeck()) {
    let di = deckCardIndex[deck];
    if (di == null) di=pokemonDeck[deck].length-1; // What is if empty 

    let tab=renderOwnDeckCardTab(pokemon, deck, di);
    document.getElementById(`tab-deck${deck}`).innerHTML=tab;
}

function renderOwnDeckCardTab(pokemon,deck,activeCard) {
    maxCards=pokemonDeck[deck].length;
    return /* html*/ `
    <div>Card ${activeCard+1} of ${maxCards}</div>
    <div class="deck-card">
        <div class="relative">
            <div id="ownDeckCard${deck}1">${renderOwnDeckCard(pokemon)}</div>
            <div id="ownDeckCard${deck}2" class="absolute">${renderOwnDeckCard(pokemon)}</div>
        </div>
    </div>
    <div class="footer">
        <img onclick="ownDeckLeft()" class="clickable to-left"  src="./img/firearrow-left.svg">
        <img onclick="ownDeckRight()" class="clickable to-right" src="./img/firearrow-right.svg">
    </div>`;
}

function renderOwnDeckCardTabEmpty() {
    return /* html*/ `
    <div>Card 0 of 0</div>
    <div class="deck-card">
        <div class="relative">
            <div><img src="./img/pokeball.svg"></div>
        </div>
    </div>
    <div class="footer">
        <img  class="to-left"  src="./img/firearrow-left.svg">
        <img  class="to-right" src="./img/firearrow-right.svg">
    </div>`;
}

function renderOwnDeckCard(pokemon) {
    return /*html*/`
    <div class="card bg-${pokemon.typeList[0]}">
        <div class="card-head">
            <h2 class="circle">${pokemon.id}</h2>
            <h2>${pokemon.name}</h2>
            <h2></h2>
        </div>
        <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
        <div class="pokemon-types">
            ${renderPokemonCardType(pokemon.typeList)}
        </div>
    </div>
    `;    
}

async function ownDeckLeft() {
    let d=getActiveOwnDeck();
    if (deckCardIndex[d] == null) deckCardIndex[d]=pokemonDeck[d].length-1;
    if (--deckCardIndex[d]<0) deckCardIndex[d]=pokemonDeck[d].length-1;    
    let di=deckCardIndex[d];
    let pokemon=await loadPokemon(pokemonDeck[d][di]);
    animateDeckCard(pokemon, "movingCardLeft",d);
}

async function ownDeckRight() {
    let d=getActiveOwnDeck();
    if (deckCardIndex[d] == null) deckCardIndex[d]=pokemonDeck[d].length-1;
    if (++deckCardIndex[d]>pokemonDeck[d].length-1) deckCardIndex[d]=0;    
    let di=deckCardIndex[d];
    let pokemon=await loadPokemon(pokemonDeck[d][di]);
    animateDeckCard(pokemon, "movingCardRight",d);
}

async function animateDeckCard(pokemon,direction,deck) {
    let dc1=document.getElementById(`ownDeckCard${deck}1`);
    let dc2=document.getElementById(`ownDeckCard${deck}2`); 
    dc2.classList.remove(direction);
    dc1.innerHTML=renderOwnDeckCard(pokemon);
    dc2.classList.add(direction);
    await new Promise(resolve => setTimeout(resolve,500));

    reloadOwnDeck(pokemon);
}

