"use strict";
// Опишіть interface на основі змінної users та використайте його відповідно.
// Note: Ми використовуємо різні префікси для interface, type, enum (I, T, E відповідно)
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
// : IUsers[] оголошення типу змінної users  яка є масивом з об'єктів
// Ts буде провіряти чи змінна user відповідає інтерфейсу IUsers
var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
exports.users = users;
// туту ми вказуємо,що аргумент users є обєетом і спираємось на інтерфейс IUsers
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
