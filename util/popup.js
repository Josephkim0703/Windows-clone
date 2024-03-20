import { apps , allapps } from "./app.js";

function main() {
popup_network();
hidden_icon(allapps);
}

function popup_network() {

let show = false;

document.getElementById("internet").onclick = function() {
    if (!show) {
        document.getElementById("internet_popup").style.visibility = "visible";
        show = true;
    } else {
        document.getElementById("internet_popup").style.visibility = "hidden";
        show = false;
    }
};

let airplane = false;

document.getElementById("airplane_mode").onclick = function () {
    let icon = document.getElementById("airplane_icon")
    let status = document.getElementById("status");
    if (airplane === false) {

        status.innerHTML = "On";
        status.style.opacity = 1;

        icon.style.transition = 0 + "s";
        icon.style.opacity = 0;
        icon.src = "./assets/network.png";

        setTimeout(function () {
            icon.style.transition = 0.3 + "s";
            status.style.opacity = 0;
            icon.style.opacity = 1;
        },1000);

        document.getElementById("network_icon").src = "./assets/airplane1.png";
        document.getElementById("airplane_text").textContent = "Network mode";
    } else {

        status.innerHTML = "Off";
        status.style.opacity = 1;

        icon.style.transition = 0 + "s";
        icon.style.opacity = 0;
        icon.src = "./assets/airplane.png";

        setTimeout(function () {
            icon.style.transition = 0.3 + "s";
            status.style.opacity = 0;
            icon.style.opacity = 1;
        },1000);

        document.getElementById("network_icon").src = "./assets/network.png";
        document.getElementById("airplane_text").textContent = "Airplane mode";
    }

    airplane = !airplane;
};
}

function hidden_icon(allapps){

let show = false;

document.getElementById("app_tabs").onclick = function() {
    if (!show) {
        document.getElementById("hidden_icon").style.visibility = "visible";
        show = true;
    } else {
        document.getElementById("hidden_icon").style.visibility = "hidden";
        show = false;
    }
};

let iconArr = [];
let data = "";

for(let i = 0; i < allapps.length; i++) {
    data += '<button type="button" id="hiddenApp' + i + '"><a href= "' + allapps[i].link +'"><img src="'+ allapps[i].logo +'" alt=""></a></button>';
}
iconArr.push(data);
document.getElementById("hidden_icon_apps").innerHTML = iconArr;
console.log(iconArr)

if (iconArr.length = 2) {
    document.getElementById("hidden_icon_apps").style.width = 4.6 + "rem";
} 


}

main();