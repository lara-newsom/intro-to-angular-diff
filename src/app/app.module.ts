import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { SubSectionComponent } from './home/sub-section/sub-section.component';
import { CardComponent } from './home/sub-section/card/card.component';
import { SideNavComponent } from './product-view/side-nav/side-nav.component';
import { DetailViewComponent } from './product-view/detail-view/detail-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    NotFoundComponent,
    ProductViewComponent,
    HeroSectionComponent,
    SubSectionComponent,
    CardComponent,
    SideNavComponent,
    DetailViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
