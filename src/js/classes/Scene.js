import * as THREE from "three";
import Stats from "stats-js";

class Scene {
  constructor() {
    this.loader = new THREE.ObjectLoader();
    this.camera = false;
    this.scene = false;
    this.renderer = false;

    this.dom = document.createElement("div");

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    //test stats
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom);
  }

  load(json) {
    //setup webgl renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.gammaOutput = true;
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    const project = json.project;
    if (project.shadows) this.renderer.shadowMap.enabled = true;
    if (project.vr) this.renderer.vr.enabled = true;

    //add webgl renderer to dom
    this.dom.appendChild(this.renderer.domElement);

    //set the scene and camera
    this.setScene(this.loader.parse(json.scene));
    this.setCamera(this.loader.parse(json.camera));

    //set default location
    //this.camAnimator.setCam(0);
    this.setScreenMaterial();
  }

  setScreenMaterial() {
    const material = new THREE.MeshPhongMaterial({
      opacity: 0,
      color: new THREE.Color("white"),
      blending: THREE.NoBlending,
      side: THREE.DoubleSide
    });

    //set the screen material
    const screen = this.scene.getObjectByName("screen.obj", true).children[0];
    screen.material = material;
  }

  setCamera(value) {
    this.camera = value;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    //set camera
    //this.camAnimator.cam = this.camera;
  }

  setScene(value) {
    //webgl scene
    this.scene = value;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;

    if (this.camera) {
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
    }

    if (this.renderer) {
      this.renderer.setSize(width, height);
    }
  }

  animate() {
    this.stats.begin();

    //update webgl scene
    this.renderer.render(this.scene, this.camera);

    //set scale camera for the css renderer
    //this.camera.position.multiplyScalar(100);

    //update CSS3D scene
    /*Object.keys(this.pages).forEach(key => {
      this.pages[key].render();
    });*/

    //reset scale camera for the webgl renderer
    //this.camera.position.divideScalar(100);

    this.stats.end();
    requestAnimationFrame(() => {
      this.animate();
    });
  }

  play() {
    requestAnimationFrame(() => {
      this.animate();
    });
  }

  stop() {
    //stop animation
  }

  dispose() {
    while (this.dom.children.length) {
      this.dom.removeChild(this.dom.firstChild);
    }

    this.renderer.dispose();

    this.camera = undefined;
    this.scene = undefined;
    this.renderer = undefined;
  }
}

export default Scene;
