import { Component } from '@angular/core';
import { experience } from '../../interfaces/experience.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'div-experience',
  templateUrl: './div-experience.component.html',
  styleUrls: ['./div-experience.component.css']
})
export class DivExperienceComponent {

  public experiences?: experience[] = this.articleService.getExperiences;

  constructor(
    private articleService:ArticleService
  ){}

 
}
