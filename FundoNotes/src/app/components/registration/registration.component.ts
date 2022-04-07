import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    console.log("inside submit", this.registerForm.value);
    if(this.registerForm.invalid){
      
      console.log("invalid data");
    }
    else{
      console.log("u have entered valid data");
      let data={
        FirstName:this.registerForm.value.firstname,
        LastName:this.registerForm.value.lastname,
        Email:this.registerForm.value.email,
        Password:this.registerForm.value.password


      }
      this.userservice.register(data).subscribe((res:any)=> {
        console.log(res);
        
      })
      
    }

  }

}

