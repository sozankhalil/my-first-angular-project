import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
sidebarList:any[] = [
  {
    text:'home',
    icon:'https://www.svgrepo.com/show/111256/house.svg',
    routelink:'/dashboard/details'

  },
  {
    text:'inventory',
    icon:'https://cdn.iconscout.com/icon/premium/png-256-thumb/inventory-management-1959041-1652762.png',
    routelink:'/dashboard/details'

  },
  {
    text:'Report',
    icon:'https://www.svgrepo.com/show/58402/report.svg',
    routelink:'/dashboard/details'

  },
  {
    text:'Setting',
    icon:'https://www.svgrepo.com//show/13688/settings.svg',
    routelink:'/dashboard/details'

  },
  {
    text:'home',
    icon:'https://www.svgrepo.com/show/111256/house.svg',
    routelink:'/dashboard/details'

  },
  {
    text:'inventory',
    icon:'https://cdn.iconscout.com/icon/premium/png-256-thumb/inventory-management-1959041-1652762.png',
    routelink:'/dashboard/details'

  },
  {
    text:'Report',
    icon:'https://www.svgrepo.com/show/58402/report.svg',
    routelink:'/dashboard/details'

  },
  {
    text:'Setting',
    icon:'https://www.svgrepo.com//show/13688/settings.svg',
    routelink:'/dashboard/details'

  },
  
];
sidebar:boolean = true;
isExpand:boolean = false;
expandSidebar() {
  this.isExpand = !this.isExpand;
  this.sidebar=!this.sidebar;
}
isSidebar(){
  this.sidebar =!this.sidebar
}
ngOnInit(): void {
   
}

}
