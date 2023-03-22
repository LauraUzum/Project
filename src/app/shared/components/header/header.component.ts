import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// toogleSideBar: any;

@Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  toogleSideBar() { 
    this.toogleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
      },300);
  }

}
