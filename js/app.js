let drink = "сік";
switch (drink) {
    case "Кава": console.log("каву"); 
    case "Чай": console.log("чай"); 
    case "Сік": console.log("сік");
}

let day = "Субота";
switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П’ятниця": console.log("Робочий день");
    case "Субота":
    case "Неділя": console.log("Вихідний день");
}

let month = 4;
switch (month) {
    case 12:
    case 1:
    case 2: console.log("Зима");
    case 3:
    case 4:
    case 5: console.log("Весна");
    case 6:
    case 7:
    case 8: console.log("Літо");
    case 9:
    case 10:
    case 11: console.log("Осінь");
}

let color = "жовтий";
switch (color) {
    case "червоний": console.log("стоп");
    case "зелений": console.log("йти");
    case "жовтий": console.log("чекати");
}

let number1 = 10;
let number2 = 0;
let operator = "/";
switch (operator) {
    case "+": console.log(num1ber + number2);
    case "-": console.log(number1 - number2);
    case "*": console.log(number1 * number2);
    case "/": 
        if (number2 === 0) console.log("Помилка: ділення на нуль");
        else console.log(number1 / number2);
}
