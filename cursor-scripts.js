const coords = { x: 0, y: 0 };
const squares = document.querySelectorAll(".square");

const colors = [ "#6431ff", "#970aed", "#ba00da", "#d300c6", "#e600b1", "#f4009c", "#fd0088", "#ff0075", "#ff0062", "#ff0051", "#ff0041", "#ff3131"
];

squares.forEach(function (square, index) {
	square.x = 0;
	square.y = 0;
  square.style.backgroundColor = colors[index % colors.length];
});


window.addEventListener("mousemove", function(e){
	coords.x = e.clientX;
	coords.y = e.clientY;
});

function animateSquares(){
  let x = coords.x;
  let y = coords.y;
  
  squares.forEach(function (square, index) {
		square.style.left = x + "px";
		square.style.top = y + "px";
    
    square.style.scale = (squares.length - index) / squares.length;
    
    square.x = x;
    square.y = y;
    
    const nextSquare = squares[index + 1] || squares[0];
    x += (nextSquare.x - x) * 0.3;
    y += (nextSquare.y - y) * 0.3;
    
	});
  
  requestAnimationFrame(animateSquares);
}

animateSquares();