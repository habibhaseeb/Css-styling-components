const element1 = document.getElementById('first-name');
const element2 = document.getElementById('last-name');

function applyStyling() {
    element1.style.outline = '2px solid blue';
    element1.style.borderRadius = '5px';
}
function another() {
    element2.style.outline = '2px solid blue';
    element2.style.borderRadius = '5px';
}
function removeStyling() {
    element1.style.outline = 'none';
    element1.style.borderRadius = '0px';
}

let click = true;

let apply = setInterval(() => {
    click = false;
    clearInterval(apply); // Stop the interval after setting click to false
}, 2000);

if (click === true) {
    element1.onclick = applyStyling ,
    element2.onclick = another;
}
 else {
   (element1 , element2).onclick = removeStyling;
}
