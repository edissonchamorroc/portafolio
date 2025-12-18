import { Injectable } from '@angular/core';
import { work } from '../interfaces/work.interface';
import { experience } from '../interfaces/experience.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class ArticleService {

    private myVariableSubject = new BehaviorSubject<boolean>(false);

    private works: work[] = [
         {
            id: 'cobranza-digital',
            name: 'Cobranza digital',
            desc: 'I had been working in Portal de Soluciones web',
            url:'https://servicios.tuya.com.co/portalsoluciones/',
            stack: 'Java/Azure/Bizagi/VSCode/JUnit/Selenium/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },
        {
            id: 'coe-ingenieria',
            name: 'CoE Ingeniería',
            desc: 'I have worked on process optimization initiatives aimed at improving quality across the company. I supported multiple teams in correctly implementing Java-based test automation, helping them achieve greater efficiency and reliability in their testing processes. Additionally, I developed a pipeline script to automatically detect deprecated libraries in .NET projects, contributing to better maintainability, security, and technical debt control.',
            stack: 'Java/Azure/Bizagi/VSCode/JUnit/Selenium/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },
        {
            id: 'vulnerabilidades',
            name: 'Vulnerabilidades',
            desc: 'I worked on testing and validating solutions designed to address vulnerabilities in .NET projects across the company. Through these efforts, we reduced identified vulnerabilities by 60%–90%, significantly improving the overall security posture of the applications.',
            stack: '.NET/C#/Java/Azure/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },
        {
            id: 'seguros',
            name: 'Seguros y asistencias',
            desc: 'I supported the team by developing Drupal components for the Seguros y Asistencias page. Additionally, I created automated tests to validate all user paths on the page. As a result of these improvements, we enhanced the user experience and increased interactions on the page by approximately 100,000 interactions per month.',
            url: 'https://www.tuya.com.co/asistencias-y-seguros',
            stack: 'Drupal/PHP/JavaScript/Sass/Java/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'

        },
        {
            id: 'sostenibilidad',
            name: 'Sostenibilidad',
            desc: 'I collaborated with a multidisciplinary team (UI, UX, UX Writer, and Developers) to fully build the Sustainability page. I contributed to unit and functional testing, improving site quality and user experience. As a result, website traffic increased and the bounce rate was reduced, leading to higher user engagement.',
            url: 'https://www.tuya.com.co/responsabilidad-social',
            stack: 'Drupal/PHP/JavaScript/Sass/JUnit/Serenity',
            plataformas: 'Windows/macOS/Linux/iOS/Android'
        },

        {
            id: 'Contabilidad',
            name: 'Contabilidad',
            img: 'https://user-images.githubusercontent.com/71468355/219412819-6746f050-21be-41e7-b855-b7ad61c9ab3b.png',
            desc: 'Developed a monolithic web application to manage basic company accounting. The project demonstrates the application of clean code principles and includes unit and integration testing to ensure reliability and maintainability.',
            url: 'https://github.com/edissonchamorroc/Contabilidad-basica-empresarial',
            stack: 'Spring Web/Spring JPA/Spring Security/Postgre',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'sesiones',
            name: 'Sesiones concurrentes',
            img: 'https://user-images.githubusercontent.com/71468355/224379055-d0cb1248-9b59-4521-a71d-76450a6a9b9a.png',
            desc: 'Many applications, such as transactional portals, are vulnerable to multiple concurrent sessions across different devices (laptops, mobile phones, etc.). To address this, I proposed and designed a REST API to manage and control concurrent sessions, improving security and user session management.',
            url: 'https://github.com/edissonchamorroc/RestApi-sesiones',
            stack: 'Spring boot 2.7.9/Spring web/Spring Data/postgre/JUnit 5/Mockito',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'storeimg',
            name: 'Store image',
            img: 'https://user-images.githubusercontent.com/71468355/217281443-2414460e-7787-4976-8d6a-104efa19019c.png',
            desc: 'The project consists of a web module that allows users to upload images either via drag-and-drop or by browsing the file system. Uploaded files are then stored in a database, providing a simple and user-friendly file management solution.',
            url: 'https://github.com/edissonchamorroc/StorageImage-MVC',
            stack: 'Spring boot 2.7.8/Spring web/Spring Data/postgre',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'pacman',
            name: 'PACMAN',
            desc: 'The project is a Pac-Man game simulation, implementing key functionalities as a practice exercise to improve programming and game development skills.',
            url: 'https://github.com/edissonchamorroc/PACMAN_',
            stack: 'C++/QTGraphics',
            plataformas: 'Windows/macOS/Linux'
        },
        {
            id: 'theory',
            name: 'Theory B',
            desc: 'The project is a game called Mr. Traveller, where the player navigates through a series of obstacles to reach the goal. The character is under time pressure, and to survive, they must reach the finish line before time runs out. To overcome enemies and obstacles, the player can use the bomb-throwing mechanic, adding strategy and engagement to the gameplay.',
            url: 'https://github.com/edissonchamorroc/Theory_B',
            stack: 'C++/QTGraphics',
            plataformas: 'Windows/macOS/Linux'
        },

    ]

    private experiences: experience[] = [
        { year: '03/2024 - Actualmente', title: 'Cobranza digital - Tuya' },
        { year: '10/2023 - 03/2024', title: 'CoE Ingeniería - Tuya' },
        { year: '01/2023 - 10/2023', title: 'SMT Vulnerabilidades - Tuya' },
        { year: '02/2022 - 01/2023', title: 'Yo tengo web - Tuya' },
        { year: '10/2021 - 02/2022', title: 'Bootcamp Backend - Sophos Solutions' },

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