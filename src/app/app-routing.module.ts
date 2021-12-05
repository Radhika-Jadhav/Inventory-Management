import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { UpdateItemComponent } from './Components/update-item/update-item.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ListInventoryComponent } from './Components/list-inventory/list-inventory.component';

const routes: Routes = [
  {path:"listInventory", component:ListInventoryComponent},
  {path:"add", component:AddItemComponent},
  {path:"update/:id", component:UpdateItemComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
