document.addEventListener("DOMContentLoaded", () => {
    const openWindowButtons = document.querySelectorAll(".open-window");
    const closeWindowButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");

    openWindowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const window = document.getElementById(button.dataset["windowTarget"]);
            openWindow(window, overlay);
        });
    });

    closeWindowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const window = button.closest(".window");
            closeWindow(window, overlay);
        });
    });

    overlay.addEventListener("click", () => {
        const windows = document.querySelectorAll(".window.active");
        windows.forEach(window => closeWindow(window, overlay));
    })
})

function openWindow(window, overlay) {
    if (window == null) return;
    window.classList.add("active");
    overlay.classList.add("active");
}

function closeWindow(window, overlay) {
    if (window == null) return;
    window.classList.remove("active");
    overlay.classList.remove("active");
}

