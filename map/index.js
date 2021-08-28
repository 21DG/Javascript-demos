/**
 * syntex : map((value, index, array), thisArg);
 */
const array = [1, 2, 3, 4, 5];
const userInfoArray = [
    { name: "Dhruv Ghadiali", bloodGroup: "A+", age: 26 },
    { name: "Nency Ghadiali", bloodGroup: "A", age: 25 },
    { name: "Yogesh Ghadiali", bloodGroup: "A+", age: 51 },
    { name: "Sunit Ghadiali", bloodGroup: "B+", age: 48 }
]

array.reduce

/**
 * double the array value.
 */
const response = array.map((value) => value * 2);
console.log("response: ", response);

/**
 * multiple the value with index. 
 */
const multipleIndexResponse = array.map((value, index) => value * index);
console.log("multiple index response: ", multipleIndexResponse);

/**
 * multiple the value with first index. 
 */
 const multipleWithFirstIndex = array.map((value, index, arr) => value * arr[4]);
 console.log("multiple with first index response: ", multipleWithFirstIndex);

/**
 * get the first name.
 */
const userFirstNameResponse = userInfoArray.map((value) => value.name);
console.log("user first name response: ", userFirstNameResponse);

/**
 * get first name where age greter then 30.
 */
const userByAgeResponse = userInfoArray.filter((value) => value.age > 30).map((value) => value.name);
console.log("user first name by age response: ", userByAgeResponse);