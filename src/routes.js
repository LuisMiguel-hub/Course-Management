import { closeModal, openModal } from "./drop-modal/funtional-modal.js";
import { accountRender } from "./drop-modal/render-modal/account/account.js";
import { loginRender } from "./login-register/login/login.js";
import { indicatorMove } from "./app renders/nav/nav.js";
import { closeOverlay, isNavOpen } from "./app renders/overlay/overlay.js";
import { dashboardExist, dashboardRender, initDashboardSystems } from "./app renders/dashboard/dashboard.js";
import { verifyAuth } from "./users/users.js";





const routes = {
    "/":  () => navigate("/dashboard"),

    "login": () => loginRender(),

    "register": () => {},

    "dashboard":  () => {
        dashboardRender();
    },

    "all-courses": () => mostrar("all-courses"),

    "messages":  () => mostrar("messages"),

    "friends":  () => mostrar("friends"),

    "schedule":  () => mostrar("schedule"),

    "settings":  () => mostrar("settings"),

    "directory":  () => mostrar("directory"),

    "account": () => {
        openModal("account");
    },

    "notifications": () => {
        openModal("notifications");
    },

    "404": () => mostrar("404")
}





export function router() {

    if(!verifyAuth()) return;

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

    const segments = currentPath
        .split("/")
        .filter(Boolean)

    const authRoutes = ["login", "register"];
    const inAuth = segments.some(seg => authRoutes.includes(seg));

    document.body.className = inAuth ? "auth-mode" : "app-mode";


    const overlayRoutes = ["account", "notifications"];
    const hasOverlay = segments.some(seg => overlayRoutes.includes(seg))

    if(!hasOverlay){
        closeModal();
        isNavOpen();
    }

    const invalid = segments.some(seg => !routes[seg])

    if(invalid){
        history.replaceState({}, "", base + "404");
        const route = routes["404"];
        route();
        return;
    }

    segments.forEach(seg => {
        routes[seg]();
    })

    const actualLink = document.querySelector(`.principal-nav-list-a[href='${"/" + segments[0]}']`);
    if(actualLink){
        indicatorMove(actualLink);
    }
}





export function navigate(path, mode = "push"){
    const base = import.meta.env.BASE_URL;

    if(path?.startsWith("/")){
        history.pushState({}, "", base + path.slice(1))
        router();
        return;
    }

    const actPath = window.location.pathname
        .replace(base, "")
        .split("/")
        .filter(Boolean)

    mode === "pop"
        ? actPath.pop()
        : actPath.push(path.replace("/", ""));


    const newPath = base + actPath.join("/");

    history.pushState({}, "", newPath);

    router()
}





function mostrar(id){
    
}





window.addEventListener("popstate", router);