let pokemonArrayId=1;
let pokemonCounter = {
    done: 0,
    all: 40,
    step: 40,
    start: 1,
}

async function init() {
    loadLocalUser();
    await loadScreen(0,0);
    if (isValidUser()) {
        loginUser();
    }

    getPokemons(pokemonCounter.start,pokemonCounter.start+pokemonCounter.step-1);
    getOwnDeck(0);
    getOwnDeck(1);
    getOwnDeck(2);
}

function showMenu() {
    let t=document.getElementById("relative-filter").style.transform;
    if (t == "") {
        document.getElementById("relative-filter").style.transform="translateX(0px)"; 
    } else {
        document.getElementById("relative-filter").style.transform="";
    } 
}
