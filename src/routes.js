import { openModal } from "./drop-modal/funtional-modal.js";
import { accountRender } from "./drop-modal/render-modal/account/account.js";
import { loginrender } from "./login-register/login/login.js";
import { indicatorMove, openCloseNav } from "./app renders/nav/nav.js";
import { closeOverlay } from "./app renders/overlay/overlay.js";
import { dashboardRender, initDashboardSystems } from "./app renders/dashboard/dashboard.js";
const routes = {
    "/":  () => navigate("/dashboard"),
    "/login": () => loginrender(),
    "/register": () => {},
    "/dashboard":  () => {
        dashboardRender();
        initDashboardSystems();
    },
    "/all-courses": () => mostrar("all-courses"),
    "/messages":  () => mostrar("messages"),
    "/friends":  () => mostrar("friends"),
    "/schedule":  () => mostrar("schedule"),
    "/settings":  () => mostrar("settings"),
    "/directory":  () => mostrar("directory"),
    "/account": () => {
        initDashboardSystems();
        openModal("account")
    },
    "/notifications": () => openModal("notifications"),
    "/404": () => mostrar("404")
}

export function router() {
    const base = import.meta.env.BASE_URL;
    let currentPath = window.location.pathname;

    if(base !== "/") currentPath = currentPath.replace(base, "");
    currentPath = currentPath.replace(/\/$/, "");

    if (!currentPath) {
        currentPath = "/dashboard"
        history.replaceState({}, "", base + "dashboard");
    }

    if(!currentPath.startsWith("/")){
        currentPath = "/" + currentPath;
    }

    const modalRoutes = ["/account", "/notifications"]
    if(!modalRoutes.includes(currentPath)){
        closeOverlay();
    }

    let route = routes[currentPath];

    if(!route) {
        history.replaceState({}, "", base + "404");
        route = routes["/404"];
        route();
        return;
    }

    route();

    const actualLink = document.querySelector(`.principal-nav-list-a[href='${currentPath}']`);
    if(actualLink){
        indicatorMove(actualLink);
    }
}

export function navigate(path){
    const base = import.meta.env.BASE_URL;
    history.pushState({}, "", base + path.replace("/", ""));
    router();
}

function mostrar(id){
    
}






window.addEventListener("popstate", router);