const squares = document.querySelectorAll('.work-section__drag-item');
const lines = document.querySelectorAll('.line');

let isDragging = false;
let startX, startY, startLeft, startTop;
let draggedItem = null;

squares.forEach(square => {
  square.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    draggedItem = square;

    startLeft = square.offsetLeft;
    startTop = square.offsetTop;

    Array.from(lines).forEach(item => (item.style.opacity = 0));
  });

  square.addEventListener('mousemove', e => {
    if (isDragging && draggedItem) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      draggedItem.style.left = `${startLeft + deltaX}px`;
      draggedItem.style.top = `${startTop + deltaY}px`;
    }
  });

  square.addEventListener('mouseup', () => {
    if (isDragging && draggedItem) {
      isDragging = false;

      startLeft = 0;
      startTop = 0;
    }
  });

  square.addEventListener('mouseleave', () => {
    if (isDragging && draggedItem) {
      isDragging = false;

      startLeft = 0;
      startTop = 0;
    }
  });
});