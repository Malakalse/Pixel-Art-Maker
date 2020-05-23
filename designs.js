// Storing grid color value
var colors = document.getElementById('colorPicker').value;

// Storing table canvas
var canvas = document.getElementById('pixel_canvas');

//using ajaz to create an event listener that take action when Submit button is clicked.
$('#submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

// a small function to change the color * onchange *
function changeColor(e) {

  colors = e.target.value
}

// a small function to clear the cavans if you want to create new design :)  * onclick *
function clearCavanse(e) {
  canvas.innerHTML = '';
}

function makeGrid() {
  // Storing grid height value
  var Height = document.getElementById('height').value;
  // Storing grid width value
  var Width = document.getElementById('width').value;

  // here if you clicked on submit button again it will clear the color :)
  canvas.innerHTML = '';


  let addEvent = function(cell) {
      cell.addEventListener('click', function() {
          cell.style.backgroundColor = colors;
      });
  }



  for (let i = 0; i < Height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < Width; j++) {
        let cell = row.insertCell(j);
        cell.addEventListener('click', addEvent(cell));
    }
}



}
