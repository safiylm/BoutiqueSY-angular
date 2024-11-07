import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'product/:id', component: ProductPageComponent  },
  { path: 'collections/:categorie', component: CollectionPageComponent  },
  { path: 'user', component: UserPageComponent,  canActivate: [AuthGuard],  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
