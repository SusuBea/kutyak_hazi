window.addEventListener("load", init);

const KUTYAK = [
    {Név: "Lizzy", Fajta: "spániel", Kor: "5"},
    {Név: "Picúr", Fajta: "tacskó", Kor: "2"},
    {Név: "Rokkó", Fajta: "terrier", Kor: "1"},
    {Név: "Centi", Fajta: "csivava",Kor: "4"},
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



