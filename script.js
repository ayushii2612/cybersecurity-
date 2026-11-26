let active = false;
let secure = true;
let exposed = false;
let sessionId = "Not generated";

function log(message) {
    const item = document.createElement("li");
    item.textContent = new Date().toLocaleTimeString() + " - " + message;

    const logs = document.getElementById("logs");
    logs.prepend(item);
}

function updateDashboard() {
    document.getElementById("status").textContent =
        active ? "Active" : "Inactive";

    document.getElementById("mode").textContent =
        secure ? "Secure" : "Risk Simulation";

    document.getElementById("alert").textContent =
        exposed ? "Exposure Alert" : "None";

    document.getElementById("session").textContent = sessionId;

    document.getElementById("state").textContent =
        active ? "Active" : "Inactive";
}

function login() {
    if (active) {
        log("A demo session is already active.");
        return;
    }

    sessionId = "DEMO-" + Math.random()
        .toString(36).slice(2, 10).toUpperCase();

    active = true;
    exposed = false;

    log("Demo user logged in.");
    log("A fictional session label was generated.");

    updateDashboard();
}

function exposure() {
    if (!active) {
        log("No active demo session to simulate.");
        return;
    }

    exposed = true;

    log("WARNING: Simulated session exposure detected.");
    log("No real session data was accessed.");

    updateDashboard();
}

function secureSession() {
    secure = true;
    exposed = false;

    log("Security controls applied in the simulation.");
    log("Session protection and monitoring enabled.");

    updateDashboard();
}

function expireSession() {
    if (!active) {
        log("No active session to expire.");
        return;
    }

    active = false;
    exposed = false;
    sessionId = "Expired";

    log("Demo session expired.");
    updateDashboard();
}

function logout() {
    active = false;
    exposed = false;
    sessionId = "Revoked";

    log("User logged out.");
    log("Demo session invalidated.");

    updateDashboard();
}

updateDashboard();