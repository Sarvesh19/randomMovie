import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

interface Upvotes {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})


export class DialogComponent implements OnInit {
name = "";
animal = ""
gen :any;
dataSelected: any = {};
votes: Upvotes[] = [
 {value: '500000', viewValue: '500,000'},
    {value: '100000', viewValue: '100,000'},
    {value: '50000', viewValue: '50,000'},
    {value: '10000', viewValue: '10,000'},
  ];
genre = [];
 vote = new FormControl('');
  genreList: string[] = ['Crime', 'Drama', 'Mystery', 'Comedy',  'Family', 'Music' , 'Animation', 'Action', 'Adventure'];
 

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
console.info(data);
if(data.name !== ""){
this.genre = data.name.genre;
  this.vote  = data.name.vote;
}
  
  }
  ngOnInit(): void {
  }
openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

   onNoClick(): void {
    this.dialogRef.close();
  }
  foo(){
  	this.dataSelected.genre = this.genre;
  	  	this.dataSelected.vote = this.vote;

  	// console.info(this.genre.value+ " " + this.vote.value);
  	    this.dialogRef.close(this.dataSelected);


    
  }


}
