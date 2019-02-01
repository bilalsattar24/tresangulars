import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { peopleData } from './peopleData';

@Component({
  selector: 'app-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css']
})
export class CdpComponent implements OnInit {

  constructor(private sanitizer : DomSanitizer) { }
  @Input() role: string = "ROLE";
  @Input() expectation = "EXPECTATION";
  @Input() category = "CATEGORY";
  @Input() summary = "SUMMARY";
  @Input() number = "NUMBER";
  ngOnInit() {
  }
  
  fins = peopleData;
  selectedFin = '';
  onOpen(data: any) {
    this.selectedFin = data;
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
