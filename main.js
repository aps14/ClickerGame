var cookies = {};
var clicks = 0;
var clickers = 0;
var clickerCost = 15;

function clickButton(addTo){
    clicks = clicks + addTo;
    document.getElementById("clicks").innerHTML = clicks;
}

function autoClicker(){
    clickerCost = Math.floor(10 * Math.pow(1.5,clickers));
    if(clicks >= clickerCost){
        clickers = clickers + 1;
        clicks = clicks - clickerCost;
        document.getElementById('clickers').innerHTML = clickers;
        document.getElementById('clicks').innerHTML = clicks;
    }
    clickerCost = Math.floor(10 * Math.pow(1.5,clickers));
    document.getElementById('clickerCost').innerHTML = clickerCost;
}

function toggleDarkMode(){
    var getBody = document.body;
    getBody.classList.toggle("dark-mode");
}

function saveGame(){
    cookies["_clicks"] = clicks;
    cookies["_clickers"] = clickers;
    cookies["_clickerCost"] = clickerCost;

    var dateVal = new Date();
    dateVal = dateVal.setFullYear(dateVal.getFullYear() + 1).toString;

    document.cookie = "";
    var cookieString = "";
    for (var value in cookies){
        cookieString = value + "="+cookies[value]+"; expires="+dateVal+";";
        document.cookie = cookieString;
    }

    document.getElementById("out").innerHTML = document.cookie;
}

function getCookie(){
    cookies = {};
    var cookieArray = document.cookie.split(";");
    for (var id in kv){
        var cookie = kv[id].split("=");
        cookies[cookie[0].trim()] = cookie[1];
    }
    clicks = cookies["_clicks"];
    clickers = cookies["_clickers"];
    clickerCost = cookies["_clickerCost"];
}
function checkCookie(){
    var value = getCookie("clicks");
    if(value != ""){
        getCookie();
    }
    else{
        clickers = 0;
        clicks = 0;
    }
}
function clearCookies(){
    document.cookie = "";
    getCookie();
}

//window.onload = (checkCookie())

window.setInterval(function(){
    clickButton(clickers);
    //saveGame();
},1000);
