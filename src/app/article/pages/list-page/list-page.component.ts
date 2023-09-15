import { Component } from '@angular/core';
import { work } from '../../interfaces/work.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {

  constructor(private articleService:ArticleService){}
  
  public works: work[]=this.articleService.getWorks;
}
