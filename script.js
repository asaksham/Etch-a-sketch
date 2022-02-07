const sketchbox = document.querySelector(".sketchbox");
const changeButton = document.querySelector(".changeButton");
const sketchboxSize = sketchbox.clientHeight;
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let gridsize = 16;
let boxsize = sketchboxSize / gridsize;

changeButton.addEventListener('click', changeGrid);

function changeGrid() {

    let newGridSize = prompt("Please enter new Grid Size", "16");
    if (newGridSize == null || newGridSize == "" || newGridSize > 100) {
        return;
    } else {
        gridsize = newGridSize;
        boxsize = sketchboxSize / gridsize;
        setgrid();

    }
}

function setgrid() {
    removeAllChildNodes(sketchbox);

    for (let i = 0; i < gridsize * gridsize; i++) {
        let box = document.createElement("div");
        box.setAttribute("style", `height:${boxsize}px;width:${boxsize}px;`)
        box.classList.add("box")
        sketchbox.appendChild(box);
    }
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((item) => item.addEventListener("mouseover", changeColorOnClick));
    boxes.forEach((item) => item.addEventListener("mousedown", changeColorOnClick));

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeColorOnClick(e) {
    // if(e.type)
    if (e.type === 'mouseover' && !mouseDown) return;

    // console.log(item);
    e.target.style.backgroundColor = randomrgb();

}

function randomrgb() {
    let o = Math.floor;
    let r = Math.random;
    let s = 255;
    return `rgb( ${o(r() * s)}+${o(r() * s)}+${o(r() * s)}`;
}

setgrid();