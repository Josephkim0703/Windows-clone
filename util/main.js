import { apps, desktopapps } from "./app.js";
import { grab } from "./app.js";

function main(){
    //makes date and time reset every second
    setInterval(time, 1000);
    
    pinApp(apps);
    desktopApp(desktopapps);
    inject(desktopapps, grab)
}

function pinApp(apps){

    let pinned = [];

    for(let i = 0; i < apps.length; i++){
        let data = "";
            data += '<button type="button" id="app' + i + '"><img src="'+ apps[i].logo +'"></button>'; 
        pinned.push(data);
    }
  
    document.getElementById("pin_taskbar").innerHTML = pinned;
    
}

function desktopApp(apps){

    let pinned = [];

    for(let i = 0; i < apps.length; i++){
        let data = "";
            data += '<button type="button" id="app' + i + '"><img src="'+ apps[i].logo +'"><p>'+ apps[i].name +'</p></button>'; 
        pinned.push(data);
    }

    document.getElementById("desktop_app").innerHTML = pinned.join(" ");

}

function time(){
    let x = new Date();

    let hours = x.getHours();
    let y = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    let month = x.getMonth() + 1;

    let time = (x.getHours() - 12) + ":" + x.getMinutes().toString().padStart(2, '0') + " " + y;
    let date = (month.toString().padStart(2, '0')) + "/" + x.getDate().toString().padStart(2, '0')+ "/" + x.getFullYear();

    document.getElementById("time").innerHTML = time + "<br>" + date;
}

//inject desktop active apps to taskbar and hidden tabs
function inject( dapps, grab){

    let pinned = [];

    for(let i = 0; i < dapps.length; i++){
        let data = "";
            data += '<button type="button" id="app' + i + '"><img src="'+ dapps[i].logo +'"><p>'+ dapps[i].name +'</p></button>'; 
        pinned.push(data);
    }

    for(let i = 0; i < dapps.length; i++){
    let option = document.getElementById("app" + i);

    option.addEventListener("click", function(){
        //it grab this which is the current option then replaces the id app with nothing to isolate the number
        let index = parseInt(this.id.replace("app", ""));
        grab(dapps[index]);
    });
 }

}



function drag(){

    document.addEventListener("drag", evt => {
        
    })
}

main();