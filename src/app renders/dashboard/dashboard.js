import { openModal } from "../../drop-modal/funtional-modal.js";
import { counter, spawnNotis } from "../../drop-modal/render-modal/notifications/notifications.js";
import { closeOverlay } from "../overlay/overlay.js";





/* DASH RENDER */
export function dashboardRender(){
    const layout = document.querySelector("#app");
    if(!layout) return;

    layout.innerHTML = `<section class="dashboard-section"><h1>Dashboard</h1></section>`;
}





/* EXISTE DASHBOARD? RENDERIZARLO O NO? */
export function dashboardExist(){
    return document.querySelector("dashboard-section");
}





/* SISTEMAS Y DEPSNDENCIAS DE DASHBOARD */
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