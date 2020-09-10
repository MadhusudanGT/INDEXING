import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsTableComponent } from './materials-table/materials-table.component';
import { UpdatetableComponent } from './updatetable/updatetable.component';
import { AddmattableComponent } from './addmattable/addmattable.component';

const routes: Routes = [
 {path:'',component:MaterialsTableComponent},
  {path:'update-delete',component:UpdatetableComponent},
  {path:'addnewuser',component:AddmattableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
