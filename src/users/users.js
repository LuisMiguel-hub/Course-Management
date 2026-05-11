let users = [];
let currentUserId;

function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || [];
}

function getActualUser(){
    return Number(JSON.parse(localStorage.getItem("actualUser")));
}

function updateUsers(){
    localStorage.setItem("users", JSON.stringify(users));
}

function updateActualUser(){
    localStorage.setItem("actualUser", JSON.stringify(currentUserId));
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

    const userFound = users.some(u => u.email === email && u.password === password);
    if(exist) {
        currentUserId = userFound.id;
        updateActualUser();
        getInside();
    }
}

function getInside(){
    window.location.href = "";
}