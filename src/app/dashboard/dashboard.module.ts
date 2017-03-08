import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';


import { NavComponent } from './nav.component';
import { DashboardComponent } from './dashboard.component';
import { lineChartsComponent } from '../charts/lineCharts/lineCharts.component';
import { pieChartsComponent } from '../charts/pieCharts/pieCharts.component';
import { DatatableComponent } from '../tables/datatable/datatable.component';
import { BootstrapComponent } from '../bootstraps/static/bootstrap.component';
import { PluginComponent } from '../bootstraps/plugin/plugin.component';


const tablesRoutes: Routes = [
    {
        path:'main/:id',
        component:NavComponent,
        children: [
           { path: '', component: DashboardComponent },
           { path: 'dashboard', component: DashboardComponent },
           { path: 'lineCharts', component: lineChartsComponent },
           { path: 'pieCharts', component: pieChartsComponent },
           { path: 'datatable', component: DatatableComponent },
           { path: 'bootstrap-static', component: BootstrapComponent },
           { path: 'bootstrap-plugin', component: PluginComponent }
        ]
    }
]


@NgModule({
  imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild(tablesRoutes),
      ChartsModule,
      PaginationModule.forRoot(),
      Ng2SmartTableModule,
      FileUploadModule

  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    lineChartsComponent,
    pieChartsComponent,
    DatatableComponent,
    BootstrapComponent,
    PluginComponent
  ],
  providers: []
})
export class DashboardModule { }
