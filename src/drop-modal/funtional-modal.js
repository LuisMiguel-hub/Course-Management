import { accountRender } from "./render-modal/account/account.js";
import {SecNotificationsRender} from "./render-modal/notifications/notifications.js";

const modal = document.querySelector(".dinamic-modal");

export function openModal(e) {
    modal.classList.add("dinamic-modal-visible");
    document.querySelector(".overlay").classList.remove("hidden");
    const content = e.currentTarget.dataset.dropModal;
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