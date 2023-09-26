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
  public backTheme!: boolean;

  @ViewChild('rendererContainer') rendererContainer?: ElementRef;

  private renderer = new THREE.WebGLRenderer();
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  private controls : oc.OrbitControls =  new oc.OrbitControls(this.camera, this.renderer.domElement);
  private loader = new GLTFLoader();
  private plano?: THREE.PlaneGeometry;
  private material !:THREE.MeshBasicMaterial;

  ngOnInit(): void {

    this.scene.position.set(-0.5, -1, 0)
    this.agregarCamara();
    this.crearPlano();
    this.cargar3D(this.scene);
    this.agregarLuz();
  }

  agregarCamara(): void {

    this.camera.position.z = 100;
    this.camera.position.set(0, 3, 6)
  }

  agregarLuz(): void {

    const sol = new THREE.DirectionalLight();
    sol.position.set(400, 400, 1000);
    sol.intensity = 2;
    sol.shadow.camera.visible = true;
    this.scene.add(sol)
  }

  crearPlano(): void {

    this.plano = new THREE.PlaneGeometry(100, 100, 10, 10);
    this.plano.lookAt(new THREE.Vector3(0, 0.01, 0));
    this.material= new THREE.MeshBasicMaterial({ color: 0xf0e7db });
    
    const territorio = new THREE.Mesh(this.plano, this.material);
    territorio.receiveShadow = true
    this.scene.add(territorio);

  }

  cargar3D(scene: THREE.Scene): void {

    this.loader.load('/assets/robot/walle.glb', function (glb: GLTF) {
      const root = glb.scene;
      root.scale.set(0.9, 0.9, 0.9);
      root.castShadow;
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

    if (changes['backTheme'].currentValue) {
      this.scene.background = new THREE.Color(tema_negro);
      this.material.color.set(new THREE.Color(tema_negro))
    }
    else {
      this.scene.background = new THREE.Color(tema_blanco);
      this.material.color.set(new THREE.Color(tema_blanco))
    }

  }
}
