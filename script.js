var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay:true,
  draggable: true,
  prevNextButtons: false,
  wrapAround: true,
  groupCells: true
});



var elem2 = document.querySelector('.main-carousel2');
var flkty = new Flickity( elem2, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay:true,
  draggable: true,
  prevNextButtons: false,
  wrapAround: true,
  groupCells: true
});


function openNav(){
  var toggleNav=document.getElementById("toggle_nav"
  )
 
  toggleNav.style.transform="scale(1)";
  toggleNav.style.opacity="1";

}

function closeNav(){
  var toggleNav=document.getElementById("toggle_nav"
  )
 
  toggleNav.style.transform="scale(0)";
  toggleNav.style.opacity="0";

}