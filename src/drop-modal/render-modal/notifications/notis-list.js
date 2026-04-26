import sysimg from "../../../assets/Notifications imgs/sys-noti-icon.jpg";
import courseicon from "../../../assets/Notifications imgs/course-icon.png";
import frindsicon from "../../../assets/Notifications imgs/friends-icon.webp";
import messageicon from "../../../assets/Notifications imgs/message-icon.png";
import { deletedNotifications, notifications, notisCounter } from "./notifications.js";

function time(){
  const date = new Date();
  return(`${date.getHours() == 0 ? 12 : date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "pm" : "am"}`)
}

export const notificationsDataBase = [
  {
    id: 1,
    type: "System",
    message: "Your password was changed successfully.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },
  {
    id: 2,
    type: "Courses",
    message: "New lesson available in 'Advanced CSS Layouts'.",
    img: courseicon,
    imgalt: "Imagen de notificación de cursos",
    time: time(),
    seen: false
  },
  {
    id: 3,
    type: "Friends",
    message: "Carlos sent you a friend request.",
    img: frindsicon,
    imgalt: "Imagen de notificación de amigos",
    time: time(),
    seen: false
  },
  {
    id: 4,
    type: "System",
    message: "Your session will expire in 10 minutes.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },
  {
    id: 5,
    type: "Courses",
    message: "You completed 'JavaScript Basics'. Nice.",
    img: courseicon,
    imgalt: "Imagen de notificación de cursos",
    time: time(),
    seen: false
  },
  {
    id: 6,
    type: "Messages",
    message: "You have 3 unread messages.",
    img: messageicon,
    imgalt: "Imagen de notificación de mensajes",
    time: time(),
    seen: false
  },
  {
    id: 7,
    type: "Friends",
    message: "Laura is now online.",
    img: frindsicon,
    imgalt: "Imagen de notificación de amigos",
    time: time(),
    seen: false
  },
  {
    id: 8,
    type: "System",
    message: "Backup completed successfully.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },
  {
    id: 9,
    type: "Courses",
    message: "New course added: 'React from Scratch'.",
    img: courseicon,
    imgalt: "Imagen de notificación de cursos",
    time: time(),
    seen: false
  },
  {
    id: 10,
    type: "Messages",
    message: "New message from Andrés.",
    img: messageicon,
    imgalt: "Imagen de notificación de mensajes",
    time: time(),
    seen: false
  },
  {
    id: 11,
    type: "Friends",
    message: "Mateo liked your profile.",
    img: frindsicon,
    imgalt: "Imagen de notificación de amigos",
    time: time(),
    seen: false
  },
  {
    id: 12,
    type: "System",
    message: "Security alert: New login detected.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },
  {
    id: 13,
    type: "Courses",
    message: "Deadline approaching for 'UI Design'.",
    img: courseicon,
    imgalt: "Imagen de notificación de cursos",
    time: time(),
    seen: false
  },
  {
    id: 14,
    type: "Messages",
    message: "Group chat: 5 new messages.",
    img: messageicon,
    imgalt: "Imagen de notificación de mensajes",
    time: time(),
    seen: false
  },
  {
    id: 15,
    type: "System",
    message: "Update available. You should probably install it.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },

  // 💀 humor negro sutil

  {
    id: 16,
    type: "System",
    message: "Everything is working perfectly… suspiciously.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  },
  {
    id: 17,
    type: "Courses",
    message: "You said you'd study today. That was a lie.",
    img: courseicon,
    imgalt: "Imagen de notificación de cursos",
    time: time(),
    seen: false
  },
  {
    id: 18,
    type: "Friends",
    message: "No one is online. Just like your motivation.",
    img: frindsicon,
    imgalt: "Imagen de notificación de amigos",
    time: time(),
    seen: false
  },
  {
    id: 19,
    type: "Messages",
    message: "You re-read that message again, didn't you?",
    img: messageicon,
    imgalt: "Imagen de notificación de mensajes",
    time: time(),
    seen: false
  },
  {
    id: 20,
    type: "System",
    message: "No errors detected. Yet.",
    img: sysimg,
    imgalt: "Imagen de notification del sistema",
    time: time(),
    seen: false
  }
];

export function updateNotifications(n, dn){
    localStorage.setItem("Notifications", JSON.stringify(n));
    if(dn)localStorage.setItem("deletedNotifications", JSON.stringify(dn));
    notisCounter();
}

export function getNotifications(){
    let notis = localStorage.getItem("Notifications");
    let Dnotis = localStorage.getItem("deletedNotifications");
    notis = JSON.parse(notis);
    Dnotis = JSON.parse(Dnotis);
    return[notis, Dnotis];
}

export function deleteNotification(id){
    const found = notifications.find(n => n.id == id);
    if(!found) return;
    deletedNotifications.push({
        ...found,
        deletedAt: Date.now()
    });
    const actualiced = notifications.filter(n => n.id != id);
    updateNotifications(actualiced, deletedNotifications);
    return actualiced;
}