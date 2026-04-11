import "./style.css"
import { showSections, slideToggleNav, toogleNav } from "./nav.js";
import { router } from "./routes.js";
import { observer } from "./nav.js";
router();

document.addEventListener("click", showSections);
window.addEventListener("popstate", router);
document.querySelector(".overlay").addEventListener("click", toogleNav);
document.querySelectorAll(".toggle-nav-btn").forEach(ele => {
    ele.addEventListener("click", toogleNav);
});
document.querySelector(".principal-nav").addEventListener("pointerdown", slideToggleNav);
observer.observe(document.querySelector(".principal-nav"));