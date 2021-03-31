var clicks = 0;
var clickers = 0;
var clickerCost = 10;
var darkMode = false;

function clickButton(addTo){
    clicks = clicks + addTo;
    document.getElementById("clicks").innerHTML = clicks;
}

function autoClicker(){
    if(clicks >= clickerCost){
        clickers = clickers + 1;
        clicks = clicks - clickerCost;
        document.getElementById('clickers').innerHTML = clickers;
        document.getElementById('clicks').innerHTML = clicks;
        clickerCost = Math.floor(10 * Math.pow(1.5,clickers));
        document.getElementById('clickerCost').innerHTML = clickerCost;
    }
}

function toggleDarkMode(){
    var getBody = document.body;
    getBody.classList.toggle("dark-mode");
    if(document.body.style.color == "white"){
        darkMode = false;
    }else{
        darkMode = true;
    }
}

function saveGame(){
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clickers", clickers);
    localStorage.setItem("clickerCost", clickerCost);
    localStorage.setItem("darkMode", darkMode);
}

function getLocal(){
    if(localStorage.getItem("clicks") != null){
    clicks = JSON.parse(localStorage.getItem("clicks"));
    clickers = JSON.parse(localStorage.getItem("clickers"));
    clickerCost = JSON.parse(localStorage.getItem("clickerCost"));
    darkMode = JSON.parse(localStorage.getItem("darkMode"));
    }
    else{
        clicks = 0;
        clickers = 0;
        clickerCost = 10;
    }
    document.getElementById("clickers").innerHTML = clickers;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("clickerCost").innerHTML = clickerCost;
}

function clearLocal(){
    localStorage.clear();
}
function startUp(){
    getLocal();
    if(darkMode){
        toggleDarkMode();
    }
}

window.setInterval(function(){
    clickButton(clickers);
    saveGame();
},1000);
