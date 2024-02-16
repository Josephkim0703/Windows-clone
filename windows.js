//sets password ui design once clicked on
document.getElementById("password_input").onclick = function()
{
    document.getElementById("password_input").style.backgroundColor = "white";
    document.getElementById("show_password").style.visibility = "visible";
    
    document.getElementById("windows_form").onclick = function(){
    document.getElementById("eye").src = "./assets/show.png";
    document.getElementById("password_input").type = "password";
    document.getElementById("password_input").style.backgroundColor = "";
    document.getElementById("show_password").style.visibility = "hidden";
    }
}

//hardcoded the password and username as they wont change
let joseph = {
    email: 'josephkim0703@gmail.com',
    password: "helloworld",
    username: "josephkim0703"
} 

//sets login function
function login(callback){

let user_input = document.getElementById("user_input").value;
let pass_input = document.getElementById("password_input").value;

//password and username functionality if one the 2 are incorrect it will show the error message
    if(user_input !== joseph.username || pass_input !== joseph.password){
        document.getElementById("error_message").textContent = "The user name or password is incorrect. Try again.";
        document.getElementById("user_input").value = "";
        document.getElementById("password_input").value = "";
        document.getElementById("password_input").style.backgroundColor = "";
        document.getElementById("show_password").style.visibility = "hidden";
        console.log("incorrect password or username please try again");
        document.getElementById("user_input").style.visibility = "hidden";
        document.getElementById("password_layout").style.visibility = "hidden";
        document.getElementById("error").style.display = "block";
        document.getElementById("forget_password").style.visibility = "hidden";
        //error message
        document.getElementById("ok").onclick = function(){
            document.getElementById("error").style.display = "none";
            document.getElementById("user_input").style.visibility = "visible";
            document.getElementById("password_layout").style.visibility = "visible";
            document.getElementById("forget_password").style.visibility = "visible";
        }
    }
    //if correct signs into account and sets password to a 4 digit pin
    else{
        document.getElementById("user_input").value = "";
        document.getElementById("password_input").value = "";
        console.log("signed in");
        document.getElementById("signing").style.display = "block";
        document.getElementById("loader").style.display = "block";
        document.getElementById("user_input").style.visibility = "hidden";
        document.getElementById("password_input").style.visibility = "hidden";
        document.getElementById("show_password").style.visibility = "hidden";
        document.getElementById("confirm").style.visibility = "hidden";
        document.getElementById("forget_password").style.visibility = "hidden";

        setTimeout(() => {
            document.getElementById("signing").style.display = "none";
            document.getElementById("loader").style.display = "none";  
       
        document.getElementById("user_name").textContent = "Joseph Kim";
        document.getElementById("user_image").style.visibility = "hidden";
        document.getElementById("user_profile").style.backgroundImage = "url(./assets/profile1.jpg)";
        
        document.getElementById("confirm").style.visibility = "hidden";
        document.getElementById("eye").src = "./assets/show.png";

        document.getElementById("password_input").placeholder = "PIN";
        document.getElementById("password_input").style.visibility = "visible";
        document.getElementById("password_input").style.borderRight = "1.55px solid rgb(185, 185, 185)";
        document.getElementById("password_input").type = "password";
        document.getElementById("password_input").maxLength = 4;
        document.getElementById("password_input").style.width = 14 + "rem";
        document.getElementById("password_input").style.transform = "translate(" + 6 + "%," + -115 + "%)";
        document.getElementById("password_input").style.backgroundColor = "rgba(105, 105, 105, 0.767)";
        
        document.getElementById("user_input").style.visibility = "hidden";

        document.getElementById("show_password").style.visibility = "hidden";
        document.getElementById("show_password").style.marginLeft = 12 + 'rem';
        document.getElementById("show_password").style.top = -83 + '%';
   //this callback is the pin() function same process as the login function but smaller
        callback();
    }, 2500);
    }
}

