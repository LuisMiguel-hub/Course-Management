import { router } from "./routes.js";

export function indicatorMove(link){
    const currentLink = link;
    const navIndicator = document.querySelector(".nav-indicator");
    if(currentLink){
        const valuesUbiA = currentLink.getBoundingClientRect();
        const parentRect = currentLink.offsetParent.getBoundingClientRect();
        navIndicator.style.left = "-10px"
        navIndicator.style.height = `${valuesUbiA.height + 10}px`;
        navIndicator.style.top = `${valuesUbiA.top - parentRect.top - 10/2}px`;
    }
    resaltCurrentIconNav(link)
}

export function resaltCurrentIconNav(link){
}

export function showSections(e) {
    const classCss = ".principal-nav-list-a";
    const link = e.target.closest(classCss);
    if (!link) return;
    e.preventDefault();
    const base = import.meta.env.BASE_URL;
    const url = base + link.pathname.replace("/", "");
    history.pushState({}, "", url)
    router();
}