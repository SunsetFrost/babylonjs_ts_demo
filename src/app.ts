import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

class App {
    constructor() {
        const canvas = <HTMLCanvasElement>document.getElementById('demo')!;

        // initialize babylon scene and engine
        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}

new App();
