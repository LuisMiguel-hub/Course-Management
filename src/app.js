import "./app renders/nav/nav.js";
import { router } from "./routes.js";"./routes.js";
import "./drop-modal/funtional-modal.js";
import "./app renders/overlay/overlay.js";
import "./drop-modal/render-modal/notifications/notifications.js";
import {syncStorage} from "./migrations/migrations.js";

function renderApp(){
    document.body.innerHTML = `
    <div class="overlay hidden"></div>
    <div class="dinamic-modal"></div>
    <nav class="principal-nav toggle-nav">
        <div class="nav-indicator"></div>
        <div class="principal-nav-up">  
            <div class="nav-header">
                <button class="toggle-nav-btn" aria-label="Cerrar Nav">
                    <i class="bi bi-layout-sidebar"></i>
                </button>
                <a href=""  class="logo-nav">
                    <img src="src/assets/logo.png" alt="Page Logo">
                </a>
            </div>
            <ul class="principal-nav-list">
                <li class="principal-nav-list-item">
                    <a class="principal-nav-list-a" href="/dashboard">
                        <i class="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="principal-nav-list-item">
                    <a class="principal-nav-list-a" href="/all-courses">
                        <i class="bi bi-folder"></i>
                        <span>All Courses</span>
                    </a>
                </li>
                <li class="principal-nav-list-item">
                    <a class="principal-nav-list-a" href="/messages">
                        <i class="bi bi-chat-dots"></i>
                        <span>Messages</span>
                    </a>
                </li>
                <li class="principal-nav-list-item">
                    <a class="principal-nav-list-a" href="/friends">
                        <i class="bi bi-people"></i>
                        <span>Friends</span>
                    </a>
                </li>
                <li class="principal-nav-list-item">
                    <a class="principal-nav-list-a" href="/schedule">
                        <i class="bi bi-file-text" style="transform: rotateZ(180deg) rotateY(180deg);"></i>
                        <span>Schedule</span>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="principal-nav-list">
            <li class="principal-nav-list-item">
                <a class="principal-nav-list-a" href="/settings">
                    <i class="bi bi-gear"></i>
                    <span>Settings</span>
                </a>
            </li>
            <li class="principal-nav-list-item">
                <a class="principal-nav-list-a" href="/directory">
                    <i class="bi bi-info-square"></i>
                    <span>Directory</span>
                </a>
            </li>
        </ul>
    </nav>
    <div class="layout">
        <header class="header nav-active">
            <div class="header-menu">
                <button class="toggle-nav-btn" aria-label="Abrir Nav">
                    <i class="bi bi-layout-sidebar-inset"></i>
                </button>
                <h1>Ł Courses</h1>
                </div>
            <div class="header-actions">
                <button class="notis-btn" id="notis-btn" data-drop-modal="notifications" aria-label="Abrir notificaciones">
                    <i class="bi bi-bell-fill"></i>
                    <span></span>
                </button>
                <button class="account-btn" data-drop-modal="account" aria-label="Abrir cuenta">
                    <img src="https://imgs.search.brave.com/spV2SnKYOCyqt2xeo4e77XWcvByGQ9uSs7geWDeEKxw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS8yNDllYjc2ZDA0/ZTljNWY3N2YxMGU3/YmMxYjNlOTA0ZS4x/MDAweDEwMDB4MS5w/bmc" alt="">
                </button>
            </div>
        </header>
        <main id="app"></main>
    </div>`
}

export function initApp(){
    renderApp();
    router();
    syncStorage();
}