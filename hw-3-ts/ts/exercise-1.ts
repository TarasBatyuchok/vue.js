// Опишіть interface на основі змінної users та використайте його відповідно.
// Note: Ми використовуємо різні префікси для interface, type, enum (I, T, E відповідно)

// створюємо інтерфейс по факту це опис даних в об'єкта який є абстракцією який оприділяє властивості ї їх тип даних
interface IUsers{
  name: string
  age: number
  occupation: string
}

// : IUsers[] оголошення типу змінної users  яка є масивом з об'єктів
// Ts буде провіряти чи змінна user відповідає інтерфейсу IUsers
const users: IUsers[]  = [
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
]
// туту ми вказуємо,що аргумент users є обєетом і спираємось на інтерфейс IUsers
function logPerson (user: IUsers) {
  console.log(` - ${user.name}, ${user.age}`)
}

export {
  users,
  logPerson
}
