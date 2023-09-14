import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as oc from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'shared-robot3d',
  templateUrl: './robot3d.component.html',
  styleUrls: ['./robot3d.component.css']
})
export class Robot3dComponent {

  @ViewChild('rendererContainer') rendererContainer?: ElementRef;

  private renderer = new THREE.WebGLRenderer();
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);;
  private controls =  new oc.OrbitControls(this.camera, this.renderer.domElement)
  private loader = new GLTFLoader();

  ngOnInit(): void {
    const scene2 = this.scene;
    this.scene.background = new THREE.Color( '#f0e7db' );
    this.camera.position.z = 1000;
    this.camera.position.set(0,3,5)
 
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 3, 1);
    scene2.add(light)

    this.loader.load('../../../assets/robot/walle.glb', function (glb: GLTF) {
      const root = glb.scene;
      console.log(root)
      root.scale.set(1, 1, 1);
      scene2.add(root)
    })
    
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.controls.autoRotate=true;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    
  }

  ngAfterViewInit() {
    this.renderer.setSize(this.rendererContainer?.nativeElement.offsetWidth, this.rendererContainer?.nativeElement.offsetHeight);
    this.rendererContainer?.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }
}
