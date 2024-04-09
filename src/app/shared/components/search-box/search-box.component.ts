import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer : Subject<string> = new Subject<string>();

  private debouncerSuscription ?: Subscription;

  @Input()
  public placeholder : string = "";

  @Input()
  public valueInit : string = "";

  @Output()
  public OnValue = new EventEmitter<string>();

  @Output()
  public OnDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription = 
    this.debouncer.pipe(debounceTime(300)).subscribe(respuesta => {this.OnDebounce.emit(respuesta)})
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  public emitirVariable(value : string):void{
    this.OnValue.emit(value);
  }

  public onKeyPress(searchTerm : string){
    console.log(searchTerm);
    this.debouncer.next(searchTerm);    
  }
}
