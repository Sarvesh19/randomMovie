import { Component } from '@angular/core';
import {RandomMovie} from './random.service';


export interface PeriodicElement {
  image: string;
  title: string;
  genre: string;
  detail: string;
  stars: string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	dataSource:any = [];
	starRating : any = 4;
	loading : boolean = true;
 displayedColumns: string[] = [ 'image','title', 'weight', 'symbol'];
 // dataSource = ELEMENT_DATA;

constructor(private appService: RandomMovie) {
	this.loading  = true;
	this.initUserList();

}

  initUserList() {
  		this.loading  = true;
    this.appService.getRandomMovie().subscribe(response => {
    	this.loading  = false;
      this.dataSource = response;
    });
  }

  goto(title : string){
  	let url : string  = "https://www.google.com/search?q="+title;
    window.open(url, "_blank");

  }
}
