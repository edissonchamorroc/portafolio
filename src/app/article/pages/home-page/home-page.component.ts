import { Component } from '@angular/core';
import { Descripcion } from '../../interfaces/descripcion.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public descripcion: Descripcion = {
    name: 'Edisson Chamorro',
    profession: 'Software developer (.Net/Spring/Angular/SerenityBDD)',
    aboutMe: 'Edisson is a Software Developer and QA Engineer with solid experience in designing, building, and assuring the quality of services and applications. Throughout my career, I have worked on projects that strengthened my ability to guarantee product reliability, performance, and scalability. I have designed and implemented APIs and backend services to meet business requirements, ensuring clean architecture, maintainability, and efficiency. I combine development and testing expertise to prevent defects early in the lifecycle, implementing best practices such as automated testing, continuous integration, and quality gates. My experience includes functional testing, end-to-end automation, API testing, load testing, and quality assurance strategies aligned with industry standards.I am always looking to learn and apply modern technologies, architectures, and testing methodologies to deliver robust, efficient, and user-centered solutions. My goal is to contribute to teams by building software that not only works—but works reliably, securely, and at scale.'
  };
}
