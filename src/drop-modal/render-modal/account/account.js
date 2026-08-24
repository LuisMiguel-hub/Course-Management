import { closeOverlay } from "../../../app renders/overlay/overlay.js";
import { navigate } from "../../../routes.js";
import { getActualUserID, getAuthUser } from "../../../users/users.js";
import "./account.css";

/*RENDERIZADO DE CUENTA */
export function accountRender() {
    const user = getAuthUser(getActualUserID());

    const modal = document.querySelector(".dinamic-modal");
    modal.classList.remove("notis-modal");
    modal.innerHTML = `
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
                    <h2 class="profile-name">${user.name}</h2>
                    <span class="profile-username">${user.username}</span>
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
        </section>`
}





/*CONTENIDO DE PANELES */
let panels = {
    edit: () => {
        return `
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
    `
    },
    info: () => {
        return `
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
        `
    },
    editing: target => {
        return `
        <div class="editing-profile">
            <h3>Change ${target}</h3>
            <div class="input-box">
                <input type="text" maxlength="20" id="inputChange">
                <span>${target}</span>
            </div>
            <div class="actions">
                <button class="cancel-btn">Cancelar</button>
                <button class="accept-btn">Aceptar</button>
            </div>
        </div>
    `
    }
}





/* CREACION Y RENDERIZADO DE PANELES */
function createPanel(type, mini, target){
    const panel = document.createElement("div");
    panel.classList.add("p")
    panel.classList.add("panel");

    if(!mini){
        const bkBtn = document.createElement("button");
        bkBtn.classList.add("back-btn");
        bkBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;
        panel.appendChild(bkBtn);
    } else {
        panel.classList.add("mini-panel");
    }

    const html = target 
                    ? panels[type](target)
                    : panels[type]();

    panel.insertAdjacentHTML("beforeend", html);

    return panel;
}





/* APERTURA DE PANELES */
function principalGoPanel(){
    document.addEventListener("click", e => {
        const btn = e.target.closest(".edit-preview") || e.target.closest(".edit");
        if(!btn) return;

        const type = btn.dataset.type;
        const target = btn.dataset.target;
        const mini = btn.dataset.mini;

        if(type === "editingPhoto"){
            photoInputClick();
            return;
        }

        const modal = document.querySelector(".dinamic-modal");
        const newPanel = createPanel(type, mini, target);
        modal.appendChild(newPanel);
        
        const panelsF = document.querySelectorAll(".panel");
        const lastPanel = panelsF[panelsF.length - 1];

        requestAnimationFrame(() => {
            lastPanel.classList.add("active");
        })
    })
}





/* CIERRE DE PANELES */
function closePanel(){
    const panel = document.querySelector(".p:last-child");
    if(!panel) return;
    panel.classList.remove("active");
    
    panel.addEventListener("transitionend", () => {
        panel.remove();
    },{once: true})
}

function backPanel(){
    document.addEventListener("click", e => {
        const btn = e.target.closest(".back-btn") || e.target.closest(".cancel-btn");
        if(btn){
            closePanel();
            return;
        }

        const openedMiniPanel = e.target.closest(".edit") 
        if(openedMiniPanel) return;

        const miniPanel = document.querySelector(".mini-panel:last-child");
        const div = e.target.closest(".editing-profile");

        if(miniPanel && !div){
            closePanel();
        }
    })
}





/* CAMBIO DE FOTO DE PERFIL */
function photoInputClick(){
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
}
function changeImgProfile(){
    document.addEventListener("click", e => {
        const editBtn = e.target.closest("#fileBtn");
        if(!editBtn) return;

        photoInputClick();
    })
}
let currentURL = null;
function selectProfileImg(){
    document.addEventListener("change", e => {
        const input = e.target.closest("#fileInput");
        if(!input) return;

        const file = input.files[0];
        if(!file) return; 

        if(!file.type.startsWith("image/")){
            alert("Esto no es una imagen, crack, chistoso, te odio :)");
            return;
        }

        if(file.size > 2 * 1024 * 1024){
            alert("La imagen es muy pesada. Bro, mas de 2mb?, ¿WHAT?, no somos la puta nasa🗣️.");
            return;
        }

        const imgHTML = document.querySelector(".user-photo");
        if(!imgHTML) return;

        if(currentURL){
            URL.revokeObjectURL(currentURL);
        }
        
        currentURL = URL.createObjectURL(file);

        imgHTML.src = currentURL;
    })
}





/* MOVIEMIENTO DEL SPAN EN LOS INPUTS DE EDICIÓN */
function spanMove(){
    document.addEventListener("input", e => {
        const input = e.target.closest("#inputChange");
        if(!input) return;

        const span = document.querySelector(".input-box span");

        if(!input.value){
            span.classList.remove("span-move");
        } else {
            span.classList.add("span-move");
        }
    })
}





/* CERRAR SESIÓN */
function logout(){
    document.addEventListener("click", e => {
        const loBtn = e.target.closest(".log-out-btn");
        if(!loBtn) return;

        const reallyGo = confirm("¿Do you wanna Log Out?");

        if(reallyGo){
            navigate("/login");
        }
    })
}





/* LISTENERS DE FUNCIONALIDADES DE LA SECCION DE CUENTA */
function listenersAccount(){
            changeImgProfile();
            selectProfileImg();
            spanMove();
            principalGoPanel();
            backPanel();
            logout();
}
/* Inicialización de listeners */
listenersAccount();