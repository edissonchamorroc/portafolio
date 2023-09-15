import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LinkWebComponent } from './components/link-web/link-web.component';
import { DivExperienceComponent } from './components/div-experience/div-experience.component';
import { CardComponent } from './components/card/card.component';
import { WorkImagePipe } from './pipe/card-image.pipe';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent,
    WorkPageComponent,
    ListPageComponent,
    LinkWebComponent,
    DivExperienceComponent,
    CardComponent,

    WorkImagePipe
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
