$(function() {
  var container = $('#container');
  var toggle = $('#toggle');

  toggle.on('click', function(){
  container.toggleClass('open');
  toggle.toggleClass('rotate');
  });        
})  