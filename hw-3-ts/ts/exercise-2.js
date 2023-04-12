"use strict";
/*
  Опишіть тип TPerson на основі IUser та IAdmin та використовуйте це в масиві persons і функції logPerson,
  щоб виправити всі помилки TS.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
// оголошкємо змінній persons типу який є масивом з об'єктами
var persons /* <- замінити на TPerson[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        role: ''
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: '',
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        role: ''
    },
    {
        name: 'Bruce Willis',
        age: 64,
        occupation: '',
        role: 'World saver'
    }
];
exports.persons = persons;
// задаємо тип аргументу user TPerson який об'єднаннює два інтерфейси
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
