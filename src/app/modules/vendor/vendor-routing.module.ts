import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from '../../shared/constants/routing.constant';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';
import { BlockVendorComponent } from './block-vendor/block-vendor.component';

const routes: Routes = [
  { path: "", redirectTo: ROUTING.ACTIVE, pathMatch: "full" },
  { path: ROUTING.ACTIVE, component: ActiveVendorComponent },
  { path: ROUTING.BLOCK, component: BlockVendorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
