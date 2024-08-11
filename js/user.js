function prepareDB() {
    let user=document.getElementById("user");

    DB.setUrl("https://myproject-749a6-default-rtdb.europe-west1.firebasedatabase.app/");
    DB.setProject("pokedex");
    DB.setTable(user.value + ".json");
}

function msg(text="",status="ok") {
    let msg=document.getElementById("msg");
    msg.classList.remove("err");
    msg.classList.remove("ok");
    msg.classList.add(status);
    msg.innerHTML=text;
} 

async function createUser() {
    let pw=document.getElementById("pw");

    prepareDB();
    if (await loadData() == null) {
        saveData(null,{password:pw.value,deck:pokemonDeck});
        msg("Saved successful","ok");
        await new Promise(e => setTimeout(e,1000));
        document.getElementById("usermenu").classList.add("hide");
    } else {
        msg("No data saved!<br>User already exists.<br>Please choose another name.","err");
    };
}

function isValidUser() {
    let user=document.getElementById("user");
    if (user == null) return false;
    return user.value != "" 
           && !document.getElementById("msg").classList.contains("err");
}

function saveUser() {
    if (!isValidUser()) return;
    let pw=document.getElementById("pw");
    let user=document.getElementById("user");
    prepareDB();
    saveData(null,{password:pw.value,deck:pokemonDeck});
    saveLocal("pokedex-jeorgdeymann",{password:pw.value,user:user.value});
}

function loadLocalUser() {
    let pw=document.getElementById("pw");
    let user=document.getElementById("user");
    const data = loadLocal("pokedex-jeorgdeymann");
    if (data != null) {
        pw.value=data.password;
        user.value=data.user;
    } 
}

async function loginUser() {
    let pw=document.getElementById("pw");
    prepareDB();
    let j=await loadData();
    if ( j != null) {
        if (j.password == pw.value) {
            pokemonDeck=j.deck;
            getAllOwnDecks();
            msg("Loaded successful","ok");
            await new Promise(e => setTimeout(e,1000));
            document.getElementById("usermenu").classList.add("hide");
        } else {
            msg("Password is incorect.","err");
        }
    } else {
        msg("User not found.","err");
    };
}

function userMenu() {
    document.getElementById("msg").innerHTML="";
    document.getElementById("usermenu").classList.toggle("hide");
}