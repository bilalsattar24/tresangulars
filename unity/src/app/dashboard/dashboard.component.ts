import { Component, OnInit } from '@angular/core';
import { dummyCDPS } from "../cdp/CDP";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cdps = dummyCDPS;

  constructor() { }

  ngOnInit() {
  }

}
