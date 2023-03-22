import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
Sevent: any;

  constructor() { }

  ngOnInit() { }

  sideBarToogler(event: Event): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
