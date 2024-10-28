import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent {
  password : string = "";
  isPWshow : boolean = false;
  @Output() customEvent = new EventEmitter<string>();
  
  toggleShow(){
    this.isPWshow = ! this.isPWshow;
  }

  getPassword(event: any) {
    this.password = event.target.value;
    this.customEvent.emit(this.password);
  }

}
