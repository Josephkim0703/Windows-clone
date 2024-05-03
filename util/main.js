import { apps, desktopapps, allapps  } from "./app.js";
import { grab } from "./app.js";
import { hidden_icon } from "./popup.js";

function main(){
    //makes date and time reset every second
    setInterval(time, 1000);
    
    pinApp(apps);

    desktopApp(desktopapps);

    inject(desktopapps, grab);
}

function pinApp(apps){

    let pinned = [];

    for(let i = 0; i < apps.length; i++){
        let data = "";
            data += '<button type="button" id="app' + i + '" class ="taskbarbutton"><img src="'+ apps[i].logo +'"></button>'; 
        pinned.push(data);
    }
  
    document.getElementById("pin_taskbar").innerHTML = pinned.join("");
    
}

function desktopApp(apps){

    let pinned = [];

    for(let i = 0; i < apps.length; i++){
        let data = "";
            data += '<button type="button" id="desktopApps' + i + '"><img src="'+ apps[i].logo +'"><p>'+ apps[i].name +'</p></button>'; 
        pinned.push(data);
    }

    document.getElementById("desktop_app").innerHTML = pinned.join("");

}

function time(){
    let x = new Date();

    let hours = x.getHours();
    let y = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    let month = x.getMonth() + 1;

    let time = (   hours) + ":" + x.getMinutes().toString().padStart(2, '0') + " " + y;
    let date = (month.toString().padStart(2, '0')) + "/" + x.getDate().toString().padStart(2, '0')+ "/" + x.getFullYear();

    document.getElementById("time").innerHTML = time + "<br>" + date;
}

//inject desktop active apps to taskbar and hidden tabs

function inject( dapps, grab){

    for(let i = 0; i < dapps.length; i++){
    let option = document.getElementById("desktopApps" + i);

    let clickcount = 0;

    function click(){

        clickcount++;

        if(clickcount === 1){
            option.style.backgroundColor = "rgba(100, 100, 100, 0.150)";
            option.style.border = "1px solid rgba(255, 255, 255, 0.300)";
        }

        if(clickcount === 2){

            option.style.backgroundColor = "";
            option.style.border = "";

            clickcount = 0;

            //it grab this which is the current option then replaces the id app with nothing to isolate the number
            let index = parseInt(this.id.replace("desktopApps", ""));   
            
            //turns status on
            dapps[index].status = "on";
            //current tab open
            dapps[index].active = "yes";

            grab(dapps[index]);
            
            //refreshes the taskbar and hidden tab
            pinApp(apps);
            hidden_icon(allapps); 
            active(apps)  
        }
    }
    option.addEventListener("click" , click)
    }
}

function active(apps){

   for(let i = 0; i < apps.length; i++){

        if(apps[i].status === "on"){
            document.getElementById("app" + i).style.borderBottom = "3px solid rgba(255, 255, 255, 0.600)";
        }else{
            document.getElementById("app" + i).style.borderBottom = "";
        }

        if(apps[i].active === "yes"){
            document.getElementById("app" + i).style.backgroundColor = "rgba(255, 255, 255, 0.250)";
        }else{
            document.getElementById("app" + i).style.backgroundColor = "";
        }
    }  
}

function drag(app){

    document.addEventListener("drag", evt => {
        
    })
}

main();