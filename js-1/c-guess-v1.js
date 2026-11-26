// ג. ניחוש המספר - גרסה 1
do {
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly) {
    const input = prompt("נחשי מספר בין 1 ל-20:");
    if (input === null) {
      break;
    }

    const guess = Number(input);
    if (Number.isNaN(guess)) {
      alert("אנא הזיני מספר תקין.");
      continue;
    }

    attempts++;

    if (guess === secretNumber) {
      guessedCorrectly = true;
      let rating = "אפשר לשפר";
      if (attempts <= 3) {
        rating = "מדהים!";
      } else if (attempts <= 6) {
        rating = "יפה מאוד";
      }

      const finalMessage = `${rating} ניחשת אחרי ${attempts} ניסיונות!`;
      alert(finalMessage);
      console.log(finalMessage);
    } else if (guess > secretNumber) {
      alert("גבוה מדי");
    } else {
      alert("נמוך מדי");
    }
  }
} while (confirm("לשחק שוב?"));