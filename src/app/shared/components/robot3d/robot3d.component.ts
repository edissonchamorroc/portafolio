import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as oc from 'three/examples/jsm/controls/OrbitControls';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'shared-robot3d',
  templateUrl: './robot3d.component.html',
  styleUrls: ['./robot3d.component.css']
})
export class Robot3dComponent implements OnChanges {

  @Input()
  public changeTheme!: boolean;

  @ViewChild('rendererContainer') rendererContainer?: ElementRef;

  private renderer = new THREE.WebGLRenderer();
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  private controls : oc.OrbitControls =  new oc.OrbitControls(this.camera, this.renderer.domElement);
  private loader = new GLTFLoader();
  private material !:THREE.MeshBasicMaterial;
  private path3d:string = './assets/robot/walle.glb';
  

  ngOnInit(): void {

    this.scene.position.set(0, -1, -1)
    this.agregarCamara();
    this.cargar3D(this.scene);
    this.agregarLuz();
  }

  agregarCamara(): void {

    this.camera.position.z = 100;
    this.camera.position.set(0, 2, 7)
  }

  agregarLuz(): void {

    const sol1 = new THREE.DirectionalLight();
    sol1.position.set(100, 200, 200);
    sol1.intensity = 3;
    sol1.shadow.camera.visible = true;
    this.scene.add(sol1)

    const sol2 = new THREE.DirectionalLight();
    sol2.position.set(100, 200, -200);
    sol2.intensity = 3;
    this.scene.add(sol2)
  }



  cargar3D(scene: THREE.Scene): void {

    this.loader.load(this.path3d, function (glb: GLTF) {
      const root = glb.scene;
      root.scale.set(0.9, 0.9, 0.9);
  
      scene.add(root)
    })
  }

  animate() {

    window.requestAnimationFrame(() => this.animate());
    this.controles();
    this.renderer.render(this.scene, this.camera);

  }

  controles(): void {

    this.controls.autoRotate = true;
    this.controls.update();
  }

  ngAfterViewInit() {
    
    this.renderer.setSize(this.rendererContainer?.nativeElement.offsetWidth, this.rendererContainer?.nativeElement.offsetHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.render;
    this.rendererContainer?.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    const tema_negro: string = '#202023';
    const tema_blanco: string = '#f0e7db';

    if (changes['changeTheme'].currentValue) {
      this.scene.background = new THREE.Color(tema_blanco);
      this.material.color.set(new THREE.Color(tema_blanco))
    }
    else {
      this.scene.background = new THREE.Color(tema_negro);
      this.material.color.set(new THREE.Color(tema_negro))
      
    }

  }
}
