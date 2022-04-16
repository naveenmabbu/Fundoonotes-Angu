import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
notelist:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }
  getallnotes(){
    this.note.getallnotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res;
      this.notelist = this.notelist.filter((object: any) => {
        return object.isArchive === false && object.isTrash === false;
      
    })
    console.log(this.notelist);
  })
  }
  receiveEvent($event: any) {
    this.getallnotes();
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes");
    this.getallnotes()
  }
  updatedData(value: any) {

    this.getallnotes();
  }

}
