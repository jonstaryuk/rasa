function el(id) {
    return document.getElementById(id)
}

document.addEventListener("DOMContentLoaded", () => {
    loadOptions()

    el("enableClock").addEventListener("click", saveOptions)
    el("color").addEventListener("keypress", (e) => {
        if (e.keyCode === 13) { // enter key
            saveOptions()
        }
    })
})

function loadOptions() {
    chrome.storage.sync.get({
        clockEnabled: true,
        color: "",
    }, (opt) => {
        el("enableClock").checked = opt.clockEnabled
        el("color").value = opt.color
    })
}

function saveOptions() {
    console.log("hello")
    chrome.storage.sync.set({
        clockEnabled: el("enableClock").checked,
        color: el("color").value,
    }, () => {
        const status = el("status")
        status.textContent = "Saved"
        status.style.opacity = 1
        setTimeout(() => {
            status.style.opacity = 0
        }, 2000)
    })
}
