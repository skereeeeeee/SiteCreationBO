
export class LoginUser {
    username: string;
    password: string;

    constructor() {
        this.username = '';
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
