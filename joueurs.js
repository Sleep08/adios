let allJoueurs = document.querySelectorAll("input");
let btnPlus = document.querySelector(".joueurPlus");
let joueurContain = document.getElementById("joueurs");
let go = document.getElementById("go");
let containSupp = document.querySelector(".joueurContain");

/*let questions = [
    Players[1] + " va embrasser la personne à ta gauche.",
    Players[0] + " danse de manière sexy sur " + Players[1],
]*/

function addJoueur() {
    let supp = document.createElement("p");
    supp.setAttribute("class", "joueurAjoute");
    let newJoueur = document.querySelector(".joueur").value;

    supp.innerHTML = newJoueur;
    joueurContain.appendChild(supp);
}

btnPlus.addEventListener("click", function(){
    addJoueur();
})

let Players = [];
let questions = [
    "Va embrasser la personne à ta gauche.",
    "Danse de manière sexy sur ",
]

function toutOuRienFunction() {
    joueurContain.textContent="";
    let questionsToR = [
        "Donne cinq gorgées",
        "Distribue cinq gorgées",
        "Bois la moitié de ton verre",
        "Donne une moitié de verre à boire",
        "Rempli ton verre et trinque avec la personne qui va boire 4 gorgées avec toi",
        "Bois quatre gorgées dans le verre du premier à te tendre son verre",
        "Bois deux gorgées",
        "Bois trois gorgées",
        "Bois cul-sec",
        "Donne cul-sec",
        "Bois trois gorgées",
        "Donne trois gorgées",
    ]
    let questionsHasard = Math.floor(Math.random()*questionsToR.length);
    document.getElementById("question").textContent = questionsToR[questionsHasard];
    let btnNext = document.createElement("button");
    btnNext.setAttribute("class", "btnGame")
    btnNext.textContent = "NEXT"
    document.getElementById("button").appendChild(btnNext);
    btnNext.addEventListener("click", function(){
        let playerHasard = Math.floor(Math.random()*Players.length);
        document.querySelector("h2").textContent = Players[playerHasard];
        document.getElementById("question").textContent="";
        btnNext.style.display="none";
        apparitionChoix();
        console.log(Players)
    })
}

function lesProblemesFunction() {
    joueurContain.textContent="";
    let playerHasard = Math.floor(Math.random()*Players.length);
    let questionsProblemes = [
        "Désigne deux personnes qui vont devoir dire ce qu'elles pensent de l'autre. Cinq gorgées en cas de refus.",
        "Donne trois gorgées à celui/celle qui t'attires le plus ici.",
        "Est-ce qu'il y a une personne décevante d'après toi autour de cette table ? Si oui tu désignes, elle boit deux gorgées, si non tu en bois quatre.",
        "Que penses-tu vraiment de " + Players[playerHasard],
        "Pose une question à quelqu'un ici, elle sera obligée d'y répondre. 4 gorgées si refus.",
        "Va embrasser une personne autour de cette table. 4 gorgées si refus.",
        "Appelle ton crush et dis-lui ce que tu ressens. 4 gorgées si refus.",
        "Que penses-tu du partenaire de " + Players[playerHasard],
        "Va lécher le cou de " + Players[playerHasard] + " 5 gorgées en cas de refus",
        "offre un strip-tease à " + Players[playerHasard] + " quatre gorgées si refus",
    ]
    let questionsHasardProblemes = Math.floor(Math.random()*questionsProblemes.length);
    document.getElementById("question").textContent = questionsProblemes[questionsHasardProblemes];
    let btnNext = document.createElement("button");
    btnNext.setAttribute("class", "btnGame")
    btnNext.textContent = "NEXT"
    document.getElementById("button").appendChild(btnNext);
    btnNext.addEventListener("click", function(){
        let playerHasard = Math.floor(Math.random()*Players.length);
        document.querySelector("h2").textContent = Players[playerHasard];
        document.getElementById("question").textContent="";
        btnNext.style.display="none";
        apparitionChoix();
        console.log(Players)
    })
}

function veriteFunction() {
    joueurContain.textContent="";
    let playerHasard = Math.floor(Math.random()*Players.length);
    let questionVerite = [
        "Donne deux qualitées de" + Players[playerHasard],
        "Si tu devais passer une soirée en tête à tête avec quelqu'un qui serait-ce ?",
        "Donne un top 5 de tes meilleurs amis",
        "Que penses-tu vraiment de " + Players[playerHasard],
        "Pose une question à quelqu'un ici, elle sera obligée d'y répondre. 4 gorgées si refus.",
        "Raconte une anecdote gênante à ton sujet",
        "Quelle la valeur indispensable à tes yeux ?",        
        "Raconte un fantasme que tu as déjà réalisé.",        
        "Si tu devais ne garder qu'une personne sur cette terre qui serait-ce ?",        
        "Serais-tu capable de te sacrifier pour sauver la vie de quelqu'un ici ?",        
        "Penses-tu être quelqu'un de bien ? Si oui, donne quelqu'un que tu juges être une meilleure personne.",        
        "Cite une personne plus importante que" + Players[playerHasard] + " ici présente.",        
    ]
    let questionsHasardVerite = Math.floor(Math.random()*questionVerite.length);
    document.getElementById("question").textContent = questionVerite[questionsHasardVerite];
    let btnNext = document.createElement("button");
    btnNext.setAttribute("class", "btnGame")
    btnNext.textContent = "NEXT"
    document.getElementById("button").appendChild(btnNext);
    btnNext.addEventListener("click", function(){
        let playerHasard = Math.floor(Math.random()*Players.length);
        document.querySelector("h2").textContent = Players[playerHasard];
        document.getElementById("question").textContent="";
        btnNext.style.display="none";
        apparitionChoix();
        console.log(Players)
    })
}

function apparitionChoix() {
    let toutOuRien = document.createElement("div");
    toutOuRien.setAttribute("id", "toutOuRien");
    toutOuRien.setAttribute("class", "choice");
    toutOuRien.innerHTML = "TOUT OU RIEN"
    let verite = document.createElement("div");
    verite.setAttribute("id", "Verite");
    verite.setAttribute("class", "choice");
    verite.innerHTML = "VERITE ?"
    let lesProblemes = document.createElement("div");
    lesProblemes.setAttribute("id", "lesProblemes");
    lesProblemes.setAttribute("class", "choice");
    lesProblemes.innerHTML = "LES PROBLEMES"
    let containChoice = document.createElement("div");
    containChoice.appendChild(toutOuRien);
    containChoice.appendChild(verite);
    containChoice.appendChild(lesProblemes);
    joueurContain.appendChild(containChoice);
    toutOuRien.addEventListener("click", function(){
        toutOuRienFunction();
    });
    lesProblemes.addEventListener("click", function(){
        lesProblemesFunction();
    });
    verite.addEventListener("click", function(){
        veriteFunction();
    })
}

go.addEventListener("click", function() {
    allPlayers = document.querySelectorAll(".joueurAjoute");
    allPlayers.forEach(player => {
        let newPlayer = player.innerHTML;
        Players.push(newPlayer);
        let playerHasard = Math.floor(Math.random()*Players.length);
        document.querySelector("h2").textContent = Players[playerHasard];
        joueurContain.innerHTML = "";
        go.style.display = "none";
        apparitionChoix();
        return Players
    });
})

function verite() {

}




// Toutes les questions du jeu :





