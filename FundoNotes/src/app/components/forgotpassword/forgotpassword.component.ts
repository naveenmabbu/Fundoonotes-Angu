import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    console.log("inside submit", this.forgotForm.value);
    if(this.forgotForm.invalid){
      
      console.log("invalid data");
    }
    else{
      console.log("u have entered valid data");
      let data={
        email:this.forgotForm.value.email
      }
      this.userservice.forgot(data).subscribe((res:any)=> {
        console.log(res);
        
      })
      
    }

  }

}
