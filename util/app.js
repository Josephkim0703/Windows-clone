const storage = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off"
    },
    {
        name: "File Explorer",
        logo: "./assets/file.png",
        status: "off"
    }, 
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "on"
    }
]

const apps = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off"
    },
    {
        name: "File Explorer",
        logo: "./assets/file.png",
        status: "off"
    },
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "on"
    },
]

const allapps = [
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "on"
    }
    
]

const desktopapps = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off" 
    }
    
]

function grab(dapps){
    apps.push(dapps);
    allapps.push(dapps);

}

export {apps, allapps, desktopapps, grab}
