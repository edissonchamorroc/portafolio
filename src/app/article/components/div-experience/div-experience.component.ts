import { Component } from '@angular/core';
import { experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'div-experience',
  templateUrl: './div-experience.component.html',
  styleUrls: ['./div-experience.component.css']
})
export class DivExperienceComponent {

  public experiences: experience[] =[
    {year:'oct/2021 - feb/2022', description:'Bootcamp fullstack- Sophos Solutions'},
    {year:'feb/2021 - ene/2023', description:'Tuya Web'},
    {year:'ene/2023 - Actualmente', description:'Tuya Vulnerabilidades'}
  ];
}
