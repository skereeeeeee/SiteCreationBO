export class LoginUser {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class NewsLetterModel {
  id: number;
  email: string;
  codice_sconto: string;
  codice_sconto_usato: boolean;
  constructor() {
    this.id = -1;
    this.email = '';
    this.codice_sconto = '';
    this.codice_sconto_usato = false;
  }
}

export class SendMailModel {
  subject: string = "";
  body: string = "";
}

export class AdminGet {
  id: number;
  email: string;
  nome: string;
  cognome: string;

  constructor() {
    this.id = 0;
    this.email = '';
    this.nome = '';
    this.cognome = '';
  }
}

export class AdminSend {
  email: string;
  nome: string;
  cognome: string;
  password: string;

  constructor() {
    this.email = '';
    this.nome = '';
    this.cognome = '';
    this.password = '';
  }
}

export class AdminSendWMail extends AdminSend {
  id: number = -1

}


export class User {
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
