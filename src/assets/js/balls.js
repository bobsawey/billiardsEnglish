 var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

 var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var gravityVector = new BABYLON.Vector3(1,10, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();
 /******* Add the create scene function ******/
var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.collisionsEnabled = true;

   
    
    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-1.1,1.5, -1.20), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
var blueMat = new BABYLON.StandardMaterial("blueMat", scene);
  blueMat.emissiveColor = new BABYLON.Color3(0, 0, 1);
  blueMat.freeze();
  var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
  greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0);
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.3;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere", 6, 0.0572, scene);

      var sphereTwo = BABYLON.Mesh.CreateSphere("sphereTwo", 6, 0.0572, scene);

      var sphereThree = BABYLON.Mesh.CreateSphere("sphereThree", 6, 0.0572, scene);

      var sphereFour = BABYLON.Mesh.CreateSphere("sphereFour", 6, 0.0572, scene);

      var sphereFive = BABYLON.Mesh.CreateSphere("sphereFive", 6, 0.0572, scene);

      var sphereSix = BABYLON.Mesh.CreateSphere("sphereSix", 6,0.0572, scene);

    // Move the sphere upward 1/2 its height
     sphere.position.z = -.04;
    sphere.position.y = 0.0572/2;
     sphereTwo.position.x =-1;
      sphereTwo.position.y =0.0572/2;
       sphereTwo.position.z = -.5;
    sphereThree.position.x =  -.75;
      sphereThree.position.y =  0.0572/2;;
      sphereThree.position.z = -.07;
          sphereFour.position.x =  -.75;
      sphereFour.position.y =  0.0572/2;;
       sphereFour.position.z = .10;
 sphereFive.position.y =  0.0572/2;
       sphereFive.position.x =  -.325;
         sphereFive.position.z = -.325;
         sphereSix.position.x =  .25;
      sphereSix.position.y =  0.0572/2;
         sphereSix.position.z =  .25;
  


    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground", 2.84,  1.42   , 2, scene);
    var groundTwo = BABYLON.Mesh.CreateGround("groundTwo", .15, 1.42, 2, scene);
      var groundThree = BABYLON.Mesh.CreateGround("groundThree", .15, 1.42, 2, scene);
        var groundFour = BABYLON.Mesh.CreateGround("groundFour", .15, 2.84, 2, scene);
          var groundFive = BABYLON.Mesh.CreateGround("groundFive", .15, 2.84, 2, scene);
   	var box = BABYLON.MeshBuilder.CreateBox("box", {height: .5, width:.5, depth: .5, scene});
    
var boxTwo = BABYLON.MeshBuilder.CreateBox("boxTwo", {height: .05, width:40, depth: .7, scene});
var boxThree = BABYLON.MeshBuilder.CreateBox("boxThree", {height: .25, width:.05, depth: .7, scene});

var boxFour = BABYLON.MeshBuilder.CreateBox("boxFour", {height: .25, width:.05, depth: .7, scene});

var boxFive = BABYLON.MeshBuilder.CreateBox("boxFive", {height: .25, width:.40, depth: .05, scene});

var boxSix = BABYLON.MeshBuilder.CreateBox("boxSix", {height: .25, width:.40, depth: .05, scene});


	box.position.y = 1;
    
  boxTwo.position.z=1.1;
   boxTwo.position.x=1.1;
      boxThree.position.x=2.25;
        boxFour.position.x=-2.25;
        boxThree.position.y=1.25;
        boxFour.position.y=1.25;

   boxTwo.position.y=-.25;
boxFive.position.z=3.25;
        boxSix.position.z=-3.25;
boxFive.position.y=1.25;
        boxSix.position.y=1.25;

    	box.position.x =-.5;
    	box.position.z = -1.5;
    scene.enablePhysics();
		var grid = new BABYLON.GridMaterial("grid", scene);		
		
groundTwo.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
groundThree.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
groundFour.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
groundFour.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
groundFive.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
groundFive.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
groundThree.position.x = -1.42;
groundThree.position.y = 0;
groundFour.position.z = -.71;
groundFour.position.y = 0;
groundFive.position.z = .71;
groundFive.position.y = 0;
groundTwo.position.x = 1.42;
groundTwo.position.y = 0;
	grid.gridRatio = 1;

	grid.majorUnitFrequency = 5;
	// Set the diffuse texture
    sphere.material = grid;
    

 grid.mainColor = new BABYLON.Color4.FromHexString("#770000FF");
    grid.lineColor = new BABYLON.Color4.FromHexString("#FF0000FF");
