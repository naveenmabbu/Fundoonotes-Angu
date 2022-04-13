import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from 'src/app/service/noteservice/note.service';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() createToGetAllNotes = new EventEmitter<string>()
  takenote!:NgForm;

  public notelist :boolean=false;
  description:string = ""
  title:string=""
  reminder:string="2022-04-11T11:27:12.305Z"
  color:string="red"
  image:string="image1.jpg"
  isarchive:boolean=false;
  ispin:boolean=false;
  istrash:boolean=false;
  createdAt:any="2022-04-11T11:27:12.305Z"
  modifiedAt:any="2022-04-11T11:27:12.305Z"

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  noteClick(){
    
    this.notelist = true
    
  }
  noteClose(){
    
    this.notelist = false
    console.log(this.title, this.description);
    if((this.title==null||this.title=="") && (this.description==null||this.description=="")){
      console.log("values are null");
    }
    else{
    let data={
      title: this.title,
      description:this.description,
      reminder: this.reminder,
      color: this.color,
      image: this.image,
      isTrash: this.istrash,
      isArchive: this.isarchive,
      isPinned: this.ispin,
      createdAt: this.createdAt,
      modifiedAt: this.modifiedAt
    }
    this.noteService.createnote(data).subscribe((res:any)=>{
      console.log(res);
      this.createToGetAllNotes.emit(res);
    })
  }
}

}
