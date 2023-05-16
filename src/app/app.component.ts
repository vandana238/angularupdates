import { Component } from '@angular/core';
import { StudentStandAloneComponent } from './student-stand-alone/student-stand-alone.component';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[StudentStandAloneComponent]
})
export class AppComponent {
  title = 'Angulardemo';
  data: any;
  constructor(){

  }
}
