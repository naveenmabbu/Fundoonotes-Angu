import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseURL=environment.baseUrl

  constructor(private http:HttpClient) { }
  postService(url:string,data:any,token:boolean=false,httpoptions:any){
    console.log("print values",data);
    
    return this.http.post(this.BaseURL+url,data,token && httpoptions)
  }
  getService(url:string,token:boolean=false,httpoptions:any){
    
    
    return this.http.get(this.BaseURL+url, token && httpoptions)

  }
  putService(url:string,data:any,token:boolean=false,httpoptions:any){
    return this.http.put(this.BaseURL+url,data,token && httpoptions)
  }
  deleteService(){

  }


}
