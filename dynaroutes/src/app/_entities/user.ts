export class User {
    username: string;
    password: string;
    role: string;

    constructor(username: string, password: string, role: string){
        this.role = role;
        this.username = username;
        this.password = password;
    }
}