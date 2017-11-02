import Packery from 'packery';
import Draggabilly from 'draggabilly';

let pckry = new Packery('.assets', {
  columnWidth: '.packery-sizer',
  itemSelector: '.packery-object',
  rowHeight: '.packery-sizer',
  draggable: true,
  handle: '*'
});

document.querySelectorAll('.packery-object').forEach(i => {
  let draggie = new Draggabilly(i);
  pckry.bindDraggabillyEvents(draggie);
});

pckry.on('layoutComplete', () => {
  pckry.element.parentElement.classList.add("packed");
});
pckry.layout();
