$(document).ready(function(){

anime({
  targets: 'div.box',
  duration: 2000,
  translateX: 300,
});

let tl = anime.timeline({
easing: 'easeOutExpo',
duration: 750
});

tl.add({
    targets: '.homepage',
    width: '100%',
    backgroundColor: 'rgb(105,105,105)',
    delay: anime.stagger(100) // increase delay by 100ms for each elements.
})


});
