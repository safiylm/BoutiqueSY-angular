import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PhotosViewerComponent } from './photos-viewer/photos-viewer.component';
import { MainInfosProduitComponent } from './main-infos-produit/main-infos-produit.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CommentsProduitComponent } from './comments-produit/comments-produit.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProduitCardComponent } from './produit-card/produit-card.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import { InputPasswordComponent } from './input-password/input-password.component';
import { HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PhotosViewerComponent,
    MainInfosProduitComponent,
    BestSellersComponent,
    CommentsProduitComponent,
    FooterComponent,
    ProductPageComponent,
    HomeComponent,
    ProduitCardComponent,
    CollectionPageComponent,
    LoginComponent,
    PanierComponent,
    WishlistComponent,
    SearchComponent,
    InputPasswordComponent
  ],
  imports: [
   HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ { provide:  LOCALE_ID,  useValue: 'fr-FR', useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
