import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  para = "";

  constructor (
    private parent: NavComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.parent.setActiveByPath(this.parent.dashboard,"");
    this.para = this.parent.para;
  };



}
