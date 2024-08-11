function bar(value,maxvalue,text="") {
    let percent=value*100/maxvalue;
    let progressText=`${value} ${text} / ${maxvalue} ${text}`;
    if (value > maxvalue) {
        progressText=`<span class="redbold">${value} ${text}</span> / ${maxvalue} ${text}`;
    }
    return /*html*/ `
        <div class="progress-container bg-psychic">        
            <div class="progress-bar bg-water animate" style="width:${percent}%"></div>
            <div class="progress-text">${progressText}</div>
        </div>
    `;
}

function renderStat(stat) {
    return /*html*/ `
    <div class="stat-row">
        <div class="bg-fighting brick stat-brick">${stat.stat.name}</div>
        ${bar(stat.base_stat,100)}
        <div class="stat-efford">
            <div class="brick bg-fighting">efford</div>
            <div class="stat-circle bg-water" >${stat.effort}</div>
        </div>
    </div> `;
}

function renderStat2(stat,text,max=100) {
    return /*html*/ `
    <div class="stat-row">
        <div class="bg-fighting brick stat-brick">${text}</div>
        ${bar(stat,max)}
    </div> `;
}

function getStatsLeft() {
    let stats="";
    pokemonData.stats.forEach(element => {
        stats+=renderStat(element); 
    });
    return stats;
}

function getStatsRight() {
    let stats2="";
    stats2+=renderStat2(pokemonData.base_experience,"base experience",200);
    stats2+=renderStat2(pokemonSpecies.base_happiness,"base happiness");
    stats2+=renderStat2(pokemonSpecies.capture_rate,"capture rate");
    return stats2;
}

function renderStats() {
    html= /*html*/ `
    <div class="textarea-container">
        <div class="textarea">
            ${getStatsLeft()}
        </div>
        <div class="textarea">
            ${getStatsRight()}
        </div>
    </div>
    `;
    document.getElementById("tab-stats").innerHTML = html;
    return;
}