//once logged in you get to the pin page
function pin() {
    const pin = "2004";
    let pin_input = document.getElementById("password_input").value;
//checks if the length is 4 and if the pin is correct
    if (pin_input.length === 4 && pin_input !== pin) {
        document.getElementById("password_input").value = "";
        console.log("Incorrect password, please try again");
        document.getElementById("password_input").style.visibility = "hidden";
        document.getElementById("error").style.display = "block";
        document.getElementById("error_message").textContent = "The PIN is incorrect. Try again.";
        document.getElementById("show_password").style.visibility = "hidden"
        document.getElementById("ok").onclick = function(){
            document.getElementById("error").style.display = "none";
            document.getElementById("password_input").style.visibility = "visible";
            document.getElementById("show_password").style.visibility = "visible"
    }
//if correct signs in and relocates to next html page
    } else if (pin_input.length === 4 && pin_input === pin) {
        console.log("Signed in");
        document.getElementById("windows_back").style.transition = 0.8 + "s";
        document.getElementById("windows_back").style.filter = "blur(0px) brightness(1)"
        document.getElementById("password_input").style.visibility = "hidden";
        document.getElementById("show_password").style.visibility = "hidden";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("loader").style.display = "block";
        setTimeout(() => {
            window.location.href = "./windows.html";
        },3000);
    }
}

//checkpin is what checks if the length is 4 if it isnt it makes input hidden 
function checkPin() {
    const pin_input = document.getElementById("password_input").value;

    if(document.getElementById("user_input").style.visibility == "hidden"){
    if (pin_input.length === 4) {
        pin();
    }
    }
}

//show password hide password function
function show() {
    let show = document.getElementById("password_input");

    if (show.type === "password") {
        document.getElementById("eye").src = "./assets/hide.png";
        show.type = "text";
    } else {
        document.getElementById("eye").src = "./assets/show.png";
        show.type = "password";
    }  
}



