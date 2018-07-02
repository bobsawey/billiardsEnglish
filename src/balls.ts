
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

  createSpheres = () =>{
  var myMaterial = new BABYLON.StandardMaterial("myMaterial", this._scene);
myMaterial.ambientColor = new BABYLON.Color3(0, 0, 1);
    console.log("duh");
      const ballDiameter = 0.0572;

          let sphere = BABYLON.MeshBuilder.CreateSphere('sphere1',
                                {segments: 16, diameter: ballDiameter }, this._scene);

        // Move the sphere upward 1/2 of its height.
        sphere.position.y = ballDiameter/2;
   
         sphere.material = myMaterial;
sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass:.17, restitution: .10, friction: .050 }, this._scene);
        var whateverPoint = new BABYLON.Vector3(.1,0,1.110);
var whateverPointTwo = new BABYLON.Vector3(11.1,0.1,0.1);     
sphere.physicsImpostor.applyImpulse( whateverPoint, sphere.getAbsolutePosition());

  let num:number = 16; 
let spheres: Array<any> = [];
let i:number;

for(i = 1 ;i<17;i++) {
   //spheres[i-1] = sphere;
   let x =    5 % i * .08 + ballDiameter;
   let z =    i * .08 + ballDiameter;
   let y = ballDiameter/2;
   let instance : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> sphere.createInstance('instance'+i);
  instance.position = new BABYLON.Vector3(x, y, z);
  instance.physicsImpostor = new BABYLON.PhysicsImpostor(instance, BABYLON.PhysicsImpostor.SphereImpostor, { mass:.17, restitution: .5, friction: .5 }, this._scene);
  console.log( instance.position );
  
}

  }
  createScene = () =>{
  	BABYLON.SceneOptimizerOptions.LowDegradationAllowed();
    const tableWidth = 1.3716;
    const tableHeight = 2.7432;
  	this._scene = new BABYLON.Scene(this._engine);
  	this._scene.ambientColor = new BABYLON.Color3(1, 1, 1);
  	this._camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-2, 2,1), this._scene);
  	this._camera.setTarget(BABYLON.Vector3.Zero());
  	this._camera.attachControl(this._canvas, true);
this._light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 5, 0), this._scene);
//this._light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, this._scene);
    // Default intensity is 1. Let's dim the light a small amount
    this._light.intensity = 0.4;
  	//this._blueMat = new BABYLON.StandardMaterial('blueMat', this._scene);
// Create a built-in "sphere" shape; with 16 segments and diameter of 2.
  let tableFloor = BABYLON.MeshBuilder.CreateGround('tableFloor',
                                {width: tableWidth, height: tableHeight, subdivisions: 2}, this._scene);
      
   let frontWall : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> tableFloor.createInstance('instance'+1);
let farWall : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> tableFloor.createInstance('instance'+2);
let leftWall : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> tableFloor.createInstance('instance'+3);
let rightWall : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> tableFloor.createInstance('instance'+4);

leftWall.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
leftWall.scaling.x = .1;
leftWall.position.x = tableWidth/2;
rightWall.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);


rightWall.scaling.x = .1;
rightWall.position.x = -tableWidth/2;;

frontWall.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);
frontWall.scaling.x = 1;
frontWall.scaling.z = .1;
frontWall.position.z = tableHeight/2;
farWall.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);
farWall.scaling.x = 1;
farWall.scaling.z = .1;
farWall.position.z = -tableHeight/2;
  var myMaterial = new BABYLON.StandardMaterial("myMaterial", this._scene);
myMaterial.ambientColor = new BABYLON.Color3(0, 0, 1);

tableFloor.material = myMaterial;
                                /*let mesh2 : any = mesh;
        let instance : BABYLON.InstancedMesh = <BABYLON.InstancedMesh> mesh2.createInstance('instance1'); 
*/
   //  var grass0 = new BABYLON.StandardMaterial("grass0", this._scene);
  //grass0.diffuseTexture = new BABYLON.Texture("./assets/felt.jpg");
this._scene.enablePhysics();
tableFloor.physicsImpostor = new BABYLON.PhysicsImpostor(tableFloor, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .09191, friction: 1.19, disableBidirectionalTransformation: false }, this._scene);
rightWall.physicsImpostor = new BABYLON.PhysicsImpostor(rightWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .95191, friction: 1.19, disableBidirectionalTransformation: false }, this._scene);
leftWall.physicsImpostor = new BABYLON.PhysicsImpostor(leftWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .95191, friction: 1.19, disableBidirectionalTransformation: false }, this._scene);
farWall.physicsImpostor = new BABYLON.PhysicsImpostor(farWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .95191, friction: 1.19, disableBidirectionalTransformation: false }, this._scene);
frontWall.physicsImpostor = new BABYLON.PhysicsImpostor(frontWall, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .95191, friction: 1.19, disableBidirectionalTransformation: false }, this._scene);

this.createSpheres();
var g = new BABYLON.Vector3(0, -0.98, 0);

  this._scene.getPhysicsEngine().setGravity(g); 
/*
var range = 60;
            var count = 100;
            for (var index = 0; index < count; index++) {
                var newInstance = newMeshes[0].createInstance("i" + index);
                var x = range / 2 - Math.random() * range;
                var z = range / 2 - Math.random() * range;

                var y = ground.getHeightAtCoordinates(x, z); // Getting height from ground object

                newInstance.position = new BABYLON.Vector3(x, y, z);
*/
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

      // Run the render loop.
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener('resize', () => {
            this._engine.resize();
        });


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