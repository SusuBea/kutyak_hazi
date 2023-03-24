window.addEventListener("load", init);

const KUTYAK = [
    {név: "Lizzy", fajta: "spániel", kor: "5"},
    {név: "Picúr", fajta: "tacskó", kor: "2"},
    {név: "Rokkó", fajta: "terrier", kor: "1"},
    {név: "Centi", fajta: "csivava", kor: "4"},
]

function init(){
    const ARTICLE = document.querySelector("article")
    let txt = osszeallit()
    ARTICLE.innerHTML = txt

    //megfogtuk az összes gombot
    const GOMBOK = document.querySelectorAll(".kutyak button")

    //rátesszük az eseménykezelőt a gomb elemekre
    for (let index = 0; index < KUTYAK.length; index++) {
        GOMBOK[index].addEventListener("click", torles) 
    }
    
    const TABLA = document.querySelector(".tablazat")
    let szoveg = beleir()
    TABLA.innerHTML += szoveg

}


function osszeallit(){
    let txt = ""
    for (let index = 0; index < KUTYAK.length; index++) {
        txt += `<div class="kutyak"> <button>Törlés</button>`
            for(const kulcs in KUTYAK[index]){
                txt += `<p>${kulcs}: ${KUTYAK[index][kulcs]} </p>`
            } 
            txt += `</div>`
    }
    return txt
}

function torles(event){
    const DIV = event.target.parentNode;
    DIV.remove();

}

function beleir(){
    let txt = ""
    for (let index = 0; index < KUTYAK.length; index++) {
        txt += `<tr>`
            for(const kulcs in KUTYAK[index]){
                txt += `<td>${KUTYAK[index][kulcs]} </td>`
            } 
            txt += `</tr>`
    }
    return txt
}



