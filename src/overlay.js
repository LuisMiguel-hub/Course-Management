export function closeOverlay() {
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".dinamic-modal").classList.remove("dinamic-modal-visible");
    document.querySelector(".principal-nav").classList.add("toggle-nav")
}