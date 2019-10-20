window.addEventListener('DOMContentLoaded', ()=>{

    var canvas = document.getElementById("renderCanvas"); 
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function () {

            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 1, 20, new BABYLON.Vector3(0, 0, 0), scene);
            camera.attachControl(canvas, true);

            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(5, 1, 5), scene);
            light1.intensity = 1.0;

            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 10, -10), scene);
            light2.intensity = 1.0;

            var ground = BABYLON.MeshBuilder.CreateGround("gd", {width: 1, height: 1, subdivisions: 1}, scene);

            var groundTiles = [];

            for(var i = 0; i < 4; i++){
                var newTile = BABYLON.MeshBuilder.CreateGround('tile-'+i, {width: 1, height: 1, subdivisions: 1}, scene);
                newTile.position = new BABYLON.Vector3(i, 0, 0);

                var newTileMaterial = new BABYLON.StandardMaterial('tileMat-'+i, scene);

                if(i % 2 > 0){
                    newTileMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
                    newTile.material = newTileMaterial;
                }else{
                    newTileMaterial.diffuseColor = new BABYLON.Color3(0, 0, 1);
                    newTile.material = newTileMaterial;
                }
            }

            return scene;
        };  

        var scene = createScene();

        engine.runRenderLoop(function () { 
                scene.render();
        });

        window.addEventListener("resize", function () { 
                engine.resize();
        });

});
