import { router } from "./routes.js";
export function indicatorMove(link, indicator){
    const currentLink = link || document.querySelector(`a[href='${indicator}'][class="principal-nav-list-a"]`);
    const navIndicator = document.querySelector(".nav-indicator");
    console.log(currentLink)
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
    console.log("In procces")
}

export function showSections(e) {
    const classCss = ".principal-nav-list-a";
    const link = e.target.closest(classCss);
    if (!link) return;
    e.preventDefault();
    const url = link.getAttribute("href");
    history.pushState({}, "", url);
    router();
}