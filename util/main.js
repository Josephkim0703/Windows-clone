import { apps } from "./app.js";

function main(){
    setInterval(time, 1000);
    pinApp(apps);
}

function pinApp(apps){

    let data = "";
    let pinned = [];

    for(let i = 0; i < apps.length; i++){
        data += '<button type="button" id="app' + i + '"><img src="'+ apps[i].logo +'"></button>';
        
    }
    pinned.push(data);
    document.getElementById("pin_taskbar").innerHTML = pinned;

    
}

function time(){
    let x = new Date();

    let hours = x.getHours();
    let y = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    let month = x.getMonth() + 1;

    let time = (x.getHours() - 12) + ":" + x.getMinutes().toString().padStart(2, '0') + " " + y;
    let date = x.getFullYear() + "-" + (month.toString().padStart(2, '0')) + "-" + x.getDate().toString().padStart(2, '0');

    document.getElementById("time").innerHTML = time + "<br>" + date;
}

function drag(){

    document.addEventListener("drag", evt => {
        
    })
}

main();