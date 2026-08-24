import { navigate, router } from "../routes.js";

/* All users */
function getAllUsers(){
    return JSON.parse(localStorage.getItem("users")) || [];
}

function updateAllUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}

/* Actual user */
export function getAuthUser(id){
    const users = getAllUsers();
    return users.find(u => u.id === id) || null;
}

export function updateAuthUser(id, obj){
    const users = getAllUsers();

    const userIndex = users.findIndex(id);

    if(userIndex === -1) return;

    users[userIndex] = {
        ...users[userIndex],
        ...obj
    }

    updateAllUsers(users);
}

/* ID actual user */
export function getActualUserID(){
    return JSON.parse(localStorage.getItem("actUserId")) || "";
}
function updateActualUserID(id){
    localStorage.setItem("actUserId", JSON.stringify(id));
}



/* Login */
export async function login(email, password) {
    const users = getAllUsers();

    const hashedPassword = await hashPassword(password);

    const foundUser = users.find(u => u.email === email && u.password === hashedPassword);
    if(!foundUser) return alert(`Theres no an acount with those credentials.
        Verify correctly the dates or create your account.`);

    updateActualUserID(foundUser.id);

    router();

}


/* Register */
export async function registerUser(name, username, email, phone, password){
    const users = getAllUsers();

    const exist = users.some(u => u.email === email);
    if(exist) return alert(`An account already exist with this email.
    Change it and create your account.`);

    const hashedPassword = await hashPassword(password);

    const newUser = {
        id: Date.now(),
        name: name,
        username: username,
        email: email,
        phone: phone,
        password: hashedPassword,
        notifications: [],
        deletedNotifications: [],
        settings: {}
    }; 

    users.push(newUser);
    updateAllUsers(users);
}


/* Hashear password */
async function hashPassword(password){
    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = [...new Uint8Array(hashBuffer)];

    const hashHex = hashArray
        .map(b => b.toString(16).padStart(2, "0"))
        .join("")
    
    return hashHex;
}


/* Auths */
export function verifyAuth(){
    const authUser = getActualUserID();
    const publicRoutes = ["/login", "/register"];
    const path = window.location.pathname;
    const inAuth = publicRoutes.includes(path);
    if(!authUser){
        if(!inAuth){
            navigate("/login")
            return false;
        }
    }
    if(authUser && inAuth){
        navigate("/dashboard")
        return false;
    }
    return true;
}