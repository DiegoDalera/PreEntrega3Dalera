class User {

    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.password) {
            console.log('Login correcto');
            return true;
        } else {
            console.log('login incorrecto');
            return false;
        }
    }

    setPassword(newPassword) {
        this.password = newPassword;
    }
};
