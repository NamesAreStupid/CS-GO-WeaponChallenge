$(document).ready(

);

var subject = {
	oberverList = [],
	function addObserver(observer) {
		oberverList.push(observer);
	},
	function removeObserver(observer) {
		remove(oberverList, observer);
	},
	function update(value) {
		forEach(observerList, function(element) {
			element.update(value);
		});
	}
};

var observer = {
	function update(value) {
		
	}
}