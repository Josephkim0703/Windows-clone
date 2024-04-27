import { apps , allapps } from "./app.js";
export {hidden_icon}

function main() {
popup_network();
hidden_icon(allapps);
closeTabs();
}

function popup_network() {

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

let iconArr = [];

for(let i = 0; i < allapps.length; i++){
    let data = "";
        data += '<button type="button" id="hiddenApp' + i + '"><a href= "' + allapps[i].link +'"><img src="'+ allapps[i].logo +'" alt=""></a></button>';
    iconArr.push(data);
}
document.getElementById("hidden_icon_apps").innerHTML = iconArr.join("");

function tabSize(){

if (iconArr.length > 1 && iconArr.length < 5){
    document.getElementById("hidden_icon_apps").style.width = 4.4 + "rem";
    document.getElementById("hidden_icon_apps").style.transform = "translateX(-"+ 11.2 +"rem)";
}
else if (iconArr.length >= 5 && iconArr.length < 10){
    document.getElementById("hidden_icon_apps").style.width = 6.6 + "rem";
    document.getElementById("hidden_icon_apps").style.transform = "translateX(-"+ 10 +"rem)";
} 
else  if (iconArr.length >= 10 && iconArr.length < 13){
    document.getElementById("hidden_icon_apps").style.width = 8.8 + "rem";
    document.getElementById("hidden_icon_apps").style.transform = "translateX(-"+ 9 +"rem)";
}
else  if (iconArr.length >= 13){
    document.getElementById("hidden_icon_apps").style.width = 11 + "rem";
    document.getElementById("hidden_icon_apps").style.transform = "translateX(-"+ 7.9 +"rem)";
}

}


tabSize(); 
//Add hover feature that shows name of application

let hiddenIcon = document.getElementById("icon_hover");

for(let i = 0; i < iconArr.length; i++){

    document.getElementById("hiddenApp" + i).addEventListener("mouseover", (e) =>{
        
       hiddenIcon.style.visibility = "visible";
    });
}
}

function closeTabs() {
    
    const buttonhidden = document.getElementById("app_tabs");
    const buttonSound = document.getElementById("sound");
    const buttonNetwork = document.getElementById("internet");

    const tabsHidden = document.getElementById("hidden_icon_apps");
    const tabsSound = document.getElementById("soundbar");
    const tabsNetwork = document.getElementById("internet_popup");

    const tabs = [tabsHidden, tabsSound, tabsNetwork];

    const buttons = [buttonhidden, buttonSound, buttonNetwork];

    let show = null;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {

            if (!show) {
                tabs[i].style.visibility = "visible";
                show = true;
            } else {
                tabs[i].style.visibility = "hidden";
                show = false;
            }  

            document.getElementById("background").addEventListener("click", () =>{
                tabs[i].style.visibility = "hidden";
                show = false;
            }); 

            document.getElementById("taskbar").onclick = function(e) { 
                //if the mouse target isnt right button do this
                if (!e.target.closest('#right_buttons')) {
                    tabs[i].style.visibility = "hidden";
                    show = false;
                }
            };                   
        };
    }
}

main();