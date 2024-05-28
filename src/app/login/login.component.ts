import { Component } from '@angular/core';
import { FormsModule, 
  ReactiveFormsModule, 
  UntypedFormBuilder, 
  UntypedFormGroup, 
  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:UntypedFormGroup
  user:any={
    username:'alper',
    password:'123123'
  }

  constructor(
    private formBuilder:UntypedFormBuilder,
    private router:Router
  ){
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      let formData = Object.assign({}, this.loginForm.value)

      if(formData.username!=this.user.username){
        alert("Kullanıcı adı hatalı")
        return
      }
      if(formData.password!=this.user.password){
        alert("Şifre hatalı")
        return
      }

      
      localStorage.setItem("isLogin","true")
      alert("Kullanıcı doğrulaması başarılı")

      this.router.navigate(['/veriler'])


      console.log("Formdan Gelenler",this.loginForm.value)
    }
    else{
      alert("boş bırakılamaz")
    }
  }


}
