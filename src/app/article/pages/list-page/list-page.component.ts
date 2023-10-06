import { Component, OnInit } from '@angular/core';
import { work } from '../../interfaces/work.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  public works: work[] = this.articleService.getWorks;

  ngOnInit(): void {

    this.articleService.flagBlackTheme.subscribe((value: boolean) => {
      if (value) document.getElementById('card')?.setAttribute('style', 'color: #212529 !important;');
      else document.getElementById('card')?.setAttribute('style', 'color: #EDEDEE !important;');
    }
    );
  }


}
