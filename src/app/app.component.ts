import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mainService } from './core/services/main-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicked = false;
  constructor(private elementRef: ElementRef) {

  }
  onClickMenu(e:any) {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('active');  
    this.clicked = !this.clicked
  }
}