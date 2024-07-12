// let arr = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(arr.length);
// arr.push(5);
// arr.push(3);
// arr.push(1);
// arr.push(4);
// arr.push(2); //inserts value at end
// arr.unshift(7); //inserts value at beginning
// console.log(arr);
// arr.pop(); //removing element from end
// arr.shift();//removes front element
// console.log(arr);
// console.log(arr.slice(0, 3)); //set of values from start to end indexes
// console.log(arr);
// console.log(arr.reverse()); //reverse the array
// console.log(arr.splice(0, 3));//set of values from start to end indexes removes the values from the array
// console.log(arr);
// let arr = new Array(1, 2, 3, 4, 5, 6, 7);
// let pos = 3;
// let value = 9;

// let a1 = arr.slice(0, pos);
// let a2 = arr.slice(pos);
// console.log(a1);
// console.log(a2);
// a1.push(value);
// console.log(a1);
// let a = a1.concat(a2); //merges to arrays
// console.log(a);

// console.log(arr.indexOf(5)); //return index when present
// console.log(arr.indexOf(9)); //return -1 when absent

// console.log(arr.includes(5)); //return true when present
// console.log(arr.includes(9)); // return false
// let arr = new Array(5, 3, 7, 2, 6, 1, 4);
// arr.sort();
// console.log(arr);

// //String operations
// let str1 = "Shashi"; //double quotes
// let str2 = "Shreedhar"; //single quotes
// let str3 = `Praveen`; //backticks notations
// let str4 = new String("Aravind"); //creating using a string object

// console.log(str1, str2, str3, str4);

// let str = "Harinath";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i], str.charAt(i));
// }
// console.log(str.indexOf("ari"));
// console.log(str.lastIndexOf("a"));
// console.log(str.includes("nath"));

// console.log(str.slice(2, 6));
// console.log(str.substring(2, 6));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.replace("nath", "sh"));
// console.log(str.startsWith("Arju"));
// console.log(str.endsWith("jun"));

// let str = "    Arjun   ";
// console.log("Hello " + str + " Bye");
// console.log("Hello " + str.trim() + " Bye");
// console.log("Hello " + str.trimStart() + " Bye");
// console.log("Hello " + str.trimEnd() + " Bye");

// let str1 = "Shree ";
// let str2 = "Shankar";
// let str3 = str1.concat(str2);
// console.log(str3);

// let str = new String("Jayanth");
// console.log(str.padStart(10));

// let ob = {
//   name: "Avinash",
//   age: 20,
//   qualification: "Btech",
// };

// console.log(ob);
// console.log(ob.name);
// console.log(ob["name"]); //accessing the values
// ob["age"] = 21; //modifying
// ob["city"] = "Chennai"; //adding new property
// delete ob["qualification"]; //remove property
// console.log(ob);

// for (let i in ob) {
//   console.log(i + "--> " + ob[i]);
// }

// let a1 = [1, 2, 3, 4];
// let a2 = [5, 6, 7, 8];
// let a3 = [...a1, ...a2];
// console.log(a3);

// let std1 = {
//   name: "Ramya",
//   age: 21,
//   city: "Chennai",
//   qualification: "btech",
// };
// let std2 = {
//   name: "Harish",
//   age: 22,
//   city: "Hyderabad",
// };
// console.log("qualification" in std1);
// console.log("qualification" in std2);
// console.log(std1.hasOwnProperty("qualification"));
// console.log(std2.hasOwnProperty("qualification"));

// let age = Symbol("age");
// let ob = {
//   name: "Shreya",
//   [age]: 20,
// };
// console.log(ob[age]);
