
const storage = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off",
        active: "no"
    },
    {
        name: "File Explorer",
        logo: "./assets/file.png",
        status: "off",
        active: "no"
    }, 
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "on",
        active: "no"
    }
]

const apps = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off",
        active: "no"
    },
    {
        name: "File Explorer",
        logo: "./assets/file.png",
        status: "off",
        active: "no"
    },
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "off",
        active: "no"
    },
]

const allapps = [
    {
        name: "Github",
        logo: "./assets/github.png",
        link: "https://github.com/Josephkim0703",
        status: "on",
        active: "no"
    }
    
]

const desktopapps = [
    {
        name: "Chrome",
        logo: "./assets/chrome.png",
        status: "off",
        active: "no"
    }
    
]

function grab(dapps){
    apps.push(dapps);
    allapps.push(dapps);
    
console.log(apps);
}

export {apps, allapps, desktopapps, grab}
