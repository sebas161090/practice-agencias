import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './component/loader/loader.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemComponent } from './item/item.component';



const routes: Routes = [
  { path: '', component: LoaderComponent },
  { path: 'item', component: ItemComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
