import "./notifications.css";
import { deleteNotification, getNotifications, notificationsDataBase, updateNotifications } from "./notis-list.js";
let [n, d] = getNotifications();
export let notifications = n;
export let deletedNotifications = d;


export function setNotifications(newN, newND){
    notifications = newN;
    deletedNotifications = newND;
}

export function SecNotificationsRender(){
    const modal = document.querySelector(".dinamic-modal");
    modal.innerHTML = `
        <section class="notifications-sec">
            <div class="notis-header">
                <div class="filter-div">
                    <label for="searchingInput">
                        <i class="bi bi-search"></i>
                    </label>
                    <input type="text" id="searchingInput" placeholder="Busca notificaciones">
                    <button id="cleanSearchBtn" class="clean-search-btn" aria-label="Limpiar Input de busqueda de notificaciones">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <span class="notis-counter"></span>
            </div>
            <div class="notis-box">
                <h2>Notifications</h2>
                <div class="notis-content">
                   
                </div>
            </div>
        </section> 
    `;
    listeners();
    notisCounter();
    spawnNotis();
    notificationsRender(notifications);
}

export function notificationsRender(notis) {
    const notiBox = document.querySelector(".notis-content");
    if(!notiBox) return;

    notiBox.innerHTML = `${
                        notis.map(n => {
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
                    }`
}

function searchListener(){
    const input = document.getElementById("searchingInput");
    if(!input) return;

    let timeout;

    input.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const result = getFilterNotis(input.value);
            notificationsRender(result);
        }, 120)
    })
}

function normalize(str){
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
}

function scoreMatch(text, query){
    text = normalize(text);
    query = normalize(query);

    let score = 0;

    if(text.includes(query)) score += 3;

    let i = 0;
    for (const char of text) {
        if(char === query[i]) i++;
    }
    score += (i / query.length) * 3;

    for (const char of query) {
        if(text.includes(char)) score += 0.5
    }

    return score;
}

function getFilterNotis(query) {
    if (!normalize(query)) return notifications;
    return notifications.map(n => ({
                ...n,
                score: scoreMatch(n.message, query)
            }))
            .filter(n => n.score > 5)
            .sort((a, b) => b.score - a.score)
}

function cleanSearch(){
    const cleanBtn = document.querySelector(".clean-search-btn");
    if(!cleanBtn) return;

    cleanBtn.addEventListener("click", () => {
        const input = document.getElementById("searchingInput");
        if(!input) return;

        input.value = "";

        input.dispatchEvent(new Event("input"));
    })
}

export function counter(){
    let con = 0;

    if (!notifications) return 0;

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

export function notisCounter(){
    const contadorhtml = document.querySelector(".notis-counter");
    if(!contadorhtml) return;

    let con = counter()

    contadorhtml.textContent = con > 10 ? "10+" : con;
}

function deleteListener(){
    document.addEventListener("click", e => {
        const btnD = e.target.closest(".delete-noti");
        if (!btnD) return;

        const noti = document.getElementById(`n-${btnD.dataset.id}`);
        noti.classList.add("noti-borrada");

        const updated = deleteNotification(Number(btnD.dataset.id));
        if(updated) notifications = updated;
        notisCounter();

        noti.addEventListener("transitionend", () => {
            noti.remove();
        }, {once: true})
    })
}

function seenListener(){
    document.addEventListener("click", e => {
        if(e.target.closest(".delete-noti")) return;

        const noti = e.target.closest(".notification");
        if (!noti) return;

        noti.classList.add("seen-noti");

        const id = Number(noti.id.replace("n-", ""));
        const found = notifications.find(n => n.id === id);
        if(found) found.seen = true;

        updateNotifications(notifications);
    })
}

let lready = false;
export function listeners(){
    if(lready) return;
    lready = true;
    searchListener();
    cleanSearch();
    deleteListener();
    seenListener();
}

//SPAWNNN
export function spawnNotis(){
    const now = Date.now();
    const candidates = deletedNotifications.filter(n => (now - n.deletedAt) > 20000);
    if(!candidates.length) {
        notificationsRender(notifications);
        return;
    }

    const amount = Math.min(
        Math.floor(Math.random()*6) + 1,
        candidates.length
    );

    const selected = [...candidates]
    .sort(() => Math.random() - 0.5)
    .slice(0, amount);

    selected.forEach(n => {
        const {deletedAt, ...rest} = n;

        notifications.unshift(rest);
    });

    deletedNotifications = deletedNotifications.filter(n => 
        !selected.some(s => s.id == n.id)
    );
    notificationsRender(notifications);
    updateNotifications(notifications, deletedNotifications);
    notisCounter();
}

notisCounter();