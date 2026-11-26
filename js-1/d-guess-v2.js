// ד. ניחוש עם כפתורים
const secret = Math.floor(Math.random() * 20) + 1;
const titleColor = "green";

let html = "<h1>נחשי מספר בין 1 ל-20</h1>";

for (let i = 1; i <= 20; i++) {
  let action = "";

  if (i < secret) {
    action = `alert('${i} קטן מהמספר הסודי. נסי מספר גדול יותר')`;
  } else if (i > secret) {
    action = `alert('${i} גדול מהמספר הסודי. נסי מספר קטן יותר')`;
  } else {
    action = `document.body.style.color = '${titleColor}'; document.body.innerHTML = '<h1>כל הכבוד! ניחשת נכון, המספר הסודי הוא ${secret}</h1>'`;
  }

  html += `<button onclick="${action}">${i}</button> `;
}

document.body.innerHTML = html;