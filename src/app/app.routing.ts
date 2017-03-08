import {Routes, RouterModule} from '@angular/router';
import {AnalysisComponent} from './module/view.analysis';
import {LoginComponent} from './login/login.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'content',
    component: AnalysisComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
