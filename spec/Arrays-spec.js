var arrays = require('../Util/Arrays');

describe("Arrays.js", function() {
	var array;
	beforeEach(function() {
		array = ["Cat", "Dog", "Fish"];
	});

	describe("inArray", function() {

		it("should return true if the element exists in the array", function() {
			expect(arrays.inArray(array, "Dog")).toBeTruthy();
		});

		it("should return false if the element doesn't exist in the array", function() {
			expect(arrays.inArray(array, "Cow")).toBeFalsy();
		});
	});

	describe("find", function() {
		it("should find the element in the array", function() {
			expect(element = arrays.find(array, function(element) {
				return element === "Cat";
			})).toEqual("Cat");
		});
	});

	describe("remove", function() {
		it("should remove an existing element from the array", function() {
			arrays.remove(array, "Fish");
			expect(array).not.toContain("Fish");
		});

		it("should not manipulate the array if the element to remove can't be found", function() {
			var newArray = array.slice(0);
			arrays.remove(array, "Cow")
			expect(array).toEqual(newArray);
		});
	});

	describe("removeAll", function() {
		it("should remove existing elements from the array", function() {
			arrays.removeAll(array, ["Fish", "Cat"]);
			expect(array).not.toContain("Fish");
			expect(array).not.toContain("Cat");
		});

		it("should not manipulate the array if the element to remove can't be found", function() {
			var newArray = array.slice(0);
			arrays.removeAll(array, ["Cow", "Pidgeon"]);
			expect(array).toEqual(newArray);
		});
	});

	describe("filter", function() {
		it("should return a filtered array", function() {
			expect(arrays.filter(array, function(element) {
				if(element != "Dog") {
					return true;
				} else {
					return false;
				}
			})).not.toContain("Dog");
		});
	});

	describe("filterAll", function() {
		it("should return a filtered array, using multiple filters", function() {
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
			expect(newArray).not.toContain("Dog");
			expect(newArray).not.toContain("Cat");
		});
	});

	describe("forEach", function() {
		it("should calculate the sum of all numbers in the array", function() {
			var array = [1, 2, 3, 4];
			var counter = 0;
			arrays.forEach(array, function(element) {
				counter += element;
			});
			expect(counter).toBe(10);
		});

		it("should manipulate all elements in the array", function() {
			var array =["", "", ""];
			var newArray = [];
			arrays.forEach(array, function(element) {
				newArray.push(element += "a");
			});
			expect(newArray).toEqual(["a", "a", "a"]);
		});

		it("should stop exectuin if lambda returns false", function() {
			var newArray = [];
			arrays.forEach(array, function(element) {
				if(element === "Dog") {
					return false;
				} else {
					newArray.push(element);
				}
			});
			expect(newArray).toEqual(["Cat"]);
		});
	});
});

