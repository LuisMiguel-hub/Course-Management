import { accountRender } from "./render-modal/account/account.js";
import {SecNotificationsRender} from "./render-modal/notifications/notifications.js";
import {navigate, router} from "./../routes.js"
import { closeOverlay } from "../app renders/overlay/overlay.js";
import { navClosed } from "../app renders/nav/nav.js";

document.addEventListener("click", e => {
    const btn = e.target.closest(("[data-drop-modal]"));
    if(!btn) return;
    
    navigate(btn.dataset.dropModal);
});

export function openModal(content) {
    const modal = document.querySelector(".dinamic-modal");

    modal.classList.add("dinamic-modal-visible");

    document.querySelector(".overlay").classList.remove("hidden");

    switch (content) {
        case "notifications":
            modal.classList.remove("account-modal");    
            modal.classList.add("notis-modal");
            SecNotificationsRender();
            break;
            
        case "account":
            modal.classList.remove("notis-modal");
            modal.classList.add("account-modal");
            accountRender();
            break;
    }
}


export function closeModal(){
    const modal = document.querySelector(".dinamic-modal");
    modal.classList.remove("dinamic-modal-visible");
    
    setTimeout(() => {
        modal.innerHTML = "";
    }, 300);
}
document.addEventListener("click", e => {
    const cierre = e.target.closest(".overlay") || e.target.closest(".close-modal-account");
    if(!cierre) return;
    
    const modal = document.querySelector(".dinamic-modal");
    if(modal.classList.contains("dinamic-modal-visible")){
        closeModal();
    }
    
    closeOverlay();
    
    const nav = document.querySelector(".principal-nav");
    if(!nav.classList.contains("nav-closed")){
        navClosed();
        return;
    };

    navigate("", "pop");
})