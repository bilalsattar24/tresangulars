import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
    @Input() title = "";
    @Input() visible = false;
    @Input() data;
    @Output() opened = new EventEmitter<any>();
    toggle() {
        if (!this.visible) {
            this.opened.emit(this.data);
        }
    }
}