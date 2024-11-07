import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  isConnected !:boolean;
  constructor(private route: ActivatedRoute) { }
  categorie !: string;
  @ViewChild("aerarring") aerarring !: ElementRef;
  @ViewChild("arings") arings !: ElementRef;
  @ViewChild("anecklaces") anecklaces !: ElementRef;
  @ViewChild("abracelets") abracelets !: ElementRef;

  ngOnInit() {
    this.categorie = this.route.snapshot.paramMap.get('categorie')!;
    if(localStorage.getItem('isLoggedIn') as string== "true"){
      this.isConnected = true;
    }else{
      this.isConnected = false;
    }
  }

  ngAfterViewInit() {
    if (this.categorie == "Earrings") this.aerarring.nativeElement.style.textDecoration = "underline";
    if (this.categorie == "Rings") this.arings.nativeElement.style.textDecoration = "underline";
    if (this.categorie == "Necklaces") this.anecklaces.nativeElement.style.textDecoration = "underline";
    if (this.categorie == "Bracelets") this.abracelets.nativeElement.style.textDecoration = "underline";
  }



}
