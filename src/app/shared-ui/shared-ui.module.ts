import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SubHeroLogoComponent } from './sub-hero-logo/sub-hero-logo.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SubHeroLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedUiModule { }
