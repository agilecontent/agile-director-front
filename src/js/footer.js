import Packery from 'packery';
import Draggabilly from 'draggabilly';

let pckry = new Packery('.packery-container', {
  draggable: true,
  isInitLayout: false
});

document.querySelectorAll('.draggable').forEach(i => {
  let draggie = new Draggabilly(i);
  pckry.bindDraggabillyEvents(draggie);
});

pckry.on('layoutComplete', () => {
  pckry.element.parentElement.classList.add("packed");
});
pckry.layout();
