import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string = ''

  @Input()
  public initialValue:string = ''

  @Output()
  public valueInput:EventEmitter<string>= new EventEmitter();

  searchBox( term:string ){
    this.valueInput.emit( term );
  }
}
