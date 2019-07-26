import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class BrandComponent  {
  @Input() brandName: any;
  @Input() brandLink: any;
  @Input() brandLogo: any;
  @Input() brandDesc: any;

  @Output() removeBrandEvent: EventEmitter<String> = new EventEmitter<String>()
  
  removeBrand(){
    this.removeBrandEvent.emit(this.brandName);
  }
}
