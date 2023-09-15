import { Injectable } from '@angular/core';
import { work } from '../interfaces/work.interface';

@Injectable({ providedIn: 'root' })


export class ArticleService {

    private works: work[] = [
        {
            id: 'seguros',
            name: 'Seguros y asistencias',
            desc: 'Apoyé en el equipo de Tuya Web, con la construcción de nuevos componentes en la página de Seguros y Asistencias. La finalidad fue realizar componentes reutilizables por otros equipos sin necesidad de que codifiquen y para ello empleamos Drupal. Además apoyé en las pruebas unitarias y funcionales. El resultado fué un aumento significativo de 100.000 visitas mensuales en promedio.',
            url: 'https://www.tuya.com.co/asistencias-y-seguros', stack: 'Drupal/PHP/JavaScript/Sass/Java/JUnit/Serenity'
        },
        {
            id: 'sostenibilidad',
            name: 'Sostenibilidad',
            desc: 'Colaboré con un equipo compuesto por UI,UX, UX Writer y Desarrolladores con el fin de construir totalmente la página Sostenibilidad. Estuve también en la parte de pruebas unitarias y funcionales. Se logró aumentar las visitas en la página web y además una reducción de la tasa de rebote del sitio web de 5 a 3 minutos, generando una mayor interacción y cohesión con los clientes por medio del contenido web.',
            url: 'https://www.tuya.com.co/responsabilidad-social',
            stack: 'Drupal/PHP/JavaScript/Sass/JUnit/Serenity'
        },
        {
            id: 'vulnerabilidades',
            name: 'Vulnerabilidades',
            desc: 'Como parte de un equipo compuesto por desarrolladores, estamos con la meta de identificar y atacar las vulnerabilidades. por medio de código, que se presenten en las diferentes Apis o Aplicativos Web que la compania gestione. Se ha logrado, hasta el momento, mejora de la seguridad de los aplicativos de portal transaccional de la compañía, reduciendo hasta un 90% las vulnerabilidades identificadas',
            stack: '.NET/C#/Java/Azure/JUnit/Serenity'
        },
        {
            id: 'Contabilidad',
            name: 'Contabilidad empresarial',
            img:'https://user-images.githubusercontent.com/71468355/219412819-6746f050-21be-41e7-b855-b7ad61c9ab3b.png',
            desc: 'Proyecto personal en el cual se construyó una aplicación web monolítica buscando gestionar de manera básica la contabilidad de una empresa. En este proyecto se pretende mostrar el buen uso de los principios de código limpio. Se realizarón pruebas unitarias y de integración',
            stack: 'Spring Web/Spring JPA/Spring Security/Postgre/Java'
        },
    ]

    constructor() { }

    get getWorks(): work[] {

        return this.works;
    }

    getWorkById(id: string | null): work | undefined {

        if (id == null || id == undefined) return;

        return this.works.find(work => work.id == id);
    }

}