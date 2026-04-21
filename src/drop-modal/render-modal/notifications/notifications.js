import "./notifications.css";
import { notifications } from "./notis-list.js";
export function notificationsRender(){
    return(`
        <section class="notifications-sec">
            <div class="notis-header">
                <div class="filter-div">
                    <label for="searching-input">
                        <i class="bi bi-search"></i>
                    </label>
                    <input type="text" id="searching-input">
                    <button id="cleanSearchBtn" class="clean-search-btn" aria-label="Limpiar Input de busqueda de notificaciones">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <span class="notis-counter">9+</span>
            </div>
            <div class="notis-box">
                <h2>Notifications</h2>
                <div class="notis-content">
                    ${
                        notifications.map(n => {
                            return(`<div class="notification" id="n-${n.id}">
                                        <img class="noti-img" src="${n.img}" alt="${n.imgalt}">
                                        <div class="noti-text">
                                            <h3>${n.type}</h3>
                                            <p>${n.message}</p>
                                        </div>
                                        <span class="date-noti">${n.time}</span>
                                        <button class="delete-noti" data-id="${n.id}" aria-label="Borrar Notificción"><i class="bi bi-trash3-fill"></i></button>
                                    </div>`)
                        }).join("")
                    }   
                </div>
            </div>
        </section> 
    `)
}

export function listeners(){
    deleteListener();
}

function deleteListener(){
    document.addEventListener("click", e => {
        const btnD = e.target.closest(".delete-noti");
        if (!btnD) return;
        const noti = document.getElementById(`n-${btnD.dataset.id}`);
        noti.classList.add("noti-borrada");
        document.querySelector(".notification").style.marginBottom = "-10px";
        noti.addEventListener("transitionend", () => {
            document.querySelector(".notification").style.marginBottom = "0px";
            noti.remove();
        }, {once: true})
    })
}