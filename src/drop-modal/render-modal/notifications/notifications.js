import "./notifications.css";
import { deleteNotification, getNotifications, notificationsDataBase, updateNotifications } from "./notis-list.js";
export let notifications = getNotifications() || notificationsDataBase;
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
                <span class="notis-counter"></span>
            </div>
            <div class="notis-box">
                <h2>Notifications</h2>
                <div class="notis-content">
                    ${
                        notifications.map(n => {
                            return(`<div class="notification ${n.seen ? "seen-noti" : ""}" id="n-${n.id}">
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
    seenListener();
    notisCounter();
}

function deleteListener(){
    document.addEventListener("click", e => {
        const btnD = e.target.closest(".delete-noti");
        if (!btnD) return;

        const noti = document.getElementById(`n-${btnD.dataset.id}`);
        noti.classList.add("noti-borrada");

        notifications = deleteNotification(btnD.dataset.id);

        noti.addEventListener("transitionend", () => {
            noti.remove();
        }, {once: true})

    })
}

function seenListener(){
    document.addEventListener("click", e => {
        const noti = e.target.closest(".notification");
        const isDeleteBtn = e.target.closest(".delete-noti");
        if(noti && !isDeleteBtn){
            noti.classList.add("seen-noti");
            notifications.forEach((n) => {
                if(n.id === Number(noti.id.replace("n-", ""))){
                    n.seen = true;
                }
            });
            updateNotifications(notifications);
        }
    })
}

export function notisCounter(){
    const contadorhtml = document.querySelector(".notis-counter");
    if(!contadorhtml) return;

    let con = counter()

    contadorhtml.textContent = con > 10 ? "10+" : con;
    
}

export function counter(){
    let con = 0;

    notifications.forEach(n => {
        if(!n.seen) con++
    });

    if (con == 0){
        document.querySelector(".notis-btn span").style.display = "none";
    } else {
        document.querySelector(".notis-btn span").style.display = "";
    }

    return con;
}