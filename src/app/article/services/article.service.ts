import { Injectable } from '@angular/core';
import { work } from '../interfaces/work.interface';
import { experience } from '../interfaces/experience.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class ArticleService {

    private myVariableSubject = new BehaviorSubject<boolean>(false);

    private works: work[] = [
        {
            id: 'reposteria',
            name: 'Dalia Carvajal Repostería',
            desc: 'Trabajé en proyecto freelance para cliente el cual deseaba desarrollar una página web con un presupuesto limitado, por tanto planté y ejecuté la solución más optima para materealizar sus ideas.',
            url: 'https://daliareposteriapasteleria.github.io/paginaweb/',
            stack: 'Angular_V16/JavaScript/CSS',
            plataformas: 'Windows/macOS/Linux/iOS/Android'

        },
        {
            id: 'seguros',
            name: 'Seguros y asistencias',
            desc: 'Apoyé en el equipo de Tuya Web, con la construcción de nuevos componentes en la página de Seguros y Asistencias. La finalidad fue realizar componentes reutilizables por otros equipos sin necesidad de que codifiquen y para ello empleamos Drupal. Además apoyé en las pruebas unitarias y funcionales. El resultado fué un aumento significativo de 100.000 visitas mensuales en promedio.',
            url: 'https://www.tuya.com.co/asistencias-y-seguros',
            stack: 'Drupal/PHP/JavaScript/Sass/Java/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'

        },
        {
            id: 'sostenibilidad',
            name: 'Sostenibilidad',
            desc: 'Colaboré con un equipo compuesto por UI,UX, UX Writer y Desarrolladores con el fin de construir totalmente la página Sostenibilidad. Estuve también en la parte de pruebas unitarias y funcionales. Se logró aumentar las visitas en la página web y además una reducción de la tasa de rebote del sitio web de 5 a 3 minutos, generando una mayor interacción y cohesión con los clientes por medio del contenido web.',
            url: 'https://www.tuya.com.co/responsabilidad-social',
            stack: 'Drupal/PHP/JavaScript/Sass/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },
        {
            id: 'vulnerabilidades',
            name: 'Vulnerabilidades',
            desc: 'Como parte de un equipo compuesto por desarrolladores, estamos con la meta de identificar y atacar las vulnerabilidades. por medio de código, que se presenten en las diferentes Apis o Aplicativos Web que la compania gestione. Se ha logrado, hasta el momento, mejora de la seguridad de los aplicativos de portal transaccional de la compañía, reduciendo hasta un 90% las vulnerabilidades identificadas',
            stack: '.NET/C#/Java/Azure/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },
        {
            id: 'Contabilidad',
            name: 'Contabilidad',
            img: 'https://user-images.githubusercontent.com/71468355/219412819-6746f050-21be-41e7-b855-b7ad61c9ab3b.png',
            desc: 'Proyecto personal en el cual se construyó una aplicación web monolítica buscando gestionar de manera básica la contabilidad de una empresa. En este proyecto se pretende mostrar el buen uso de los principios de código limpio. Se realizarón pruebas unitarias y de integración',
            url: 'https://github.com/edissonchamorroc/Contabilidad-basica-empresarial',
            stack: 'Spring Web/Spring JPA/Spring Security/Postgre',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'sesiones',
            name: 'Sesiones concurrentes',
            img: 'https://user-images.githubusercontent.com/71468355/224379055-d0cb1248-9b59-4521-a71d-76450a6a9b9a.png',
            desc: 'Actualmente muchas aplicaciones, como los portales transaccionales, presentan vulnerabilidad de multiple sesiones generadas a través de diferentes dispositivos como laptos, celular, etc. Es por ello que se propone como solución la construcción de una API Rest, la cual se encargue de manejar las sesiones concurrentes.',
            url: 'https://github.com/edissonchamorroc/RestApi-sesiones',
            stack: 'Spring boot 2.7.9/Spring web/Spring Data/postgre/JUnit 5/Mockito',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'storeimg',
            name: 'Store image',
            img: 'https://user-images.githubusercontent.com/71468355/217281443-2414460e-7787-4976-8d6a-104efa19019c.png',
            desc: 'El proyecto consiste de un apartado web en donde se pueden subir imagenes a través de la funcionalidad drag and drop, o a través del sistema de buscar en el sistema de archivos, con el fin de almacenar dicho fichero en base de datos.',
            url: 'https://github.com/edissonchamorroc/StorageImage-MVC',
            stack: 'Spring boot 2.7.8/Spring web/Spring Data/postgre',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'pacman',
            name: 'PACMAN',
            desc: 'El proyecto consiste en simular el video juego pacman, dando vida a algunas de sus funcionalidades a manera de práctica.',
            url: 'https://github.com/edissonchamorroc/PACMAN_',
            stack: 'C++/QTGraphics',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'theory',
            name: 'Theory B',
            desc: 'El video juego consiste en Mr Traveller, el cual va atravesando una serie de obstaculos hasta llegar a la meta. La razon por la que el Mr Traveller está en constante huida es debido a que el tiempo se le va a acabando y para poder sobrevivir deberá llegar a la meta a tiempo. En cuanto la manera de defenderse de los enemigos u obstaculos, contará con la funcionalidad de lanzar bombas.',
            url: 'https://github.com/edissonchamorroc/Theory_B',
            stack: 'C++/QTGraphics',
            plataformas: 'Windows/macOS/Linux'
        },
    ]

    private experiences: experience[] = [
        { year: 'ene/2023 - Actualmente', description: 'Tuya Vulnerabilidades' },
        { year: 'feb/2022 - ene/2023', description: 'Tuya Web' },
        { year: 'oct/2021 - feb/2022', description: 'Bootcamp fullstack- Sophos Solutions' },

    ];


    constructor() { }

    get getWorks(): work[] {

        return this.works;
    }

    get getExperiences(): experience[] {
        return this.experiences;
    }

    getWorkById(id: string | null): work | undefined {

        if (id == null || id == undefined) return;

        return this.works.find(work => work.id == id);
    }

    get flagBlackTheme(): BehaviorSubject<boolean> {
        return this.myVariableSubject;
    }

    setflagBlackTheme(value: boolean) {
        this.myVariableSubject.next(value);
    }



}