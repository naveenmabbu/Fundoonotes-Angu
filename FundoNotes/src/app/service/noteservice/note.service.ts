import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  title: any;

  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
   }

   createnote(data:any){
    console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token 
     })
   }
   return this.httpService.postService('Notes/Create',data,true,header)
  }

  getallnotes(){
    console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token 
     })
   }
   return this.httpService.getService('Notes/GetAllNotes',true,header)

  }
  updatenote(data:any,id:any){
    console.log("token",this.token);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer  ${this.token}`
      })
  }
  return this.httpService.putService("Notes/Update"+id, data, true, header)
}
  trashnotes(id:any){
    console.log("token",this.token);

  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
        'Authorization':`Bearer  ${this.token}`
    })
  }
  return this.httpService.putService("Notes/Trashed?noteId="+id,{},true,header)
  }

archiveNotes(id:any){

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${this.token}`		
      })

    }
    return this.httpService.putService("Notes/Archived?noteId="+id,{},true,headersOption)
  }
  ColorNote(id:any, data:any){

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${this.token}`		
      })

    }
    return this.httpService.putService("Notes/Colour?noteId="+id,data,true,headersOption)
  }

}
