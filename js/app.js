let drink = "сік";
switch (drink) {
    case "Кава":
        console.log("каву");
        break;
    case "Чай":
        console.log("чай");
        break;
    case "Сік":
        console.log("сік");
        break;
    default:
        console.log("Невідомо");
}

let day = "Субота";
switch (day) {
    case "Понеділок":
    case "Вівторок":
    case "Середа":
    case "Четвер":
    case "П’ятниця":
        console.log("Робочий день");
        break;
    case "Субота":
    case "Неділя":
        console.log("Вихідний день");
        break;
    default:
        console.log("Невідомо");
}

let month = 4;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невідомо");
}

let color = "жовтий";
switch (color) {
    case "червоний":
        console.log("стоп");
        break;
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    default:
        console.log("Невідомо");
}

let number1 = 10;
let number2 = 0;
let operator = "/";
switch (operator) {
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
    case "/":
        if (number2 === 0) console.log("Помилка: ділення на нуль");
        else console.log(number1 / number2);
        break;
    default:
        console.log("Невідомо");
}
