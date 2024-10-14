import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'product/:id', component: ProductPageComponent  },
  { path: 'collections/:categorie', component: CollectionPageComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
