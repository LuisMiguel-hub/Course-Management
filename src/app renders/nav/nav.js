import { navigate, router } from "../../routes.js";
import { closeOverlay, openOverlay, updateOverlay } from "../overlay/overlay.js";

export function indicatorMove(link){
    const navIndicator = document.querySelector(".nav-indicator");
    if(!link || !navIndicator) return;
    navIndicator.style.height = `${link.offsetHeight - 10}px`;
    navIndicator.style.top = `${link.offsetTop + 5}px`;
    resaltCurrentIconNav(link)
}





export function resaltCurrentIconNav(link){
    const allLinks = document.querySelectorAll(".principal-nav-list-a");
    allLinks.forEach(l => {
        l.classList.remove("active");
        const i = l.querySelector("i");
        if(!i) return;
        [...i.classList].forEach(cls => {
            if(!cls.endsWith("-fill"))return;
            i.classList.replace(cls, cls.replace("-fill", ""))
        })
    });
    link.classList.add("active");
    const i = link.querySelector("i");
    if(!i) return;
    const baseClass = [...i.classList].find(cls => cls.startsWith("bi-") && !cls.endsWith("-fill"));
    i.classList.replace(baseClass, baseClass + "-fill");
}





export function showSections(e) {
    const classCss = ".principal-nav-list-a";
    const link = e.target.closest(classCss);
    if (!link) return;
    e.preventDefault();
    navigate(link.pathname);
    navOpened();
}






export function navOpened(){
    const nav = document.querySelector(".principal-nav");
    nav.classList.remove("nav-closed");
}

export function navClosed(){
    const nav = document.querySelector(".principal-nav");
    nav.classList.add("nav-closed");
}





let startX = 0;
let isDrawing = false;
export function slideToggleNav(e){
    startX = e;
    isDrawing = true;
    document.addEventListener("pointermove", slideToggleNavMove);
    document.addEventListener("pointerup", slideToggleNavEnd, {once: true});
}

function slideToggleNavMove(e){
    if(!isDrawing) return;
    const diff = e.clientX - startX;
    const clamped = Math.min(diff, 0);
    document.querySelector(".principal-nav").style.transition = "none";
    document.querySelector(".principal-nav").style.transform = `translateX(${clamped}px)`;
}

function slideToggleNavEnd(e){
    document.querySelector(".principal-nav").style.transition = "";
    document.removeEventListener("pointermove", slideToggleNavMove);
    const diff = e.clientX - startX;
    if(diff < -90){
        document.querySelector(".principal-nav").style.transform = "";
        toggleNav();
    } else {
        document.querySelector(".principal-nav").style.transform = "";
    }
}





export const observer = new ResizeObserver(() => {
    const active = document.querySelector(".principal-nav-list-a.active");
    active && indicatorMove(active);
})



function toggleNav(){
    const nav = document.querySelector(".principal-nav");
    if(nav.classList.contains("nav-closed")){
        navOpened();
    } else {
        navClosed();
    }
    updateOverlay()
}



document.addEventListener("click", showSections);
document.addEventListener("click", e => {
    const tnBtn = e.target.closest(".toggle-nav-btn");
    if(!tnBtn) return;
    toggleNav();
})
document.addEventListener("pointerdown", e => {
    const nav = e.target.closest(".principal-nav");
    if(!nav) return;
    slideToggleNav(e.clientX);
})
observer.observe(document.querySelector(".principal-nav"));