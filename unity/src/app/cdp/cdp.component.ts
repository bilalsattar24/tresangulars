import { Component, OnInit, Input } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css']
})
export class CdpComponent implements OnInit {

  constructor() { }
  @Input() role: string = "ROLE";
  @Input() expectation = "EXPECTATION";
  @Input() category = "CATEGORY";
  @Input() summary = "SUMMARY";
  @Input() number = "NUMBER";
  ngOnInit() {
  }

}