//these are the bottom row buttons
function loginBottons(){

    //shutdown button functionality
    document.getElementById("button_1").onclick = function(){
        document.getElementById("ease_popup").style.visibility = "hidden";
        document.getElementById("internet_popup").style.visibility = "hidden";
        document.getElementById("shutdown_popup").style.visibility = "visible";
    
        //shut down sends you back to homepage
       document.getElementById("shutdown_button").onclick = function(){
            document.getElementById("shutdown_screen").style.display = "block";
            document.getElementById("loader_1").style.display = "block";
        setTimeout(() => {
            document.getElementById("loader_1").style.display = "none";
            window.location.href = "./window.html";  
        }, 2500);
       }
       //restart refreshes the page
       document.getElementById("restart_button").onclick = function(){
            document.getElementById("restart_screen").style.display = "block";
            document.getElementById("loader_1").style.display = "block";
        setTimeout(() => {
            document.getElementById("loader_1").style.display = "none";
            window.location.reload(); 
        }, 2500);
       }
       //sleep turns screen black
       document.getElementById("sleep_button").onclick = function(){
            document.getElementById("sleep_screen").style.display = "block";
            document.getElementById("loader_1").style.display = "block";
        setTimeout(() => {
            document.getElementById("loader_1").style.display = "none";
            document.getElementById("black_screens").style.display = "block";
                setTimeout(() => {
                    document.getElementById("loader_1").style.display = "none";
                    document.getElementById("escape").style.display = "block";
                    document.onkeydown = function(evt) {
                        evt = evt || window.event;
                        if (evt.keyCode == 27) {
                            document.getElementById("shutdown_popup").style.visibility = "hidden";
                            document.getElementById("sleep_screen").style.display = "none";
                            document.getElementById("escape").style.display = "none";
                            document.getElementById("black_screens").style.display = "none";        
                        }
                    };            
                }, 2000);

        }, 2500);
       }
            
       document.getElementById("windows_page").onclick = function(){
            document.getElementById("shutdown_popup").style.visibility = "hidden";
       }
       document.getElementById("windows_back").onclick = function() {
        document.getElementById("shutdown_popup").style.visibility = "hidden";
    }
    
  }
//ease of access only the high contrast works
  document.getElementById("button_2").onclick = function(){

    document.getElementById("internet_popup").style.visibility = "hidden";
    document.getElementById("shutdown_popup").style.visibility = "hidden";
    document.getElementById("ease_popup").style.visibility = "visible";

    let input1 = document.getElementById("narrator");
    let input2 = document.getElementById("dark");
    let input3 = document.getElementById("sticky");
    let input4 = document.getElementById("filter");

    input1.addEventListener("change", function() {
        if (!input1.checked) {
            document.getElementById("box_0").style.transform = "translateX(" + 0 + "%)";  
        } else {
            document.getElementById("box_0").style.transform = "translateX(" + 255 + "%)";
            console.log("success");
        }
    });

    input2.addEventListener("change", function() {
                 
        if (!input2.checked) {
            document.getElementById("box_1").style.transform = "translateX(" + 0 + "%)";
            document.body.classList.remove("darktheme");    
        } else {
            document.getElementById("box_1").style.transform = "translateX(" + 255 + "%)";
            document.body.classList.add("darktheme");     
        }
    
    });

    input3.addEventListener("change", function() {
        if (!input3.checked) {
            document.getElementById("box_2").style.transform = "translateX(" + 0 + "%)";
        } else {
            document.getElementById("box_2").style.transform = "translateX(" + 255 + "%)"; 
            console.log("success");
        }
    });

    input4.addEventListener("change", function() {
        if (!input4.checked) {
            document.getElementById("box_3").style.transform = "translateX(" + 0 + "%)"; 
        } else {
            document.getElementById("box_3").style.transform = "translateX(" + 255 + "%)";   
            console.log("success");
        }
    });

    document.getElementById("windows_page").onclick = function() {
        document.getElementById("ease_popup").style.visibility = "hidden";
    }
    
    document.getElementById("windows_back").onclick = function() {
        document.getElementById("ease_popup").style.visibility = "hidden";
    }
}
//internet button functionality
  document.getElementById("button_3").onclick = function(){

    document.getElementById("internet_popup").style.visibility = "visible";
    document.getElementById("shutdown_popup").style.visibility = "hidden";
    document.getElementById("ease_popup").style.visibility = "hidden";

    let airplane = false;

    //checks if airplane mode is enabled
    document.getElementById("airplane_mode").onclick = function () {
        if (airplane === false) {
            document.getElementById("network_icon").src = "./assets/airplane.png";
            document.getElementById("airplane_icon").src = "./assets/network.png";
            document.getElementById("airplane_text").textContent = "Network mode";
        } else {
            document.getElementById("network_icon").src = "./assets/network.png";
            document.getElementById("airplane_icon").src = "./assets/airplane.png";
            document.getElementById("airplane_text").textContent = "Airplane mode";
        }
        //sets airplane to true
        airplane = !airplane;
    };

    document.getElementById("windows_page").onclick = function(){
        document.getElementById("internet_popup").style.visibility = "hidden";
   }
   document.getElementById("windows_back").onclick = function() {
    document.getElementById("internet_popup").style.visibility = "hidden";
}
  }
}

//makes the sticky not draggable
function drag(){
    //no idea how this works honestly got it off chatgpt
    document.addEventListener('DOMContentLoaded', function () {
        const sticky = document.getElementById('sticky');
    
        let X, Y, drag = false;
    
        sticky.addEventListener('dragstart', function (e) {
            //for firefox
            e.dataTransfer.setData('text/plain', '');

            //get clients browers width and height
            X = e.clientX - sticky.getBoundingClientRect().left;
            Y = e.clientY - sticky.getBoundingClientRect().top;
            drag = true;
        });
    
        //calculates the new position
        document.addEventListener('mousemove', function (e) {
            if (!drag) return;
    
            const x = e.clientX - X;
            const y = e.clientY - Y;
    
            sticky.style.left = x + 'px';
            sticky.style.top = y + 'px';
        });
    
        //event listener is added to stop the dragging when the mouse button is released
        document.addEventListener('mousedown', function () {
            drag = false;
        });
    });
}

