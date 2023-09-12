// *
// * 1_2
// *
console.log("- 1_2 --------------------");

function intro2(paramName) {
  let name = "SuperCoder:in";

  console.log("Hi " + name + ". Mein Name ist " + paramName + ".");
  //   keine Leerzeichen zwischen den + bei der Eingabe!!
}

intro2("Max Mustermann");
intro2("Mareike Musterfrau");

// *
// * 1_3
// *
console.log("- 1_3 --------------------");

function intro3(name, stadt, alter) {
  console.log(
    "Hallo, mein Name ist " +
      name +
      ". Ich bin " +
      alter +
      " Jahre alt. Ich komme aus " +
      stadt +
      "."
  );
}

intro3("Max", "Berlin", 30);
intro3("Mareike", "Köln", 25);

// *
// * 1_5
// *
console.log("- 1_5 --------------------");

function math(x, y) {
  let product = x * y;
  let quotient = x / y;
  console.log("Multiplikation von " + x + " und " + y + ": " + product);
  console.log("Division von " + x + " und " + y + ": " + quotient);
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

// *
// * 1_4
// *
console.log("- 1_4 --------------------");

function hero(heroName, heroPower, heroEnemy) {
  let name = "Mein:e Lieblingsheld:in ist: " + heroName + ". ";
  let power = "Er/sie hat die Fähigkeit: " + heroPower + ". ";
  let enemy = "Sein/ihr größte/r Gegner:in ist: " + heroEnemy + ".";
  console.log(name + power + enemy);
}

hero("Iron Man", "Rüstung kann Laser", "Mandarin");
