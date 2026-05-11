import { closeOverlay } from "../../../overlay.js";
import "./account.css";
export function accountRender() {
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
                    <h2 class="profile-name">Luis Miguel</h2>
                    <span class="profile-username">Papu</span>
                </div>
            </div>
            <div class="principal-edit-profile-div">
                <div class="modificate-info principal-div-profile">
                        <button class="edit-perfil-btn edit" data-type="edit" aria-label="Modificar perfil">
                        Edit profile
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button class="edit-personal-info-btn edit" data-type="info" aria-label="Editar información personal">
                        Edit Personal Info
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
                <div class="principal-div-profile">
                    <button class="edit" data-type="settings" aria-label="Configuraciones de perfil">
                        Settings
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

let listenersInd = false;
function listenersAccount(){
    if(!listenersInd){
        closeProfile();
        goPanel();
        backPanelBtn();
        changeImgProfile();
        selectProfileImg();
        goMiniPanel();
        spanMove();
        closeMiniPanel();
    }
    listenersInd = true;
}

function closeProfile(){
    document.addEventListener("click", e => {
        const modal = document.querySelector(".dinamic-modal");
        const btnClose = e.target.closest(".close-modal-account");
        if(btnClose){
            closeOverlay();
            setTimeout(() => {
                modal.innerHTML = "";
            }, 300);
        }
    })
}

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
                    <div class="edit-preview" data-type="editing" data-target="Name">
                        <p>Edit name</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <hr>
                    <div class="edit-preview" data-type="editing" data-target="Username">
                        <p>Edit Username</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
                    <hr>
                    <div class="edit-preview" data-type="editing" data-target="Photo">
                        <p>Edit photo</p>
                        <i class="bi bi-chevron-right"></i>
                    </div>
            </div>
        </div>
    `
    },
    info: ``,
    settings: ``,
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

function createPanel(type, mini = false, target){
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
    panel.innerHTML += panels[type](type == "editing" ? target : "");
    return panel;
}

function goPanel(){
    document.addEventListener("click", e => {
        const btn = e.target.closest(".edit");
        if(!btn) return;

        const type = btn.dataset.type;

        const modal = document.querySelector(".dinamic-modal");
        modal.appendChild(createPanel(type));

        requestAnimationFrame(() => {
            document.querySelector(".panel:last-child").classList.add("active");
        });
    });
}

function backPanel(){
    const panel = document.querySelector(".p:last-child");
    if(!panel) return;

    panel.classList.remove("active");
    
    panel.addEventListener("transitionend", () => {
        panel.remove();
    },{once: true})
}

function backPanelBtn(){
    document.addEventListener("click", e => {
        const bkBtn = e.target.closest(".back-btn") || e.target.closest(".cancel-btn");
        if(!bkBtn) return;

        backPanel();
    })
}

function changeImgProfile(){
    document.addEventListener("click", e => {
        const editBtn = e.target.closest("#fileBtn");
        if(!editBtn) return;
        const fileInput = document.getElementById("fileInput");
        fileInput.click()
    })
}

function selectProfileImg(){
    document.addEventListener("change", e => {
        const input = e.target.closest("#fileInput");
        if(!input) return;

        const file = input.files[0];
        if(!file) return; 

        if(!file.type.startsWith("image/")){
            alert("Esato no es una imagen, crack, chistoso, te odio. :)");
            return;
        }

        if(file.size > 2 * 1024 * 1024){
            alert("La imagen es muy pesada. Bro, mas de 2mb, no somos la puta nasa.");
            return;
        }

        const imageURL = URL.createObjectURL(file);
        const imgHTML = document.querySelector(".user-photo");
        if(!imgHTML) return;
        imgHTML.src = imageURL;
    })
}

function goMiniPanel(){
    document.addEventListener("click", e => {
        const btn = e.target.closest(".edit-preview");
        if(!btn) return;

        const type = btn.dataset.type;
        const target = btn.dataset.target;

        const modal = document.querySelector(".dinamic-modal");
        const mini = type == "editing" ? true : false;
        modal.appendChild(createPanel(type, mini, target));

        requestAnimationFrame(() => {
            document.querySelector(".panel:last-child").classList.add("active");
        });
    })
}

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

function closeMiniPanel(){
    document.addEventListener("click", e => {
        const miniPanel = e.target.closest(".mini-panel:last-child");
        const div = e.target.closest(".editing-profile");
        if(miniPanel && !div){
            backPanel();
        }
    })
}

listenersAccount();