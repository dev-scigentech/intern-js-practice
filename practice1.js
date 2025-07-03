// ✅ 1. Double Even Numbers Only
// Description:
// Write a function `doubleEvens(arr)` that takes an array of numbers and returns a new array
// with only the even numbers, each doubled. Use `filter` and `map` — no loops allowed.

function doubleEvens(arr) {
  // Step 1: Filter only even numbers from the input array
  let newNumbers = arr.filter(x => x%2 == 0);

  // Step 2: Double each even number
  newNumbers = newNumbers.map(x => x*2);

  // Step 3: Return the new array with doubled even numbers
  return newNumbers;
}

console.log(doubleEvens([1, 2, 3, 4, 5, 6])); 

// Alternative version using a for loop:
/* 
function doubleEvens(arr) {
  const newNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newNumbers.push(arr[i] * 2);
    }
  }
  return newNumbers;
}
*/

//-----------------------------------------------------------------------------------------------------------------

// ✅ 2. Merge User Settings with Defaults
// Description:
// Write a function `mergeSettings(defaults, overrides)` that merges two objects using spread syntax,
// giving priority to the overrides. Return a new object and ensure the originals are not mutated.

function mergeSettings(defaults, overrides) {}

// ✅ 3. Loose vs Strict Equality
// Description:
// Implement two functions: `isLooselyEqual(a, b)` and `isStrictlyEqual(a, b)` to compare values
// using `==` and `===` respectively.

function isLooselyEqual(a, b) {}

function isStrictlyEqual(a, b) {}

// ✅ 4. Update a Nested Array in Object
// Description:
// Write a function `updateTags(user, newTag)` that returns a new user object with the newTag
// added to the `tags` array, without mutating the original object.

function updateTags(user, newTag) {
  return updatedUser;
}

// ✅ 5. Reduce to Object Map
// Description:
// Write a function `arrayToMap(users)` that takes an array of user objects with `id` and `name`,
// and returns an object where keys are IDs and values are names.

function arrayToMap(users) {}
