export function closeOverlay() {

    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".dinamic-modal");
    const nav = document.querySelector(".principal-nav");

    overlay.classList.add("hidden");
    modal.classList.remove("dinamic-modal-visible");
    nav.classList.add("toggle-nav");

    setTimeout(() => {
        modal.innerHTML = "";
    }, 300);
}