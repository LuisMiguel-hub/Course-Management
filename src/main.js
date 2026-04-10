import "./style.css"
import { showSections, toogleNav } from "./nav.js";
import { router } from "./routes.js";
import { observer } from "./nav.js";
router();

document.addEventListener("click", showSections);
window.addEventListener("popstate", router);
document.querySelectorAll(".toggle-nav-btn").forEach(ele => {
    ele.addEventListener("click", toogleNav);
})
observer.observe(document.querySelector(".principal-nav"));