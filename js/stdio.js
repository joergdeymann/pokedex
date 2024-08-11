function saveLocal(key,content) {
    localStorage.setItem(key,JSON.stringify(content));
}

function loadLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}

function numberWithNull(n, size = 2) {
    return n.toString().padStart(size, "0");
}

function currency(value,currency="€") {
    return value.toFixed(2).toString().replace(".",",")+` ${currency}`;
}

function sumOfArray(a) {
    return sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
}