//forget button function that does a callback on the form
function forgot(callback, show){
    document.getElementById("sticky_user").textContent = "Email: josephkim0703@gmail.com";
    document.getElementById("sticky_user").style.fontSize = 20 + "px";
    document.getElementById('user_input').style.visibility = 'hidden';
    document.getElementById('password_layout').style.visibility = 'hidden';
    document.getElementById('forget_password').style.visibility = 'hidden';
    document.getElementById("show_password").style.visibility = "hidden";
    document.getElementById("error_message").textContent = "The email or password is incorrect. Try again.";
    document.getElementById("forget_password_questions").style.visibility = "visible";
    callback();  
    show();
}

function show2() {
    let show_0 = document.getElementById("forget_0");
    let show_1 = document.getElementById("forget_1");
    let show_2 = document.getElementById("forget_2");
    let show_3 = document.getElementById("forget_3");

 

    function resetBackground() {
        document.getElementById("forget_0").style.backgroundColor ="rgba(105, 105, 105, 0.767)";
        document.getElementById("forget_1").style.backgroundColor ="rgba(105, 105, 105, 0.767)";
        document.getElementById("forget_2").style.backgroundColor ="rgba(105, 105, 105, 0.767)";
        document.getElementById("forget_3").style.backgroundColor ="rgba(105, 105, 105, 0.767)";
    }


    show_1.onclick = function(){
        resetBackground()
        show_1.style.backgroundColor = "white";  


        document.getElementById("show_password_2").style.visibility = "hidden";
        document.getElementById("show_password_3").style.visibility = "hidden";
        document.getElementById("show_password_1").style.visibility = "visible";

        document.getElementById("eye_2").src = "./assets/show.png";
        show_2.type = "password";

        document.getElementById("eye_3").src = "./assets/show.png";
        show_3.type = "password";

    document.getElementById("show_password_1").onclick = function(){
    if (show_1.type === "password") {
        document.getElementById("eye_1").src = "./assets/hide.png";
        show_1.type = "text";
    } else {
        document.getElementById("eye_1").src = "./assets/show.png";
        show_1.type = "password";
    } 
    }
    }

    show_2.onclick = function(){
        resetBackground()
        show_2.style.backgroundColor = "white";  
        document.getElementById("show_password_1").style.visibility = "hidden";
        document.getElementById("show_password_3").style.visibility = "hidden";
        document.getElementById("show_password_2").style.visibility = "visible";

        document.getElementById("eye_1").src = "./assets/show.png";
        show_1.type = "password";

        document.getElementById("eye_3").src = "./assets/show.png";
        show_3.type = "password";

    document.getElementById("show_password_2").onclick = function(){
    if (show_2.type === "password") {
        document.getElementById("eye_2").src = "./assets/hide.png";
        show_2.type = "text";
    } else {
        document.getElementById("eye_2").src = "./assets/show.png";
        show_2.type = "password";
    } 
    } 
    }

    show_3.onclick = function(){
        resetBackground()
        show_3.style.backgroundColor = "white";  
        document.getElementById("show_password_2").style.visibility = "hidden";
        document.getElementById("show_password_1").style.visibility = "hidden";
        document.getElementById("show_password_3").style.visibility = "visible";

        document.getElementById("eye_2").src = "./assets/show.png";
        show_2.type = "password";

        document.getElementById("eye_1").src = "./assets/show.png";
        show_1.type = "password";

    document.getElementById("show_password_3").onclick = function(){
    if (show_3.type === "password") {
        document.getElementById("eye_3").src = "./assets/hide.png";
        show_3.type = "text";
    } else {
        document.getElementById("eye_3").src = "./assets/show.png";
        show_3.type = "password";
    }
    } 
    }  

    function hidden(){
        document.getElementById("show_password_2").style.visibility = "hidden";
        document.getElementById("show_password_1").style.visibility = "hidden";
        document.getElementById("show_password_3").style.visibility = "hidden";

        document.getElementById("eye_1").src = "./assets/show.png";
        show_1.type = "password";

        document.getElementById("eye_2").src = "./assets/show.png";
        show_2.type = "password";

        document.getElementById("eye_3").src = "./assets/show.png";
        show_3.type = "password";
    }

    document.getElementById("forget_0").onclick = function(){
        hidden();
        resetBackground();
        show_0.style.backgroundColor = "white";  
    }
    document.getElementById("windows_back").onclick = function(){
        hidden();
        resetBackground();
    }
    document.getElementById("footer").onclick = function(){
        hidden();
        resetBackground();
    }
    document.getElementById("windows_form").onclick = function(){
        hidden();
        resetBackground();
    }
}

