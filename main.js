var number = 0;
var clickers = 0;

function clickButton(addTo){
    number = number + addTo;
    document.getElementById("clicks").innerHTML = number;
}

function autoClicker(){
    var clickerCost = Math.floor(10 * Math.pow(1.5,clickers));
    if(number >= clickerCost){
        clickers = clickers + 1;
        number = number - clickerCost;
        document.getElementById('clickers').innerHTML = clickers;
        document.getElementById('clicks').innerHTML = clickers;
    };
    var nextCost = Math.floor(10 * Math.pow(1.5,clickers));
    document.getElementById('clickerCost').innerHTML = nextCost;
}

function toggleDarkMode(){
    var getBody = document.body;
    getBody.classList.toggle("dark-mode");
}

window.setInterval(function(){
    clickButton(clickers);
},1000);
