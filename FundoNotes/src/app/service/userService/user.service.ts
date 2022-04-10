import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  register(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService("https://localhost:44351/api/User/Register",data,false,header)

  }
  login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService("https://localhost:44351/api/User/Login",data,false,header)
  }
  forgot(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService("https://localhost:44351/api/User/ForgetPassword?email="+data.email,{},false,header)
  }
  reset(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.e30.'
        
      })
    }
    return this.httpservice.putService("https://localhost:44351/api/User/ResetPassword",data,true,header)
  }
}
