import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  postService(url:string,data:any,token:boolean=false,httpoptions:any){
    return this.http.post(url,data,token && httpoptions)
  }
  getService(){

  }
  putService(url:string,data:any,token:boolean=false,httpoptions:any){
    return this.http.put(url,data,token && httpoptions)
  }
  deleteService(){

  }


}
