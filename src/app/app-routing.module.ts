import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Components 
import { InventoryComponent} from '../app/inventory/inventory.component';
import { LoginComponent } from '../app/login/login.component';

const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'login', component: LoginComponent },
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}