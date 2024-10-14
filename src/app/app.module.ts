import { NgModule } from '@angular/core';
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
    CollectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
