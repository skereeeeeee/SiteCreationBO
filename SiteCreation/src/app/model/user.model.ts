
export class LoginUser {
    email: string;
    password: string;

    constructor() {
        this.email = '';
        this.password = '';
    }
}

export class User{
    username: string;
    token: string;
    azienda: string;
    nome: string;
    cognome: string;
    sito: string;

    constructor() {
        this.username = '';
        this.token = '';
        this.azienda = '';
        this.nome = '';
        this.cognome = '';
        this.sito = '';
    }
}
