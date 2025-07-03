// ✅ 1. Double Even Numbers Only
// Description:
// Write a function `doubleEvens(arr)` that takes an array of numbers and returns a new array
// with only the even numbers, each doubled. Use `filter` and `map` — no loops allowed.

let arr = [1, 2, 3, 4]
function doubleEvens(arr) {
  let newArr = arr.filter(x => x%2===0);
  newArr = newArr.map(x => x*2);
  return newArr;
}
console.log(doubleEvens(arr));

// ✅ 2. Merge User Settings with Defaults
// Description:
// Write a function `mergeSettings(defaults, overrides)` that merges two objects using spread syntax,
// giving priority to the overrides. Return a new object and ensure the originals are not mutated.

let defaults = { color: 'red' , size: 'medium' };
let overrides = { color : 'blue', length: 'long' };
  
function mergeSettings(defaults, overrides) {
  let mergedSettings = { ...defaults, ...overrides};
  return mergedSettings;
}
console.log(mergeSettings(defaults, overrides));

// ✅ 3. Loose vs Strict Equality
// Description:
// Implement two functions: `isLooselyEqual(a, b)` and `isStrictlyEqual(a, b)` to compare values
// using `==` and `===` respectively.

let a=0;
let b= "0";
function isLooselyEqual(a, b) {
  return a == b;
}

function isStrictlyEqual(a, b) {
  return a===b;
}
console.log(isLooselyEqual(a, b));
console.log(isStrictlyEqual(a, b));

// ✅ 4. Update a Nested Array in Object
// Description:
// Write a function `updateTags(user, newTag)` that returns a new user object with the newTag
// added to the `tags` array, without mutating the original object.

let user = { name: 'Vasiliki', tags: ["student", "developer"]};
let newTag = "dancer";
function updateTags(user, newTag) {
  let updatedTags = [...user.tags, newTag];
  let updatedUser = {...user, tags: updatedTags};
  return updatedUser;
}
console.log(updateTags(user, newTag));

// ✅ 5. Reduce to Object Map
// Description:
// Write a function `arrayToMap(users)` that takes an array of user objects with `id` and `name`,
// and returns an object where keys are IDs and values are names.

let users = [ {id: 1, name: "Vasiliki"}, {id: 2, name:"Max"}, {id: 3, name: "Alice"}, {id: 4, name: "George"}];

function arrayToMap(users) {
 return users.reduce(function (map, user){
  map[user.id] = user.name;
  return map;
 }, {})
}
console.log(arrayToMap(users));
