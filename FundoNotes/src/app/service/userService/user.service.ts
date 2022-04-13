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
    return this.httpservice.postService("User/Register",data,false,header)

  }
  login(data:any){
    console.log("print values",data);
    
    let header = {
      
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService("User/Login",data,false,header)
  }
  forgot(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpservice.postService("User/ForgetPassword?email="+data.email,{},false,header)
  }
  reset(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJKYW1lc3BldGVyNjU0QGdtYWlsLmNvbSIsIklkIjoiMjciLCJleHAiOjE2NDk3ODQ5MTB9.puInuaUHZSAnOquft5M--wEDhbBNL1GjbT17LK_SETQ'
        
      })
    }
    return this.httpservice.putService("User/ResetPassword",data,true,header)
  }
}
