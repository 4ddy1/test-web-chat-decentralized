// log("Hello world!");
var b = Bugout("bittorrent-tracker", {announce: ["wss://bit-tracker.herokuapp.com/"]});
b.on("seen", function (address) { log(address + " [ anybody ]"); });
log(b.address() + "[ me ]");

b.on("message", function (address, message) {
    log(address + ": " + message);
});

document.getElementById("input").onkeyup = function (ev) {
    if (ev.key == "Enter") {
        b.send(ev.target.textContent);
        ev.target.textContent = "";
        ev.preventDefault();
    }
}
