// Write your solution in this file!
// helpers.js

// Variable: customerName (global scope)
// Description: Declared and initialized to 'bob'
var customerName = 'bob';

// Function: upperCaseCustomerName
// Description: Modifies customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Variable: bestCustomer (global scope)
// Description: Initially undefined
var bestCustomer;

// Function: setBestCustomer
// Description: Sets bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function: overwriteBestCustomer
// Parameters: newBestCustomer (String)
// Description: Overwrites bestCustomer with a new value
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Constant: leastFavoriteCustomer (global scope)
// Description: Declared as a constant with initial value 'initial least favorite'
const leastFavoriteCustomer = 'initial least favorite';

// Function: changeLeastFavoriteCustomer
// Description: Tries to reassign the leastFavoriteCustomer (will throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new least favorite'; // This will throw an error
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  bestCustomer,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};