//forget function form
function forgetQuestion(){
    let a =  document.getElementById('forget_0');
    let b = document.getElementById('forget_1');
    let c = document.getElementById('forget_2');
    let d = document.getElementById('forget_3');

    document.getElementById("confirm_1").addEventListener('click', function(){

        document.getElementById("show_password_2").style.visibility = "hidden";
        document.getElementById("show_password_1").style.visibility = "hidden";
        document.getElementById("show_password_3").style.visibility = "hidden";

        //if the email or old password is incorrect error message
   if(a.value !== joseph.email || b.value !== joseph.password){
        document.getElementById("error").style.display = "block";
        document.getElementById("forget_password_questions").style.visibility = "hidden"

        document.getElementById("ok").onclick = function(){
            document.getElementById("error").style.display = "none";
            document.getElementById("forget_password_questions").style.visibility = "visible";
            a.value = "";
            b.value = "";
            c.value = "";
            d.value = "";
        }
   }else{
        document.getElementById("error_message").textContent = "The passwords you typed do not match. Try again.";
         //a nested if statment if the new pass and confirmations dont match error message
        if(c.value !== d.value){
            document.getElementById("error").style.display = "block";
            document.getElementById("forget_password_questions").style.visibility = "hidden"
    
            document.getElementById("ok").onclick = function(){
                document.getElementById("error").style.display = "none";
                document.getElementById("forget_password_questions").style.visibility = "visible";
                
                c.value = "";
                d.value = "";
            }
        }else{
            const num = /\d/;
            const symbol = /[!@#$%&?]/;
            document.getElementById("error_message").textContent = "Password must contain a symbol, number and be atleast 5 characters long.\n Try again.";
            //set standards for password configurations
            //sees if password is 5 characters long and contains atleast one symbol and num
            if(d.value.length < 5 || !num.test(d.value) || !symbol.test(d.value)){
                document.getElementById("error").style.display = "block";
            document.getElementById("forget_password_questions").style.visibility = "hidden"
    
            document.getElementById("ok").onclick = function(){
                document.getElementById("error").style.display = "none";
                document.getElementById("forget_password_questions").style.visibility = "visible";
                
                c.value = "";
                d.value = "";
            }
            }else{
                joseph.password = d.value;
                document.getElementById("error").style.display = "none";
                document.getElementById("sticky_user").style.fontSize = "";
                document.getElementById("sticky_user").textContent = "User: josephkim0703";
                document.getElementById("forget_password_questions").style.visibility = "hidden"
                document.getElementById("sticky_password").textContent = "Password: " + joseph.password;
                document.getElementById('user_input').style.visibility = 'visible';
                document.getElementById('password_layout').style.visibility = 'visible';
                document.getElementById('forget_password').style.visibility = 'visible';
                    setTimeout(function(){
                        a.value = "";
                        b.value = "";
                        c.value = "";
                        d.value = "";
                    },1000)
            }
       
        }
   }

});

    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 27){
            document.getElementById("show_password_2").style.visibility = "hidden";
            document.getElementById("show_password_1").style.visibility = "hidden";
            document.getElementById("show_password_3").style.visibility = "hidden";
            document.getElementById("sticky_user").style.fontSize = "";
            document.getElementById("sticky_user").textContent = "User: josephkim0703";
            document.getElementById("forget_password_questions").style.visibility = "hidden"
            document.getElementById("sticky_password").textContent = "Password: " + joseph.password;
            document.getElementById('user_input').style.visibility = 'visible';
            document.getElementById('password_layout').style.visibility = 'visible';
            document.getElementById('forget_password').style.visibility = 'visible';
                a.value = "";
                b.value = "";
                c.value = "";
                d.value = "";
        }
    };
}



drag();
loginBottons();

