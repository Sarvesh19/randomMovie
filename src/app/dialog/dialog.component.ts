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
name = undefined;
animal = ""
gen :any;
dataSelected: any = {};
votes: Upvotes[] = [
 {value: '500000', viewValue: '500,000'},
   {value: '200000', viewValue: '200,000'},
    {value: '150000', viewValue: '150,000'},
    {value: '100000', viewValue: '100,000'},
    {value: '50000', viewValue: '50,000'},
    {value: '25000', viewValue: '25,000'},
    {value: '10000', viewValue: '10,000'},
    {value: '5000', viewValue: '5,000'},
  
  ];
genre: any = [];
 vote: any = new FormControl('');
  genreList: string[] = ['Crime', 'Thriller', 'Drama', 'Mystery', 'Comedy',  'Family', 'Music' , 'Animation', 'Action', 'Adventure'];
 

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
console.info(data);

  let genTemp: any = localStorage.getItem('genre');

if(data.name !== undefined){
this.genre = data.name.genre;
  this.vote  = data.name.vote;
} else if(localStorage.getItem('genre') !== undefined || localStorage.getItem('vote') !== undefined){
	this.genre = genTemp.split(",");
  this.vote  = localStorage.getItem('vote');
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
    localStorage.setItem('genre', this.genre);
    let temp :[] = [];
    temp = this.genre;
    localStorage.setItem('vote', this.vote);

  	// console.info(this.genre.value+ " " + this.vote.value);
  	    this.dialogRef.close(this.dataSelected);


    
  }


}
