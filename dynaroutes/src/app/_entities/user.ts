export class User {
    username: string;
    password: string;
    role: string;
    tenant: string;

    constructor(username: string, password: string, role: string, tenant: string){
        this.username = username;
        this.password = password;
        this.role = role;
        this.tenant = tenant;
    }
}