
/*
  Опишіть тип TPerson на основі IUser та IAdmin та використовуйте це в масиві persons і функції logPerson,
  щоб виправити всі помилки TS.
*/

interface IUser {
  name: string
  age: number
  occupation: string
}

interface IAdmin {
  name: string
  age: number
  role: string
}

//  оголешення типу який поєднює два інтерфейси

type TPerson = IUser & IAdmin


// оголошкємо змінній persons типу який є масивом з об'єктами

const persons: TPerson[] /* <- замінити на TPerson[] */ = [
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
]
// задаємо тип аргументу user TPerson який об'єднаннює два інтерфейси
function logPerson (user: TPerson) {
  console.log(` - ${user.name}, ${user.age}`)
}

export {
  persons,
  logPerson
}
