// ב. מצאי את השגיאות

// שגיאה 1: חסרות מרכאות פתיחה במחרוזת "רחל", ואי אפשר לשנות משתנה שהוגדר עם const
const userName = "שרית";

// שגיאה 2: חיבור עם "5" הפך את score למחרוזת ("105") במקום לחבר מספרית (15)
let score = 10;
score = score + 5;

// שגיאה 3: סדר סוגריים הפוך ב-console.log
console.log("הציון הוא: " + score);

// שגיאה 4: חסר אופרטור השוואה === בתנאי if וסדר סוגריים הפוך ב-console.log
if (score === 100) {
  console.log("!מושלם");
}

// שגיאה 5: חסר סוגר עגול סוגר אחרי i++ ב-for, ושגיאת כתיב usrName במקום userName
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(userName);