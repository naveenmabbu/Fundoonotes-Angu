import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg: any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();
  col: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
     width: '250px',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed'); 
      this.noteUpdated.emit(result);
     });
  }
  operation(value: any) {
     this.noteUpdated.emit(value);
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}



