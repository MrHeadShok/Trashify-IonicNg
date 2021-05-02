import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectpagePage } from './connectpage.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectpagePageRoutingModule {}
