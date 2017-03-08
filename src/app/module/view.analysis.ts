import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AppComponent} from '../app.component';
import { NgClass} from '@angular/common';
import {ChartsModule} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'app-analysis',
    templateUrl:"./analytics.html",

})

export class AnalysisComponent implements OnInit{
    constructor (
                 private parent: AppComponent,
                 private route: ActivatedRoute,
                 private router: Router
    ) {}

    ngOnInit(){


    };










}


