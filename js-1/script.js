// א1
const fullName = "שרית הררי";
let age = 19;
const city = "בני ברק";
const isStudent = true;

console.log(`שמי ${fullName}, גילי ${age}, אני גרה ב${city}, תלמידה: ${isStudent}`);

age++;
console.log(`בשנה הבאה אהיה בת ${age}`);

// א2
// השערות לפני הרצה:
// 42 -> "number", 3.14 -> "number", "שלום" -> "string", null -> "object", undefined -> "undefined", true -> "boolean"
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof "שלום");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);

// השערות המרות:
// "5" + 3 -> "53", "5" - 3 -> 2, "5" * "2" -> 10, 7 / 2 - 1 -> 2.5
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(7 / 2 - 1);

// א3
// השערות לפני הרצה:
// 5 == "5" -> true, 5 === "5" -> false, 0 == false -> true, 0 === false -> false
// null == undefined -> true, null === undefined -> false, NaN === NaN -> false, "a" === "a" -> true
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN === NaN);
console.log("a" === "a");

console.log(Boolean(0));
console.log(Boolean("false"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean("0"));
console.log(Boolean(-1));

// עדיף להשתמש ב-=== כי הוא בודק שוויון ללא המרת טיפוסים אוטומטית ומונע באגים מפתיעים.