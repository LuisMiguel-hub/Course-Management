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
    let currentPath = window.location.pathname.replace(/\/$/, "");
    if (currentPath === "") currentPath = "/"
    let route = routes[currentPath];
    if(!route) {
        history.replaceState({}, "", "/404");
        route = routes["/404"];
    }
    route();
    const actualLink = document.querySelector(`.principal-nav-list-a[href='${currentPath === "/" ? "/dashboard" : currentPath}']`)
    indicatorMove(actualLink);
}

function mostrar(id){
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.style.display = "none";
    })
    console.log("Se habilita sección segun ID")
}