import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../dashboard/nav.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgClass} from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-charts',
  templateUrl: './pieCharts.component.html',
})
export class pieChartsComponent implements OnInit {



  constructor (
                 private parent: NavComponent,
                 private route: ActivatedRoute,
                 private router: Router
    ) {}

    ngOnInit(){
        this.parent.setActiveByPath("charts",this.parent.pieCharts);

      $("#btn").click(function () {
        alert("123");
      });

    };
}
