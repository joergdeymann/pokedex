function closeMainCard(event) {
    document.getElementById("maincard-container").classList.toggle("hide");
    document.getElementsByTagName("body")[0].style.overflow="";
    event.preventDefault();
    event.stopPropagation();
}

function preventProcess(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
}

function play(audiofile)  {
    var audio = new Audio(audiofile);
    audio.play();
}

function toggleTypeSelection(node,options) {
    if (options)  {
        filterTypesSelectedAll(options);
    } else {
        node.classList.toggle("brick-inactive");
    }
    filterPokemonList();   
}

function inputSelection() {
    let search=document.getElementById("input-pokemon").value;
    if (search.length<3 && search.length !=0) return;
    
    filterPokemonList();  
}

function disableLoadMoreCards() {
    document.getElementById("moreCards").style.cursor="default";
}

function enableLoadMoreCards() {
    document.getElementById("moreCards").style.cursor="";
}

function isEnabledLoadMoreCards() {
    return document.getElementById("moreCards").style.cursor != "default";
}

async function loadMoreCards() {
    if (!isEnabledLoadMoreCards() ) return;
    pokemonCounter.all=pokemonCounter.step;
    pokemonCounter.done=0;
    pokemonCounter.start+=pokemonCounter.step;
    await loadScreen(0,0);
    toggleLoadScreen();
    
    getPokemons(pokemonCounter.start,pokemonCounter.start+pokemonCounter.step-1);
}

function setOrder(node) {
    c="brick-active";
    if (node.classList.contains(c)) return;
    
    document.getElementById("order-id").classList.remove(c);
    document.getElementById("order-type").classList.remove(c);
    document.getElementById("order-name").classList.remove(c);
    node.classList.add(c);
    filterPokemonList();
}

function tabScroll(direction) {
    let thc=document.getElementById("tab-headline");
    let a= +thc.scrollWidth // Full size
    let b= +thc.getBoundingClientRect().width  //Shown size
    let step=+Math.max(50,(a-b)/5).toFixed(1);
    let position= +thc.style.transform.replace(/[^\d\.-]/g,""); // position of the moinvg container
    let np=position+step*direction;
    if (np < b-a) np=b-a;
    if (np > 0) np=0;
    thc.style.transform=`translateX(${np}px)`;
}
