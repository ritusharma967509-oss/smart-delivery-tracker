// Elements
const companyName = document.getElementById("companyName");
const deliveryBoy = document.getElementById("deliveryBoy");
const deliveryId = document.getElementById("deliveryId");
const status = document.getElementById("status");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const time = document.getElementById("time");
const historyBody = document.getElementById("historyBody");

// Tracking Variable
let tracking = null;

// Start Delivery
function startDelivery() {
    const name = companyName.value.trim();
    const boy = deliveryBoy.value.trim();
    const id = deliveryId.value.trim();

    if (!name || !boy || !id) {
        alert("Please fill all fields.");
        return;
    }

    if (tracking !== null) {
        alert("Delivery is already running.");
        return;
    }

    status.innerText = "Running";

    // Get location immediately
    getLocation();

    // Update every 10 seconds
    tracking = setInterval(getLocation, 10000);
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

// Get Location
function getLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        showLocation,
        showError,
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// Show Location
function showLocation(position) {
    const lat = position.coords.latitude.toFixed(6);
    const lon = position.coords.longitude.toFixed(6);
    const currentTime = new Date().toLocaleTimeString();

    latitude.innerText = lat;
    longitude.innerText = lon;
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

// Error Handling
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Location permission denied.");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("Location information unavailable.");
            break;

        case error.TIMEOUT:
            alert("Location request timed out.");
            break;

        default:
            alert("Unknown location error.");
    }

    console.error(error);
}
