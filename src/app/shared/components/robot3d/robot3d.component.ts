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
  private camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);;
  private controls = new oc.OrbitControls(this.camera, this.renderer.domElement)
  private loader = new GLTFLoader();

  ngOnInit(): void {
    const scene2 = this.scene;
    this.camera.position.z = 1000;
    this.camera.position.set(0, 3, 6)

    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(1, 4, 1);
    scene2.add(light)

    this.loader.load('https://edissonchamorroc.github.io/portafolio/assets/robot/walle.glb', function (glb: GLTF) {
      const root = glb.scene;
      root.scale.set(1, 1, 1);
      scene2.add(root)
    })

  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.controls.autoRotate = true;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);

  }

  ngAfterViewInit() {
    this.renderer.setSize(this.rendererContainer?.nativeElement.offsetWidth, this.rendererContainer?.nativeElement.offsetHeight);
    this.rendererContainer?.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['backTheme'].currentValue) this.scene.background = new THREE.Color('#202023');
    else this.scene.background = new THREE.Color('#f0e7db');

  }
}
