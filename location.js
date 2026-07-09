const companyName = document.getElementById("companyName");

const deliveryBoy  = document.getElementById("deliveryBoy");

const deliveryId = document.getElementById("deliveryId");

const status = document.getElementById("status");

const latitude = document.getElementById("latitude");

const longitude = document.getElementById("longitude");

const time = document.getElementById("time");

const historyBody = document.getElementById("historyBody");

//  2. variables
let tracking = null;

// 3.functions
function startDelivery() {
    let name = document.getElementById("companyName").value;

    let boy = document.getElementById("deliveryBoy").value;

    let Id = document.getElementById("deliveryId").value;
     
    if(name==="" || boy==="" || Id===""){

        alert ("Please fill all fields");

        return;

    }
    if(tracking !== null){
        alert("Delivery is already running!");
        return;
    }

    status.innerText = "Running";
    getLocation();
    tracking = setInterval(() => {
        getLocation();
    }, 10000);

}

function stopDelivery() {

 clearInterval(tracking);

 status.innerText = "Completed";
 
alert("Delivery stoped");
}

function getLocation() {
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        alert("Geolocation is not supported .");
    }
}

function showLocation(position){

    let lat = position.coords.latitude;

    let lon = position.coords.longitude;

    latitude.innerText = lat;
    longitude.innerText  = lon;

    let currentTime = new Date().toLocaleTimeString();

    time.innerText = currentTime;
    historyBody.innerHTML += `
    <tr>
    <td>${currentTime}</td>
    <td>${lat}</td>
    <td>${lon}</td>
    <td>${status.innerText}</td>
    </tr>
    `;
}

















const companyName = document.getElementById("companyName");

const deliveryBoy  = document.getElementById("deliveryBoy");

const deliveryId = document.getElementById("deliveryId");

const status = document.getElementById("status");

const latitude = document.getElementById("latitude");

const longitude = document.getElementById("longitude");

const time = document.getElementById("time");

const historyBody = document.getElementById("historyBody");

//  2. variables
let tracking = null;

// 3.functions
function startDelivery() {
    let name = document.getElementById("companyName").value;

    let boy = document.getElementById("deliveryBoy").value;

    let Id = document.getElementById("deliveryId").value;
     
    if(name==="" || boy==="" || Id===""){

        alert ("Please fill all fields");

        return;

    }
    if(tracking !== null){
        alert("Delivery is already running!");
        return;
    }

    status.innerText = "Running";
    getLocation();
    tracking = setInterval(() => {
        getLocation();
    }, 10000);

}

function stopDelivery() {

 clearInterval(tracking);

 status.innerText = "Completed";
 
alert("Delivery stoped");
}

function getLocation() {
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        alert("Geolocation is not supported .");
    }
}

function showLocation(position){

    let lat = position.coords.latitude;

    let lon = position.coords.longitude;

    latitude.innerText = lat;
    longitude.innerText  = lon;

    let currentTime = new Date().toLocaleTimeString();

    time.innerText = currentTime;
    historyBody.innerHTML += `
    <tr>
    <td>${currentTime}</td>
    <td>${lat}</td>
    <td>${lon}</td>
    <td>${status.innerText}</td>
    </tr>
    `;
}
