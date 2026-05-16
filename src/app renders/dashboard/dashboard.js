import { openModal } from "../../drop-modal/funtional-modal.js";
import { counter, spawnNotis } from "../../drop-modal/render-modal/notifications/notifications.js";
import { closeOverlay } from "../overlay/overlay.js";

export function dashboardRender(){
    const layout = document.querySelector("#app");
    if(!layout) return;

    layout.innerHTML = "Dashboard";
}

let systemActive = false;
export function initDashboardSystems(){
    if(systemActive) return;
    systemActive = true;
    counter();
    setInterval(() => {
        counter();
    }, 10000);
    setInterval(() => {
        spawnNotis();
    }, 120000);
}

