import { accountRender } from "./render-modal/account/account.js";
import {SecNotificationsRender} from "./render-modal/notifications/notifications.js";
import {navigate, router} from "./../routes.js"

document.addEventListener("click", e => {
    const btn = e.target.closest(("[data-drop-modal]"));
    if(!btn) return;
    
    navigate("/" + btn.dataset.dropModal);
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