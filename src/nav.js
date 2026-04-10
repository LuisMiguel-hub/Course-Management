import { router } from "./routes.js";

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
    const base = import.meta.env.BASE_URL;
    const url = base + link.pathname.replace("/", "");
    history.pushState({}, "", url)
    router();
}

export function toogleNav(){
    const nav = document.querySelector(".principal-nav");
    if(!nav) return;
    nav.classList.toggle("toggle-nav");
    document.body.classList.toggle("full-body");
    const navCls = nav.classList.contains("toggle-nav")
    document.querySelector("[aria-label='Abrir Nav']").style.display = !navCls ? "none" : "flex";
}

export const observer = new ResizeObserver(() => {
    const active = document.querySelector(".principal-nav-list-a.active");
    active && indicatorMove(active);
})