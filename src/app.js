import { observer } from "./app renders/nav/nav.js";
import { router } from "./routes.js";"./routes.js";
import "./drop-modal/funtional-modal.js";
import "./app renders/overlay/overlay.js";
import "./drop-modal/render-modal/notifications/notifications.js";
import {syncStorage} from "./migrations/migrations.js";
import { initDashboardSystems } from "./app renders/dashboard/dashboard.js";

export function initApp(){
    router();
    syncStorage();
    initDashboardSystems();
}