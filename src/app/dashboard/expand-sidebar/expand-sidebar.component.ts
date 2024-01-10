import { Component } from '@angular/core';

@Component({
  selector: 'app-expand-sidebar',
  templateUrl: './expand-sidebar.component.html',
  styleUrl: './expand-sidebar.component.css'
})
export class ExpandSidebarComponent {
  sidebarList:any[] = [
    {
      text:'home',
      icon:'https://www.svgrepo.com/show/111256/house.svg',
      routelink:'/dashboard/details'
    },
    {
      text:'inventory',
      icon:'https://cdn.iconscout.com/icon/premium/png-256-thumb/inventory-management-1959041-1652762.png',
      routerlink:'/dashboard/details'
    },
    {
      text:'Report',
      icon:'https://www.svgrepo.com/show/58402/report.svg',
      routerlink:'/dashboard/details'
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
      routerlink:'/dashboard/details'
    },
    {
      text:'Report',
      icon:'https://www.svgrepo.com/show/58402/report.svg',
      routerlink:'/dashboard/details'
    },
    {
      text:'Setting',
      icon:'https://www.svgrepo.com//show/13688/settings.svg',
      routelink:'/dashboard/details'
  
    },
    
  ];

}
