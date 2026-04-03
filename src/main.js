import "./style.css"
import { showSections } from "./nav.js";
import { router } from "./routes.js";
router();

document.addEventListener("click", showSections);
window.addEventListener("popstate", router);