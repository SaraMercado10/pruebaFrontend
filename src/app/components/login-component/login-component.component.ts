import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
})
export class LoginComponentComponent implements OnInit {

  user: Usuario = new Usuario();
  mostrarAlerta = false;
  returnUrl!: string;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  public login(): void {
    this.loginService.login(this.user.username, this.user.password).subscribe(
      (result) => {
        var usuario = result;
        if (usuario.status == 1) {
          sessionStorage.setItem('user', usuario.username);
          sessionStorage.setItem('userid', usuario.userid);
          sessionStorage.setItem('perfil', usuario.perfil);
          console.log(sessionStorage);
          //this.router.navigateByUrl(this.returnUrl);
        }else{
          this.mostrarAlerta = true;
        }
      },
      (error) => {
        //Mensaje con toastr
        console.log(error);
      }
    );
  }
}
