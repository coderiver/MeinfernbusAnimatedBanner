function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
  }
}
function bus(){
	uberbus = document.getElementById('uberbus');
	removeClass(uberbus, 'bus_ride');
	addClass(uberbus,'bus_stay');
}
DomReady.ready(function() {
	setTimeout(bus, 25000);
});