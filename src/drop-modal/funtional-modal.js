import { accountRender } from "./render-modal/account/account.js";
import { listeners, notificationsRender, SecNotificationsRender, spawnNotis } from "./render-modal/notifications/notifications.js";

const modal = document.querySelector(".dinamic-modal");

export function openModal(e) {
    modal.classList.add("dinamic-modal-visible");
    document.querySelector(".overlay").classList.remove("hidden");
    const content = e.currentTarget.dataset.dropModal;
    switch (content) {
        case "notifications":
            SecNotificationsRender();
            spawnNotis();
            break;
        case "account":
            accountRender();
            break;
    }
}