boxTwo.material = blueMat;
    boxThree.material = blueMat;
    boxFour.material = blueMat;
    boxFive.material = blueMat;
    boxSix.material = blueMat;
    sphereTwo.material = blueMat;
      sphereThree.material = greenMat;
        sphereFour.material = greenMat;
          sphereFive.material = blueMat;
    ground.material = greenMat;
    ground.material.alpha =1;
  groundTwo.material = greenMat;  groundThree.material = greenMat;  groundFour.material = greenMat;  groundFive.material = greenMat;
	sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass:.17, restitution: .10, friction: .050 }, scene);
    sphereTwo.physicsImpostor = new BABYLON.PhysicsImpostor(sphereTwo, BABYLON.PhysicsImpostor.SphereImpostor, { mass: .17, restitution: .10, friction:.050 }, scene);
        sphereThree.physicsImpostor = new BABYLON.PhysicsImpostor(sphereThree, BABYLON.PhysicsImpostor.SphereImpostor, { mass: .17, restitution: .010 , friction: .001 }, scene);
            sphereFour.physicsImpostor = new BABYLON.PhysicsImpostor(sphereFour, BABYLON.PhysicsImpostor.SphereImpostor, { mass: .17, restitution: .10, friction:.050}, scene);
                sphereFive.physicsImpostor = new BABYLON.PhysicsImpostor(sphereFive, BABYLON.PhysicsImpostor.SphereImpostor, { mass: .17, restitution: 0 , friction: .010 }, scene);
  //f  box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.SphereImpostor, { mass:101, restitution:.7 }, scene);

  // boxTwo.physicsImpostor = new BABYLON.PhysicsImpostor(boxTwo, BABYLON.PhysicsImpostor.SphereImpostor, { mass:.00001, restitution:.1 }, scene);
	ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: .011, friction: .6, disableBidirectionalTransformation: false }, scene);
  groundTwo.physicsImpostor = new BABYLON.PhysicsImpostor(groundTwo, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1.5, friction: 0.1 , disableBidirectionalTransformation: false}, scene);
  groundThree.physicsImpostor = new BABYLON.PhysicsImpostor(groundThree, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1.5, friction: 0.1, disableBidirectionalTransformation: false }, scene);
  groundFour.physicsImpostor = new BABYLON.PhysicsImpostor(groundFour, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1.5, friction: 0.1 , disableBidirectionalTransformation: false}, scene);
  groundFive.physicsImpostor = new BABYLON.PhysicsImpostor(groundFive, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution:1.5, friction: 0.1 , disableBidirectionalTransformation: false}, scene);
    
console.log(sphereThree.getAbsolutePosition());

 var myPoints = [];

var point1 = new BABYLON.Vector3(0, 0, 0);
myPoints.push(point1);
var point2 = new BABYLON.Vector3(0, 1, 1);
myPoints.push(point2);
var point3 = new BABYLON.Vector3(0, 1, 0);
myPoints.push(point3);

//or possible the alternative

var myPoints =[
    new BABYLON.Vector3(sphereThree.getAbsolutePosition().x-.1,0.0572/2, sphereThree.getAbsolutePosition().z-.1),
    sphereThree.getAbsolutePosition(),
    new BABYLON.Vector3(sphereThree.getAbsolutePosition().x+.1,0.0572/2, sphereThree.getAbsolutePosition().z+.1)
];
var whateverPoint = new BABYLON.Vector3(0,0,0);
var whateverPointTwo = new BABYLON.Vector3(0.1,0.1,0.1);
    sphereThree.physicsImpostor.applyImpulse(whateverPoint, whateverPointTwo);

	//sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(1, 0, 1));
 // box.physicsImpostor.setLinearVelocity(new BABYLON.Vector3( -3, 2,1));
var g = new BABYLON.Vector3(0, -0.98, 0);



    scene.getPhysicsEngine().setGravity(g);    // Instrumentation
    
 
//creates lines
var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints}, scene);
    return scene;

};

                /******* End of the create scene function ******/    

                var scene = createScene(); //Call the createScene function

            engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene
                    scene.render();
            });


            window.addEventListener("resize", function () { // Watch for browser/canvas resize events
                    engine.resize();
            });