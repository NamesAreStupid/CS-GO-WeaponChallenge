var arrays = require('./Arrays.js');
/*
var array = [1,2,3,4];

arrays.forEach(array, function(element) {
	element = 0;
	console.log(array);
	return false;

});
*/

var array = ["Cat", "Dog", "Fish"];

var dogFilter = function(element) {
	if(element != "Dog") {
		return true;
	} else {
		return false;
	}
};
var catFilter = function(element) {
	if(element != "Cat") {
		return true;
	} else {
		return false;
	}
};
var newArray = arrays.filterMultiple(array, dogFilter, catFilter);

//var newArray = array.slice(1);
console.log(newArray);