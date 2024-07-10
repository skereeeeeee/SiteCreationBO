import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginUser, User } from '../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login/login-service.service';
import { ModalServiceService } from '../services/modal-service.service';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;

  constructor(private formBuilder: FormBuilder, private loginService: LoginServiceService, private auth: AuthServiceService, private modalService: ModalServiceService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {

    if(this.auth.isAuthenticated())
      {
        window.location.href = '/Prodotti';
      }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      var user: LoginUser =
      {
        email : this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      let logged = await this.loginService.login(user)

      if(logged == "false"){
        this.modalService.openErrorModal("Credenziali errate.")
      } else {
        var jwt = jwtDecode(logged);
        localStorage.setItem("jwtToken", jwt.toString())
        localStorage.setItem("token", logged)
        this.router.navigate(['/Prodotti']);
        this.modalService.openSuccessModal("Ciao, verrai rediretto alla pagina principale.")
      }
    }
  }

}
