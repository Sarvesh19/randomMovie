import { Component,Inject } from '@angular/core';
import {RandomMovie} from './random.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';

export interface PeriodicElement {
  image: string;
  title: string;
  genre: string;
  detail: string;
  stars: string
}
export interface DialogData {
  animal: string;
  name: string;
}

// @Ratan1973 heroku 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	dataSource:any = [];
	starRating : any = 4;
	loading : boolean = true;
	animal: string = "";
  name: any = {};
 displayedColumns: string[] = [ 'image','title', 'weight', 'symbol'];
 // dataSource = ELEMENT_DATA;

constructor(private appService: RandomMovie,public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
	this.loading  = true;
	this.initUserList();

}

  initUserList() {
  		this.loading  = true;
    this.appService.getRandomMovie(this.name).subscribe(response => {
    	this.loading  = false;
      this.dataSource = response;
    });
  }

  goto(title : string){
  	let url : string  = "https://www.google.com/search?q="+title;
    window.open(url, "_blank");

  }

   openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
    	
      console.log('The dialog was closed');
      this.name = result;
      console.info(this.name);
    	this.loading  = true;
    	if(this.name == undefined){
    		this.name = {};
		this.name.genre = localStorage.getItem('genre');
    // let temp :[] = [];
    // temp = this.genre;
    this.name.vote = localStorage.getItem('vote');
    	}
      this.appService.getRandomMovie(this.name).subscribe(response => {
    	this.loading  = false;
      this.dataSource = response;
    });

    });
  }
 onNoClick(): void {
    this.dialogRef.close();
  }

}
