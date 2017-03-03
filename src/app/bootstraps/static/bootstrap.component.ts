import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../../dashboard/nav.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgClass} from '@angular/common';


@Component({
  selector: 'ng2-bootstrap',
  templateUrl: './bootstrap.component.html'
})
export class BootstrapComponent implements OnInit {

  constructor(
      private parent:NavComponent,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.parent.setActiveByPath("bootstrap", this.parent.bootstrap);

  };



}
