$(document).ready(function(){
  //magnific popup
  $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

// adding the galary allows you to look at all the images at once by clicking on the left right buttons
  gallery:{
    enabled:true
  }
  // other options
});

$(document).ready(function() {
			var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
			var rand = Math.floor(Math.random() * colors.length);
			$('.timeline .timeline-item .timeline-badge.primary').css("background-color", colors[rand]);

});

$(document).ready(function() {
			var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
			var rand = Math.floor(Math.random() * colors.length);
			$('.timeline .timeline-item .timeline-badge.secondary').css("background-color", colors[rand]);

});

});