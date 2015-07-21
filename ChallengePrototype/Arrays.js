/**
 * Node.js module with utility methods for arrays.
 */

module.exports = {
	/**
	 * Checks if a given element is contained in the array.
	 */
	//TODO: Test
	inArray: function(element, array) {
		for( i in array) {
			if(array[i] === element) {
				return true;
			}
		}
		/*
		forEach(function(e){
			if(e === element) {
				return true;
			}
		});
		*/
		return false;
	},

	/**
	 * Removes the given element from the array.
	 * @return true, if the element was contained in the array.
	 * 		   false, if the element was not contained in the array.
	 */
	//TODO: Test
	remove: function(element, array) {
		var index = array.indexOf(object);
		if(index >=0) {
			array.splice(object);
			return true;
		} else {
			return false;
		}
	},

	/**
	 * Removes all given elements from the array.
	 */
	//TODO: Test
	removeAll: function(elementsToRemove, array) {
		/*
		for(i in elementsToRemove) {
			remove(elementsToRemove[i], array);
		}
		*/
		forEach(function(element){remove(element, array);}, elementsToRemove);
	},

	/**
	 * Returns all elements from an array that satisfy the filter.
	 * Returns an empty array if none satisfy the filter.
	 * The filter function has to be like function(element) 
	 * and returns true if the filter is satisfied and  false if it is not.
	 */
	 //TODO: Test
	filter: function(filter, array) {
		var filteredArray = [];
		
		var lambda = function(element) {
			if(filter(element)) {
				filteredArray.push(element);
			}
		};

		forEach(lambda, array);

		return filteredArray;
	},

	/**
	 * Executes the given function for all elements of the array.
	 */
	//TODO: Test
	forEach: function(lambda, array) {
		for(i in array) {
			lambda(array[i]);
		}
	}
};