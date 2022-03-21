

const URL_RANDOMFOX = "https://randomfox.ca/floof";

async function ramdomUrlImagen(){
    const request = await fetch(URL_RANDOMFOX);
    const response = await request.json();
    return response.image;

}

const isIntersecting = (entry) => {
    return entry.isIntersecting;
}
const isNotIntersecting = (entry) => {
    return !entry.isIntersecting;
}

const loadImage = async (entry) =>{
    const nodo_container = entry.target;
    console.log("holis");
    const url = await ramdomUrlImagen();
    nodo_container.firstChild.src = url;
    observer.unobserve(nodo_container);
}

const observer = new IntersectionObserver((entries)=>{
    const currentIntersectingNodes = entries.filter(isIntersecting);
    /* const NotIntersectingNodes = entries.filter(isNotIntersecting);
    console.log(`Load Items: ${currentIntersectingNodes.length}`);
    console.log(`Load Items: ${currentIntersectingNodes.length}`); */
    currentIntersectingNodes.forEach(loadImage);
});

export const subscribeImageObserver = (image) =>{
    observer.observe(image);
}

/* Promise.allSettled([createImageNode()]).then((images)=>{
    images.forEach((img) =>{
        if(img.status === "fulfilled"){
            mountNode.appendChild(img.value);
        }
    });
});
 */