console.log("\n1. Double Even Numbers Only");
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
console.log("---------------------------------------------------------------");

console.log("\n2. Merge User Settings with Defaults");

// ✅ 2. Merge User Settings with Defaults
// Description:
// Write a function `mergeSettings(defaults, overrides)` that merges two objects using spread syntax,
// giving priority to the overrides. Return a new object and ensure the originals are not mutated.

/*
Spread Syntax
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]
*/

function mergeSettings(defaults, overrides) {
  let finalSettings = {};
  
  finalSettings = { ...defaults, ...overrides };
  
  return finalSettings;
}

const defaultSettings = {username: "Antonio", profile_picture: "default.png"};

const userOverrides = {username: "Antonio Robio", profile_picture: "updated.png"};

const merged = mergeSettings(defaultSettings, userOverrides);
console.log(merged); 
console.log("---------------------------------------------------------------");

console.log("\n3. Loose vs Strict Equality");
// ✅ 3. Loose vs Strict Equality
// Description:
// Implement two functions: `isLooselyEqual(a, b)` and `isStrictlyEqual(a, b)` to compare values
// using `==` and `===` respectively.

function isLooselyEqual(a, b) {
  const result = (a == b);
  console.log(`Loose Equality ==: ${a} (${typeof a}) == ${b} (${typeof b}): ${result}\n`);
  return result;
}

function isStrictlyEqual(a, b) {
  const result = (a === b);
  console.log(`Strict Equality ===:  ${a} (${typeof a}) === ${b} (${typeof b}): ${result}\n`);
  return result;
}

isLooselyEqual(5, '5'); // true, because '5' is coerced to a number
isStrictlyEqual(5, '5'); // false, they are of different types

isLooselyEqual(null, undefined); // true, because null and undefined are loosely equal
isStrictlyEqual(null, undefined); // false, they are of different types

isLooselyEqual(true, 1); // true, because true is coerced to 1
isStrictlyEqual(true, 1); // false, they are of different types 
console.log("---------------------------------------------------------------");


console.log("\n4. Update a Nested Array in Object");
// ✅ 4. Update a Nested Array in Object
// Description:
// Write a function `updateTags(user, newTag)` that returns a new user object with the newTag
// added to the `tags` array, without mutating the original object.

function updateTags(user, newTag) {
  const updatedUser = {...user, tags: [...user.tags, newTag]};
  return updatedUser;
}

const user1 = {name: 'Antonio', tags: ['montheditor', 'featured', 'inactive', 'founder']};
const user2 = {name: 'Cate', tags: ['montheditor', 'featured', 'inactive', 'founder']};


const updated_user1 = updateTags(user1, 'nonuser');
const updated_user2 = updateTags(user2, 'newuser');

console.log('Original:', user1); // {name: 'Alice', tags: ['admin', 'editor']}
console.log('Updated:', updated_user1); // {name: 'Alice', tags: ['admin', 'editor', 'nonuser']}

console.log('Original:', user2); // {name: 'Alice', tags: ['admin', 'editor']}
console.log('Updated:', updated_user2); // {name: 'Alice', tags: ['admin', 'editor', 'newuser']}
console.log("---------------------------------------------------------------");

console.log("\n5. Reduce to Object Map");
// ✅ 5. Reduce to Object Map
// Description:
// Write a function `arrayToMap(users)` that takes an array of user objects with `id` and `name`,
// and returns an object where keys are IDs and values are names.

function arrayToMap(users) {
  // Initialize an empty object to hold the map
  const map = {};

  // Step 1: Iterate through the array of users
  for (let i = 0; i < users.length; i++) {
    const user = users[i]; // Get the current user object
    
    // Step 2: For each user, add an entry to the map with user.id
    map[user.id] = user.name;
  }
  return map;
}

// Alternative version using reduce:
function arrayToMapWithReduce(users) {
  let map = {};

  users.reduce(function(currentMap, user) {
    currentMap[user.id] = user.name;
    return currentMap;
  }, map);
  return map;
}

const users = [
  { id: 1, name: 'Antonio' },
  { id: 2, name: 'Cate' },
  { id: 3, name: 'Charlie' }
];

console.log(arrayToMap(users));
console.log(arrayToMapWithReduce(users));
