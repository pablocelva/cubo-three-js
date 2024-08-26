//import * as THREE from 'three'
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(760, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//Método ejercicio
/*const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0x0653740 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)*/

const geometry = new THREE.BoxGeometry()

// Función para generar un color aleatorio
function getRandomColor() {
    // Genera un color hexadecimal aleatorio
    return Math.floor(Math.random() * 0xffffff) 
}

// Array de materiales, uno para cada cara del cubo
const materials = [
    new THREE.MeshBasicMaterial({ color: getRandomColor() }), // Frente
    new THREE.MeshBasicMaterial({ color: getRandomColor() }), // Atrás
    new THREE.MeshBasicMaterial({ color: getRandomColor() }), // Arriba
    new THREE.MeshBasicMaterial({ color: getRandomColor() }), // Abajo
    new THREE.MeshBasicMaterial({ color: getRandomColor() }), // Izquierda
    new THREE.MeshBasicMaterial({ color: getRandomColor() })  // Derecha
];

// Crear el cubo con los materiales
const cube = new THREE.Mesh(geometry, materials)
scene.add(cube)

camera.position.z = 5

// Función para ajustar el tamaño de la ventana
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

// Añadimos un evento para detectar el redimensionamiento de la ventana
window.addEventListener('resize', onWindowResize, false)


function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.03
    cube.rotation.y += 0.02

    renderer.render(scene, camera)
}

animate()

// Lógica del botón para cambiar los colores de las caras del cubo
document.getElementById('changeColorButton').addEventListener('click', function() {
    cube.material.forEach(material => {
        material.color.setHex(getRandomColor());
    });
});