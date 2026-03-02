alert("Controls:\n\nPLAYER 1\nA = Left\nB = Right\nC = Attack\n\nPLAYER 2\n← = Left\n→ = Right\n↑ = Attack\n↓ = Down");

var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left1 = 40;
var left2 = window.innerWidth - 200;

char1.style.left = left1 + "px";
char2.style.left = left2 + "px";

function animateChar(e){

    // Stop page scrolling from arrows
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)){
        e.preventDefault();
    }

    var maxWidth = window.innerWidth - 180;

    // ================= PLAYER 1 =================

    if(e.key === "b" || e.key === "B"){ // Right
        if(left1 < maxWidth){
            left1 += 15;
            char1.style.left = left1 + "px";
            char1.src="https://www.fightersgeneration.com/characters/alicewf.gif";
            char1.style.transform= "scaleX(1)";
        }
    }

    if(e.key === "a" || e.key === "A"){ // Left
        if(left1 > 0){
            left1 -= 15;
            char1.style.left = left1 + "px";
            char1.style.transform = "scaleX(-1)";
        }
    }

    if(e.key === "c" || e.key === "C"){ // Attack
        char1.src="https://www.fightersgeneration.com/characters/alicedash.gif";
        setTimeout(()=>{
            char1.src ="https://www.fightersgeneration.com/characters/alicestance.gif";
        },700);
    }

    // ================= PLAYER 2 =================

    if(e.key === "ArrowRight"){ // Right
        if(left2 < maxWidth){
            left2 += 15;
            char2.style.left = left2 + "px";
            char2.src="https://www.fightersgeneration.com/characters/alex-walk.gif";
            char2.style.transform= "scaleX(1)";
        }
    }

    if(e.key === "ArrowLeft"){ // Left
        if(left2 > 0){
            left2 -= 15;
            char2.style.left = left2 + "px";
            char2.style.transform = "scaleX(-1)";
        }
    }

    if(e.key === "ArrowUp"){ // Attack 1
        char2.src="https://www.fightersgeneration.com/characters/alex-powerbombmiss.gif";
        setTimeout(()=>{
            char2.src ="https://www.fightersgeneration.com/characters/alex-qcfp.gif";
        },700);
    }

    if(e.key === "ArrowDown"){ // Attack 2
        char2.src="https://www.fightersgeneration.com/np7/char/gifs/alex/alex-cfe-special2.gif";
        setTimeout(()=>{
            char2.src="https://www.fightersgeneration.com/characters/alex-qcfp.gif";
        },700);
    }

}

window.addEventListener("keydown", animateChar);
