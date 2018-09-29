
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lgj-button',
  templateUrl: './lgj-button.component.html',
  styleUrls: ['./lgj-button.component.scss']
})
export class LgjButtonComponent implements OnInit {

  @Input() textoDoBotao: string;
  @Input() myColor: String;
  @Output() clickRetorno: EventEmitter<any> = new EventEmitter;


  constructor() { }

  ngOnInit() {

  }

  clickDoComponent() {
    console.log('teste');
    this.clickRetorno.emit(null);
  }

}
