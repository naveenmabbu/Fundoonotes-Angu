import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    console.log("inside submit", this.resetForm.value);
    if(this.resetForm.invalid){
      
      console.log("invalid data");
    }
    else{
      console.log("u have entered valid data");
      let data={
        password:this.resetForm.value.password,
        conformPassword:this.resetForm.value.confirm
      }
      this.userservice.reset(data).subscribe((res:any)=> {
        console.log(res);
        
      })
      
    }
    

  }


}
