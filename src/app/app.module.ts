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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PhotosViewerComponent,
    MainInfosProduitComponent,
    BestSellersComponent,
    CommentsProduitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
