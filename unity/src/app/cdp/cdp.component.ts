import { Component, OnInit, Input } from '@angular/core';

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
