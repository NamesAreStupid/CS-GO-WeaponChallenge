/**
 * Node.js module with utility methods for arrays.
 */

module.exports = {
	/**
	 * Checks if a given element is contained in the array.
	 */
	inArray: function(array, element) {
		//console.log("array: " + array);
		//console.log("element: " + element);
		if(array.indexOf(element) >= 0 ) {
			return true;
		} else {
			return false;
		}
	},

	/**
	 * Finds the first value in the array that satisfies the finder function.
	 * Oterhwise it returns undefined.
	 */
	find: function(array, finder) {
		var found = undefined;
		for(i in array) {
			if(finder(array[i])) {
				found = array[i];
				break;
			}
		}
		return found;
	},

	/**
	 * Removes the given element from the array.
	 * @return true, if the element was contained in the array.
	 * 		   false, if the element was not contained in the array.
	 */
	remove: function(array, element) {
		var index = array.indexOf(element);
		if(index > -1) {
			array.splice(index, 1);
			return true;
		} 
		return false;
	},

	/**
	 * Removes all given elements from the array.
	 */
	removeAll: function(array, elementsToRemove) {
		/*
		for(i in elementsToRemove) {
			remove(elementsToRemove[i], array);
		}
		*/

		var remove = this.remove;
		this.forEach(elementsToRemove, function(element){
			remove(array, element);
		});
	},

	/**
	 * Returns all elements from an array that satisfy the filter.
	 * Returns an empty array if none satisfy the filter.
	 * The filter function has to be like function(element) 
	 * and returns true if the filter is satisfied and  false if it is not.
	 */
	 //TODO: Test
	filter: function(array, filter) {
		var filteredArray = [];
		
		var lambda = function(element) {
			if(filter(element)) {
				filteredArray.push(element);
			}
		};

		this.forEach(array, lambda);

		return filteredArray;
	},

	/**
	 * Returns all elements from an array that satisfy the filters.
	 * Allows the usage of multiple filters.
	 * Returns an empty array if none satisfy the filter.
	 * The filter function has to be like function(element) 
	 * and returns true if the filter is satisfied and  false if it is not.
	 */
	 //TODO: Test
	filterMultiple: function(array, filters) {
		//obtain filters from the arguments array
		var argArray = Array.prototype.slice.call(arguments);
		var filter = argArray.slice(1);

		var filteredArray = [];

		/*
		for(e in array) {
			var isAllowed = true;
			for(f in filter) {
				if(filter[f](array[e]) === false) {
					isAllowed = false;
					break;
				}
			}
			if(isAllowed) {
				filteredArray.push(array[e]);
			}
		}
		*/

		var forEach = this.forEach;
		this.forEach(array, function(arrayElement){
			console.log(arrayElement)
			var isAllowed = true;

			/*
			for(f in filter) {
				if(filter[f](array[e]) === false) {
					isAllowed = false;
					break;
				}
			}
			*/
			forEach(filter, function(filterElement){
				if(filterElement(arrayElement) === false) {
					isAllowed = false;
					return false;
				}
				return true;
			});
			if(isAllowed) {
				filteredArray.push(arrayElement);
			}
		});

		return filteredArray;

	},

	/**
	 * Executes the given function for all elements of the array. 
	 * Stops Execution if lambda function returns false.
	 */
	forEach: function(array, lambda) {
		for(i in array) {
			if(lambda(array[i]) === false ) {
				break;
			}
		}
	}
};