// Resume Challenge view counter JS  
const counter = document.querySelector(".view-counter")   
async function updateCounter() {
    let response = await fetch("https://pmzfeulpguccoffxog4dkqa5fm0hjwbl.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();