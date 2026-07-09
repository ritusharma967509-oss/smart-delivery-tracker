const companyName = document.getElementById("companyName");
const deliveryBoy = document.getElementById("deliveryBoy");
const deliveryId = document.getElementById("deliveryId");
const status = document.getElementById("status");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const time = document.getElementById("time");
const historyBody = document.getElementById("historyBody");

// Tracking variable
let tracking = null;

// Start Delivery
function startDelivery() {
    let name = companyName.value;
    let boy = deliveryBoy.value;
    let id = deliveryId.value;

    if (name === "" || boy === "" || id === "") {
        alert("Please fill all fields.");
        return;
    }

    if (tracking !== null) {
        alert("Delivery is already running!");
        return;
    }

    status.innerText = "Running";

    getLocation();

    tracking = setInterval(() => {
        getLocation();
    }, 10000);
}

// Stop Delivery
function stopDelivery() {
    if (tracking !== null) {
        clearInterval(tracking);
        tracking = null;
    }

    status.innerText = "Completed";
    alert("Delivery Stopped");
}

// Get Current Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Show Location
function showLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    latitude.innerText = lat;
    longitude.innerText = lon;

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

// Error Handler
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;
        case error.TIMEOUT:
            alert("Location request timed out.");
            break;
        default:
            alert("Unknown error occurred.");
    }
}
