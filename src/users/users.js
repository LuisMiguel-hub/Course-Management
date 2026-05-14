
function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || [];
}

function getActualUserID(){
    return Number(JSON.parse(localStorage.getItem("actualID")));
}

function updateUsers(users){
    localStorage.setItem("users", JSON.stringify(users));
}

function updateActualUserID(currentUserId){
    localStorage.setItem("actualUser", JSON.stringify(currentUserId));
}

function getCurrentUser(){
    const users = getUsers();
    const currentId = getActualUserID();

    return users.find(u => u.id === currentId) || false;
}

function registerUser(name, username, email, phone, birthdate, password){
    const users = getUsers();

    const exist = users.some(u => u.email === email);
    if(exist) return alert(`An account already exist with this email.
    Change it and create your account.`);

    const newUser = {
        id: Date.now(),
        name: name,
        username: username,
        email: email,
        phone: phone,
        birthdate: birthdate,
        password: password,
        notifications: [],
        deletedNotifications: [],
        settings: {}
    };

    users.push(newUser);
    updateUsers();
    getInside();
}

function loginUser(email, password){
    const users = getUsers();

    const userFound = users.find(u => u.email === email && u.password === password);
    if(userFound) {
        currentUserId = userFound.id;
        updateActualUserID();
        getInside();
    }
}

function getInside(){
    let user = getCurrentUser();
    
    const path = user ? "/" : "/login";

    window.location.href = path;
}