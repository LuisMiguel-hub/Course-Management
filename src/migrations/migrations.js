import { deletedNotifications, notifications, setNotifications } from "../drop-modal/render-modal/notifications/notifications.js";
import { notificationsDataBase, updateNotifications } from "../drop-modal/render-modal/notifications/notis-list.js";

const CURRENT_VERSION = 2;

export function syncStorage(){
    const savedVersion = Number(localStorage.getItem("appVersion")) || 1;

    if(savedVersion < CURRENT_VERSION){
        runMigration(savedVersion);
        localStorage.setItem("appVersion", CURRENT_VERSION);
    }
}

function runMigration(current){
    while(current < CURRENT_VERSION){
        migrations[current]?.();
        current++
    }
}

const migrations = {
    1: migrateTo2
}

function migrateTo2(){
    setNotifications(notificationsDataBase, []);
    updateNotifications(notifications, deletedNotifications);
}