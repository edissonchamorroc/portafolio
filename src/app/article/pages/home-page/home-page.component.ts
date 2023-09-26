import { Component } from '@angular/core';
import { Descripcion } from '../../interfaces/descripcion.interface';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public descripcion: Descripcion = {
    nombre: 'Edisson Chamorro',
    profesion: 'Software Developer (Spring / Angular)',
    sobreMi: 'Soy un desarrollador de Software con experiencia en diseño, creación y mantenimiento de aplicaciones web. Me he desempeñado como desarrollador en proyectos donde he adquirido habilidades en análisis de calidad de productos de software a nivel de pruebas funcionales, desarrollo de soluciones para vulnerabilidades y soporte en diferentes proyectos.Además, he trabajado en proyectos personales con el fin de mejorar y emplear las mejores prácticas de desarrollo buscando tener código limpio.Mi enfoque está en la entrega de soluciones eficientes y escalables, con habilidades para trabajar en equipo y adaptarme a nuevas tecnologías y desafíos.'
  };
}
