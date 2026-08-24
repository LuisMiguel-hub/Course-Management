import { navigate } from "../../routes.js";
import { navClosed } from "../nav/nav.js";

export function closeOverlay() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("hidden");
}

export function openOverlay(){
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("hidden");
}


export function updateOverlay(){
    const overlay = document.querySelector(".overlay");

    overlay.classList.toggle("hidden")
}
    


export function isNavOpen(){
    const overlay = document.querySelector(".overlay");
    const nav = document.querySelector(".principal-nav");

    if(!nav.classList.contains("nav-closed")){
        overlay.classList.remove("hidden")
        navClosed()
    } else {
        overlay.classList.add("hidden")
    }
}