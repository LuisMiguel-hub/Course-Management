import "./style.css"
import { showSections, slideToggleNav, toogleNav } from "./nav.js";
import { router } from "./routes.js";
import { observer } from "./nav.js";
import { openModal } from "./drop-modal/funtional-modal.js";
import { closeOverlay } from "./overlay.js";
import { counter } from "./drop-modal/render-modal/notifications/notifications.js";
import { syncStorage } from "./migrations/migrations.js";
syncStorage();
router();

document.addEventListener("click", showSections);
window.addEventListener("popstate", router);
document.querySelector(".overlay").addEventListener("click", closeOverlay);
document.querySelectorAll(".toggle-nav-btn").forEach(ele => {ele.addEventListener("click", toogleNav);});
document.querySelector(".principal-nav").addEventListener("pointerdown", slideToggleNav);
observer.observe(document.querySelector(".principal-nav"));
document.querySelectorAll("[data-drop-modal]").forEach(btn => btn.addEventListener("click", openModal));
counter();