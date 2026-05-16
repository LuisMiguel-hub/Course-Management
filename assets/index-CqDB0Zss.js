(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`.overlay`),t=document.querySelector(`.dinamic-modal`),n=document.querySelector(`.principal-nav`);e.classList.add(`hidden`),t.classList.remove(`dinamic-modal-visible`),n.classList.add(`toggle-nav`),setTimeout(()=>{t.innerHTML=``},300)}document.addEventListener(`click`,e=>{(e.target.closest(`.overlay`)||e.target.closest(`.close-modal-account`))&&W(`/`)});function t(){let e=document.querySelector(`.dinamic-modal`);e.classList.remove(`notis-modal`),e.innerHTML=`
        <section class="sect-account">
            <h2>Ł Courses</h2>
            <button class="close-modal-account" aria-label="Cerrar Panel De  Perfil de  cuenta">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="profile-info">
                <div class="img-profile">
                    <input type="file" id="fileInput" accept="image/*">
                    <img class="user-photo" src="https://imgs.search.brave.com/spV2SnKYOCyqt2xeo4e77XWcvByGQ9uSs7geWDeEKxw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS8yNDllYjc2ZDA0/ZTljNWY3N2YxMGU3/YmMxYjNlOTA0ZS4x/MDAweDEwMDB4MS5w/bmc">
                    <button class="img-profile-btn-edit" id="fileBtn">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                </div>
                <div class="name-username-profile">
                    <h2 class="profile-name">Luis Miguel</h2>
                    <span class="profile-username">Papu</span>
                </div>
            </div>
            <div class="principal-edit-profile-div">
                <div class="modificate-info principal-div-profile">
                        <button class="edit-perfil-btn edit" data-type="edit" aria-label="Modificar perfil">
                        Profile information
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button class="edit-personal-info-btn edit" data-type="info" aria-label="Editar información personal">
                        Personal information
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
                <div class="principal-div-profile lob">
                    <button class="log-out-btn" aria-label="Log Out">
                        Log Out
                        <i class="bi bi-chevron-left"></i>
                    </button>
                </div>
            </div>
        </section>`}var n={edit:()=>`
        <div class="edit-container">
            <div class="preview">
                <img class="img-preview" src="https://imgs.search.brave.com/spV2SnKYOCyqt2xeo4e77XWcvByGQ9uSs7geWDeEKxw/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2VuaXVzLmNv/bS8yNDllYjc2ZDA0/ZTljNWY3N2YxMGU3/YmMxYjNlOTA0ZS4x/MDAweDEwMDB4MS5w/bmc" alt="Profile photo">
                <h2 class="name-preview">Luis Miguel</h2>
                <span class="username-preview">(Papu)</span>
            </div>
            <div class="principal-div-profile parameters">
                    <div class="edit-preview edit" data-type="editing" data-mini="1" data-target="Name">
                        <p>Edit name</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <hr>
                    <div class="edit-preview edit" data-type="editing" data-mini="1" data-target="Username">
                        <p>Edit Username</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <hr>
                    <div class="edit-preview edit" data-type="editingPhoto" data-mini="1" data-target="Photo">
                        <p>Edit photo</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
            </div>
        </div>
    `,info:()=>`
            <div class="personal-info">
                <h2>Your personal info</h2>
                <p>This information is very important. <br>Be carefull.</p>
                <div class="edit-personal-info-div prin-div">
                    <div class="edit-email info-edit edit" data-type="editing" data-mini="1" data-target="Email">
                        <p>Edit email</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <hr>
                    <div class="edit-phone info-edit edit" data-type="editing" data-mini="1" data-target="Phone">
                        <p>Edit phone</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>
        `,editing:e=>`
        <div class="editing-profile">
            <h3>Change ${e}</h3>
            <div class="input-box">
                <input type="text" maxlength="20" id="inputChange">
                <span>${e}</span>
            </div>
            <div class="actions">
                <button class="cancel-btn">Cancelar</button>
                <button class="accept-btn">Aceptar</button>
            </div>
        </div>
    `};function r(e,t,r){let i=document.createElement(`div`);if(i.classList.add(`p`),i.classList.add(`panel`),t)i.classList.add(`mini-panel`);else{let e=document.createElement(`button`);e.classList.add(`back-btn`),e.innerHTML=`<i class="bi bi-x-lg"></i>`,i.appendChild(e)}let a=r?n[e](r):n[e]();return i.insertAdjacentHTML(`beforeend`,a),i}function i(){document.addEventListener(`click`,e=>{let t=e.target.closest(`.edit-preview`)||e.target.closest(`.edit`);if(!t)return;let n=t.dataset.type,i=t.dataset.target,a=t.dataset.mini;if(n===`editingPhoto`){s();return}let o=document.querySelector(`.dinamic-modal`),c=r(n,a,i);o.appendChild(c);let l=document.querySelectorAll(`.panel`),u=l[l.length-1];requestAnimationFrame(()=>{u.classList.add(`active`)})})}function a(){let e=document.querySelector(`.p:last-child`);e&&(e.classList.remove(`active`),e.addEventListener(`transitionend`,()=>{e.remove()},{once:!0}))}function o(){document.addEventListener(`click`,e=>{if(e.target.closest(`.back-btn`)||e.target.closest(`.cancel-btn`)){a();return}if(e.target.closest(`.edit`))return;let t=document.querySelector(`.mini-panel:last-child`),n=e.target.closest(`.editing-profile`);t&&!n&&a()})}function s(){document.getElementById(`fileInput`).click()}function c(){document.addEventListener(`click`,e=>{e.target.closest(`#fileBtn`)&&s()})}var l=null;function u(){document.addEventListener(`change`,e=>{let t=e.target.closest(`#fileInput`);if(!t)return;let n=t.files[0];if(!n)return;if(!n.type.startsWith(`image/`)){alert(`Esto no es una imagen, crack, chistoso, te odio :)`);return}if(n.size>2*1024*1024){alert(`La imagen es muy pesada. Bro, mas de 2mb?, ¿WHAT?, no somos la puta nasa🗣️.`);return}let r=document.querySelector(`.user-photo`);r&&(l&&URL.revokeObjectURL(l),l=URL.createObjectURL(n),r.src=l)})}function d(){document.addEventListener(`input`,e=>{let t=e.target.closest(`#inputChange`);if(!t)return;let n=document.querySelector(`.input-box span`);t.value?n.classList.add(`span-move`):n.classList.remove(`span-move`)})}function f(){document.addEventListener(`click`,e=>{e.target.closest(`.log-out-btn`)&&confirm(`¿Do you wanna Log Out?`)})}function p(){c(),u(),d(),i(),o(),f()}p();var m=`/Course-Management/assets/sys-noti-icon-BAbQIEs-.jpg`,h=`data:image/png;base64,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`,g=`/Course-Management/assets/friends-icon-BjojG9dX.webp`,_=`/Course-Management/assets/message-icon-Cr8eDx54.png`;function v(){let e=new Date;return`${e.getHours()%12||0}:${e.getMinutes().toString().padStart(2,`0`)} ${e.getHours()>12?`pm`:`am`}`}var y=[{id:1,type:`System`,message:`Your password was changed successfully.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:2,type:`Courses`,message:`New lesson available in 'Advanced CSS Layouts'.`,img:h,imgalt:`Imagen de notificación de cursos`,time:v(),seen:!1},{id:3,type:`Friends`,message:`Carlos sent you a friend request.`,img:g,imgalt:`Imagen de notificación de amigos`,time:v(),seen:!1},{id:4,type:`System`,message:`Your session will expire in 10 minutes.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:5,type:`Courses`,message:`You completed 'JavaScript Basics'. Nice.`,img:h,imgalt:`Imagen de notificación de cursos`,time:v(),seen:!1},{id:6,type:`Messages`,message:`You have 3 unread messages.`,img:_,imgalt:`Imagen de notificación de mensajes`,time:v(),seen:!1},{id:7,type:`Friends`,message:`Laura is now online.`,img:g,imgalt:`Imagen de notificación de amigos`,time:v(),seen:!1},{id:8,type:`System`,message:`Backup completed successfully.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:9,type:`Courses`,message:`New course added: 'React from Scratch'.`,img:h,imgalt:`Imagen de notificación de cursos`,time:v(),seen:!1},{id:10,type:`Messages`,message:`New message from Andrés.`,img:_,imgalt:`Imagen de notificación de mensajes`,time:v(),seen:!1},{id:11,type:`Friends`,message:`Mateo liked your profile.`,img:g,imgalt:`Imagen de notificación de amigos`,time:v(),seen:!1},{id:12,type:`System`,message:`Security alert: New login detected.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:13,type:`Courses`,message:`Deadline approaching for 'UI Design'.`,img:h,imgalt:`Imagen de notificación de cursos`,time:v(),seen:!1},{id:14,type:`Messages`,message:`Group chat: 5 new messages.`,img:_,imgalt:`Imagen de notificación de mensajes`,time:v(),seen:!1},{id:15,type:`System`,message:`Update available. You should probably install it.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:16,type:`System`,message:`Everything is working perfectly… suspiciously.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1},{id:17,type:`Courses`,message:`You said you'd study today. That was a lie.`,img:h,imgalt:`Imagen de notificación de cursos`,time:v(),seen:!1},{id:18,type:`Friends`,message:`No one is online. Just like your motivation.`,img:g,imgalt:`Imagen de notificación de amigos`,time:v(),seen:!1},{id:19,type:`Messages`,message:`You re-read that message again, didn't you?`,img:_,imgalt:`Imagen de notificación de mensajes`,time:v(),seen:!1},{id:20,type:`System`,message:`No errors detected. Yet.`,img:m,imgalt:`Imagen de notification del sistema`,time:v(),seen:!1}];function b(e,t){localStorage.setItem(`notifications`,JSON.stringify(e)),t&&localStorage.setItem(`deletedNotifications`,JSON.stringify(t)),M()}function x(){return[JSON.parse(localStorage.getItem(`notifications`))||y,JSON.parse(localStorage.getItem(`deletedNotifications`))||[]]}function ee(e){console.log(C);let t=C.find(t=>t.id==e);if(!t)return;w.push({...t,deletedAt:Date.now()});let n=C.filter(t=>t.id!=e);return b(n,w),n}var[te,S]=x(),C=te,w=S;function T(e,t){C=e,w=t}function E(){let e=document.querySelector(`.dinamic-modal`);e.classList.remove(`modal-account`),e.innerHTML=`
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
    `,I(),M(),P(),D(C)}function D(e){let t=document.querySelector(`.notis-content`);t&&(t.innerHTML=`${e.map(e=>`<div class="notification ${e.seen?`seen-noti`:``}" id="n-${e.id}">
                                        <img class="noti-img" src="${e.img}" alt="${e.imgalt}">
                                        <div class="noti-text">
                                            <h3>${e.type}</h3>
                                            <p>${e.message}</p>
                                        </div>
                                        <span class="date-noti">${e.time}</span>
                                        <button class="delete-noti" data-id="${e.id}" aria-label="Borrar Notificción"><i class="bi bi-trash3-fill"></i></button>
                                    </div>`).join(``)}`)}function O(){document.addEventListener(`input`,e=>{let t=e.target.closest(`#searchingInput`);if(!t)return;let n;t.addEventListener(`input`,()=>{clearTimeout(n),n=setTimeout(()=>{D(ne(t.value))},120)})})}function k(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/\s+/g,``)}function A(e,t){e=k(e),t=k(t);let n=0;e.includes(t)&&(n+=3);let r=0;for(let n of e)n===t[r]&&r++;n+=r/t.length*3;for(let r of t)e.includes(r)&&(n+=.5);return n}function ne(e){return k(e)?C.map(t=>({...t,score:A(t.message,e)})).filter(e=>e.score>2).sort((e,t)=>t.score-e.score):C}function re(){let e=document.querySelector(`.clean-search-btn`);e&&e.addEventListener(`click`,()=>{let e=document.getElementById(`searchingInput`);e&&(e.value=``,e.dispatchEvent(new Event(`input`)))})}function j(){let e=0;return C.length?(e=C.filter(e=>!e.seen).length,ie(e),e):0}function ie(e){e===0?document.querySelector(`.notis-btn span`).style.opacity=`0`:document.querySelector(`.notis-btn span`).style.opacity=`1`}function M(){let e=document.querySelector(`.notis-counter`);if(!e)return;let t=j();e.textContent=t>10?`10+`:t}function ae(){document.addEventListener(`click`,e=>{let t=e.target.closest(`.delete-noti`);if(!t)return;let n=document.getElementById(`n-${t.dataset.id}`);n.classList.add(`noti-borrada`);let r=ee(Number(t.dataset.id));r&&(C=r),M(),n.addEventListener(`transitionend`,()=>{n.remove()},{once:!0})})}function N(){document.addEventListener(`click`,e=>{if(e.target.closest(`.delete-noti`))return;let t=e.target.closest(`.notification`);if(!t)return;t.classList.add(`seen-noti`);let n=Number(t.id.replace(`n-`,``)),r=C.find(e=>e.id===n);r&&(r.seen=!0),b(C)})}function P(){let e=Date.now(),t=w.filter(t=>e-t.deletedAt>3e5);if(!t.length){D(C);return}let n=Math.min(Math.floor(Math.random()*10)+1,t.length),r=[...t].sort(()=>Math.random()-.5).slice(0,n);r.forEach(e=>{e.seen=!1,e.time=v();let{deletedAt:t,...n}=e;C.unshift(n)}),w=w.filter(e=>!r.some(t=>t.id==e.id)),D(C),b(C,w),M()}var F=!1;function I(){F||(F=!0,O(),re(),ae(),N())}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-drop-modal]`);t&&W(`/`+t.dataset.dropModal)});function L(e){let n=document.querySelector(`.dinamic-modal`);switch(n.classList.add(`dinamic-modal-visible`),document.querySelector(`.overlay`).classList.remove(`hidden`),e){case`notifications`:n.classList.remove(`account-modal`),n.classList.add(`notis-modal`),E();break;case`account`:n.classList.remove(`notis-modal`),n.classList.add(`account-modal`),t();break}}function R(){document.body.innerHTML=`
        <h1>xd viejo</h1>
    `}function z(){let e=document.querySelector(`#app`);e&&(e.innerHTML=`Dashboard`)}var B=!1;function V(){B||(B=!0,j(),setInterval(()=>{j()},1e4),setInterval(()=>{P()},12e4))}var H={"/":()=>W(`/dashboard`),"/login":()=>R(),"/register":()=>{},"/dashboard":()=>{z(),V()},"/all-courses":()=>void 0,"/messages":()=>void 0,"/friends":()=>void 0,"/schedule":()=>void 0,"/settings":()=>void 0,"/directory":()=>void 0,"/account":()=>{V(),L(`account`)},"/notifications":()=>L(`notifications`),"/404":()=>void 0};function U(){let t=`/Course-Management/`,n=window.location.pathname;t!==`/`&&(n=n.replace(t,``)),n=n.replace(/\/$/,``),n||(n=`/dashboard`,history.replaceState({},``,t+`dashboard`)),n.startsWith(`/`)||(n=`/`+n),[`/account`,`/notifications`].includes(n)||e();let r=H[n];if(!r){history.replaceState({},``,t+`404`),r=H[`/404`],r();return}r();let i=document.querySelector(`.principal-nav-list-a[href='${n}']`);i&&G(i)}function W(e){history.pushState({},``,`/Course-Management/`+e.replace(`/`,``)),U()}window.addEventListener(`popstate`,U);function G(e){let t=document.querySelector(`.nav-indicator`);!e||!t||(t.style.height=`${e.offsetHeight-10}px`,t.style.top=`${e.offsetTop+5}px`,K(e))}function K(e){document.querySelectorAll(`.principal-nav-list-a`).forEach(e=>{e.classList.remove(`active`);let t=e.querySelector(`i`);t&&[...t.classList].forEach(e=>{e.endsWith(`-fill`)&&t.classList.replace(e,e.replace(`-fill`,``))})}),e.classList.add(`active`);let t=e.querySelector(`i`);if(!t)return;let n=[...t.classList].find(e=>e.startsWith(`bi-`)&&!e.endsWith(`-fill`));t.classList.replace(n,n+`-fill`)}function q(e){let t=e.target.closest(`.principal-nav-list-a`);t&&(e.preventDefault(),W(t.pathname))}function J(){let e=document.querySelector(`.principal-nav`);e&&oe(e,e.classList.contains(`toggle-nav`)?`remove`:`add`)}function oe(e,t){document.querySelector(`.overlay`).classList[t](`hidden`),e.classList[t](`toggle-nav`)}var Y=0,X=!1;function se(e){Y=e,X=!0,document.addEventListener(`pointermove`,Z),document.addEventListener(`pointerup`,ce,{once:!0})}function Z(e){if(!X)return;let t=e.clientX-Y,n=Math.min(t,0);document.querySelector(`.principal-nav`).style.transition=`none`,document.querySelector(`.principal-nav`).style.transform=`translateX(${n}px)`}function ce(e){document.querySelector(`.principal-nav`).style.transition=``,document.removeEventListener(`pointermove`,Z),e.clientX-Y<-90?(document.querySelector(`.principal-nav`).style.transform=``,J()):document.querySelector(`.principal-nav`).style.transform=``}var le=new ResizeObserver(()=>{let e=document.querySelector(`.principal-nav-list-a.active`);e&&G(e)});document.addEventListener(`click`,q),document.addEventListener(`click`,e=>{e.target.closest(`.toggle-nav-btn`)&&J()}),document.addEventListener(`pointerdown`,e=>{e.target.closest(`.principal-nav`)&&se(e.clientX)}),le.observe(document.querySelector(`.principal-nav`));var Q=3;function $(){let e=Number(localStorage.getItem(`appVersion`)).toFixed()||1;e<Q&&(ue(e),localStorage.setItem(`appVersion`,Q))}function ue(e){for(;e<Q;)de[e]?.(),e++}var de={1:fe,2:pe};function fe(){T(y,[]),b(C,[])}function pe(){localStorage.removeItem(`Notifications`)}function me(){document.body.innerHTML=`
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
    </div>`}function he(){me(),U(),$()}he();