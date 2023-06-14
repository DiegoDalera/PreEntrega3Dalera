class Usuario {
    #password;
    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log('Login Successfully');
            return true;
        } else {
            console.log('Authentication Failed!!');
            return false;
        }
    }

    setPassword(newPassword) {
        this.#password = newPassword;
    }
};




