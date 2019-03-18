(() => {
  // I cab;t velieve you don[''t appreciate my amazin atwork
  const box = document.querySelector('.box');

  //  look at it! it is red!
// basic structure of a TweenMax tween;
// TweenMax.to(el, time, {properties});
// TweenMax.to(box, 0.8, {x: 400, rotation: 180, scaleX: 1.5, scaleY: 1.75 });
function startAnimation(){
  TweenMax.to(box, 0.8, { x: 500, rotation: 180, scaleX: 1.5, scaleY: 1.75 });
}

function resetAnimation() {
TweenMax.to(box, 0.8, { x: 0, rotation: 0, scaleX: 1, scaleY: 1 });
}

box.addEventListener("mouseover", startAnimation);
box.addEventListener("mouseout", resetAnimation);
})();
