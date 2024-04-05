import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input()
  public placeholder : string = "";

  @Output()
  public OnValue = new EventEmitter<string>();

  public emitirVariable(value : string):void{
    this.OnValue.emit(value);
  }
}
