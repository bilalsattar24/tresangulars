import { Component } from '@angular/core';
import {dummyCDPS } from "./cdp/CDP";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'unity';
  cdps = dummyCDPS;
}
