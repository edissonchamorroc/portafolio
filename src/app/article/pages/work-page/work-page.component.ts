import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { work } from '../../interfaces/work.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit{

  public work?:work;

  constructor(
    private route:ActivatedRoute,
    private articleService:ArticleService
    ){}


  ngOnInit(): void {
    
     const id = this.route.snapshot.paramMap.get('id');
     this.work = this.articleService.getWorkById(id);
  }

 


}
