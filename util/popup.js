popup_network();

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
        },1500);

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
        },1500);

        document.getElementById("network_icon").src = "./assets/network.png";
        document.getElementById("airplane_text").textContent = "Airplane mode";
    }

    airplane = !airplane;
};
}