var mql = window.matchMedia('screen and (min-width: 1366px)');
if (mql.matches) {
  doParalax();
}

function doParalax() {
  $(document).ready(function() {
    $('.wrap').mousemove(function(e) {
      parallax(e, document.getElementById('card'), 1);
    });
  });
};

function parallax(e, target, layer) {
  var strength = 20;
  var layer_coeff = strength / layer;
  var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
  var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
  $(target).offset({
    top: y,
    left: x
  });
};
