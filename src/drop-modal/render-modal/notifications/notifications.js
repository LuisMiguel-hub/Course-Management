import "./notifications.css"
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
                </div>
            </div>
        </section> 
    `)
}