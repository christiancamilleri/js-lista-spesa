// creo lista spesa
let spesa = ["uova", "carne", "pesce", "nutella", "formaggio", "acqua", "latte"];

// bersaglio lista html
let listEl = document.getElementById("lista");
console.log(listEl);

// creo variabile index
let index = 0;

// creo un ciclo while in cui inserisco spesa dentro la lista creando degli li
while (index < spesa.length) {
    // creo elemento li html
    let pointlist = document.createElement("li");
    
    // appunto elemento li sotto listEl
    listEl.append(pointlist);

    // inserisco spesa in pointlist
    pointlist.innerText = spesa[index];
    console.log(pointlist)

    index++;
}
