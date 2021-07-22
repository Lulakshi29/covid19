import { Component } from '@angular/core';
import { isConstructorDeclaration } from 'typescript';
import { CovidService } from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';
  data:any;

constructor(private covidService: CovidService){ 
  this.getDataFromAPI();
}

public getDataFromAPI() {
  this.covidService.getData().subscribe(
    (res) => {
     
      this.data=res;
      console.log(this.data);
    },
    (err) => {
      console.log(err);
    }

  );

}}