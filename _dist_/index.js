/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {subscribeImageObserver} from './lazy.js'

console.log('Actitud de Viernes :)')

function createImageNode() {
    const img_container = document.createElement('div');
    img_container.className="p-4";
    const img = document.createElement('img');
    img.className ="mx-auto";
    img.width = "320";
    img.height = "320";
    img.style.backgroundColor = "#d3d3d3";
    img_container.appendChild(img);
    return img_container;
}


const mountNode = document.querySelector("#images");
const btnAgregar = document.getElementById("btnagregar");
const btnLimpiar = document.getElementById("btnlimpiar");

btnLimpiar.onclick = function(){
    while(mountNode.firstChild){
        mountNode.removeChild(mountNode.firstChild);
    }
}

btnAgregar.onclick = function(){
    const nodo = createImageNode();
    mountNode.appendChild(nodo);
    subscribeImageObserver(nodo);
}


