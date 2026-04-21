import { accountRender } from "./render-modal/account/account.js";
import { listeners, notificationsRender } from "./render-modal/notifications/notifications.js";

const modal = document.querySelector(".dinamic-modal");

export function openModal(e) {
    modal.classList.add("dinamic-modal-visible");
    document.querySelector(".overlay").classList.remove("hidden");
    const content = e.currentTarget.dataset.dropModal;
    modal.innerHTML = "";
    switch (content) {
        case "notifications":
            modal.innerHTML = notificationsRender();
            listeners();
            break;
        case "account":
            accountRender();
            break;
    }
}