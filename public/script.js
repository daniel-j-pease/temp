window.onload = ( () =>{

  const phi = 1.61803398875;

  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const title = document.getElementById('title');
  let pxStr = 'px'

  const barOne = document.getElementById('bar-one');
  const barTwo = document.getElementById('bar-two');
  const barThree = document.getElementById('bar-three');
  const barFour = document.getElementById('bar-four');

  const firstLeft = first.getBoundingClientRect().left;
  const lastRight = last.getBoundingClientRect().right;

  console.log(firstLeft, lastRight)

  first.style.right = window.innerWidth - (window.innerWidth*(1/phi)) + pxStr;
  last.style.left = window.innerWidth - (window.innerWidth*(1/phi)) + pxStr;
  first.style.bottom = window.innerHeight/phi + pxStr;
  last.style.top = window.innerHeight - (window.innerHeight/phi) + pxStr;
  title.style.top = window.innerHeight/phi + pxStr;

  barOne.style.width = lastRight - firstLeft + pxStr;
  barOne.style.right = first.style.right

  function proportion() {
    first.style.right = window.innerWidth - (window.innerWidth*(1/phi)) + pxStr;
    last.style.left = window.innerWidth - (window.innerWidth*(1/phi)) + pxStr;
  }

  window.addEventListener('resize', proportion)
})
