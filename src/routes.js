import { indicatorMove } from "./nav.js";

const routes = {
    "/":  () => mostrar("dashboard"),
    "/dashboard":  () => mostrar("dashboard"),
    "/all-courses": () => mostrar("all-courses"),
    "/messages":  () => mostrar("messages"),
    "/friends":  () => mostrar("friends"),
    "/schedule":  () => mostrar("schedule"),
    "/settings":  () => mostrar("settings"),
    "/directory":  () => mostrar("directory"),
    "/404": () => mostrar("404")
}

export function router() {
    const base = import.meta.env.BASE_URL;

    let currentPath = window.location.pathname;

    if(base !== "/") currentPath = currentPath.replace(base, "");

    currentPath = currentPath.replace(/\/$/, "") || "/";

    if (currentPath === "/") {
        currentPath = "/dashboard"
        history.replaceState({}, "", base + "dashboard");
    }
    
    let route = routes[currentPath];

    if(!route) {
        history.replaceState({}, "", base + "404");
        route = routes["/404"];
        route();
        return
    }

    route();


    const href = currentPath === "/" ? "/dashboard" : currentPath;

    const actualLink = document.querySelector(`.principal-nav-list-a[href='${href}']`);

    if(actualLink){
        indicatorMove(actualLink);
    }
}

function mostrar(id){
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.display = "none";
    })
}