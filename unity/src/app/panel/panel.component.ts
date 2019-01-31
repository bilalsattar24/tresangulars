import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
