
  export class Game {

	private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;
    private _light: BABYLON.Light;
    private _gravityVector: BABYLON.Vector3;
    private _physicsPlugin: BABYLON.CannonJSPlugin;

    private _blueMat: BABYLON.StandardMaterial;
    private _greenMat: BABYLON.StandardMaterial;

  constructor(canvasElement : string) {
  	   // Create canvas and engine.
    this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this._engine = new BABYLON.Engine(this._canvas, true);
    this._gravityVector = new BABYLON.Vector3(1,10,0);
    this._physicsPlugin = new BABYLON.CannonJSPlugin();
  }

  createScene() : void {
  	
  	this._scene = new BABYLON.Scene(this._engine);
  	
  	this._camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-1, 1.5, -1.2), this._scene);
  	this._camera.setTarget(BABYLON.Vector3.Zero());
  	this._camera.attachControl(this._canvas, true);

  	this._blueMat = new BABYLON.StandardMaterial('blueMat', this._scene);


    //create Spheres
      //use a loop and use instances
    //--end spheress
    //create Ground Meshes
      //use a loop and use instances
    //--end ground
    //create Box Meshes
      //Keep It simple.
    //--end box


  }

  doRender() : void {
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Create the game using the 'renderCanvas'.
  let game = new Game('renderCanvas');

  // Create the scene.
  game.createScene();

  // Start render loop.
  game.doRender();
});