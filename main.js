import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.19/+esm';

function main () {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const clock = new THREE.Clock(true);

    const controls = new OrbitControls(camera, renderer.domElement);

    var img_scale = new THREE.Vector3(1, 1, 1);
    const image = new THREE.TextureLoader().load("source/chiseled-cobble_albedo.png", function () {
         img_scale.y = image.source.data.height / image.source.data.width;
         img_scale.x = image.source.data.width / image.source.data.width;
    });
    const heightmap = new THREE.TextureLoader().load("source/chiseled-cobble_height.png");
    const image2 = new THREE.TextureLoader().load("source/peacock-ore_albedo.png");
   const heightmap2 = new THREE.TextureLoader().load("source/peacock-ore_height.png");

    var uniform = {
        image: {type: 't', value: image},
        heightmap: {type: 't', value: heightmap},
        grayscale: {value: false},
        depth: {type: 'f', value: 2}
    };

    const gui = new GUI();
    let gui_items = {
        Example: 1,
    }
    gui.add( gui_items, 'Example', { Road: 1 , Stone: 2 });
    gui.add( uniform.grayscale, 'value', { Color: false , HeightMap: true });
    gui.add( uniform.depth, 'value', 0, 100, 1);

    const vs = document.getElementById('vs').textContent;
    const fs = document.getElementById('fs').textContent;

    const geometry = new THREE.PlaneGeometry(100, 100, 200, 200);
    const mat = new THREE.ShaderMaterial({vertexShader: vs, fragmentShader: fs, uniforms: uniform});
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.scale.set(1, 1);
    scene.add(mesh);

    window.addEventListener('keyup', function (e) {
        if (e.key == "g") {
            uniform.grayscale.value = !uniform.grayscale.value;
        }
    })


    function animate () {
        if (mesh.scale !== img_scale) {
            mesh.scale.set(img_scale.x, img_scale.y, img_scale.z);
        }
        if (gui_items.Example == 1 && uniform.image.value !== image) {
            uniform.image.value = image;
            uniform.heightmap.value = heightmap;
            img_scale.y = image.source.data.height / image.source.data.width;
            img_scale.x = image.source.data.width / image.source.data.width;
        }
        if (gui_items.Example == 2 && uniform.image.value !== image2) {
            uniform.image.value = image2;
            uniform.heightmap.value = heightmap2;
            img_scale.y = image2.source.data.height / image2.source.data.width;
            img_scale.x = image2.source.data.width / image2.source.data.width;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate)
    }
    animate();
}



document.onload = main();

console.log("loaded");