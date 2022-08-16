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
 displayedColumns: string[] = [ 'image','title', 'weight', 'symbol'];
 // dataSource = ELEMENT_DATA;

constructor(private appService: RandomMovie) {
	this.initUserList();

}

  initUserList() {
    this.appService.getRandomMovie().subscribe(response => {
      this.dataSource = response;
    });
  }
}
