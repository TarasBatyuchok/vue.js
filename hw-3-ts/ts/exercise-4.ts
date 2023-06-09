
/*
Опишіть клас таким чином, щоб він міг працювати з динамічними типами данних. Для цього використайте generics

  - Метод get повинен повертати масив з описаним типом на основі переданого generic.
    Тобто якщо в клас передано generic string, то метод має повертати string[]

  - Метод add повинен приймати 2 аргументи:
    el: елемент який потрібно додати до elements
    type: куди саме додати елемент. Може бути або append, або prepend. Дефолтне значення - append

  - Метод contains приймає аргумент predicate, який є функцією та перевіряє чи існує елемент в масиві elements.
    Приклад виконання дивіться нижче

  - Метод delete приймає аргумент predicate, який є функцією та видаляє елемент з масива elements.
    Приклад виконання дивіться нижче
*/
//  ітерфейс
interface IUser {
  id: number
  name: string
}
//  оголощуємо generic T сам generyc дозволяє створювати функції і класи, які можуть працювати з будь яким типом даних
class Collection<T> {
  // оголошуємо privite-(його можна використовувати тільки в межах класу не доступне за межами класу) fields "elements" з типом T[]-array
  // містить масив елементів типу T  
  //  класс Collection може містити елементи будь-якого типу це впринципі і є властивість generic
  private elements: T[]
  //  туту в конструктурі ми вказуємо що наш  elements може приймати будь який тип даних і початкове його значення є масив
  constructor (elements: T[] = []) { 
    this.elements = elements
  }
//  geter метод який повертає пзначення private elements а саме масив типу T
  get (): T[] {
    return this.elements
  }
// el те що додається втип T а саме в arr type ци тип за яким відбувається дія prepend і дефолтним append
  add (el: T, type: 'prepend' | 'append' = 'append'): void {
    // умова додати 
    if (type === 'prepend') {
      // в початок масиву
      this.elements.unshift(el)
    } else {
      // в кінець масиву
      this.elements.push(el)
    }
  }
// повертає бульку і fn з перевіркою яка приймає один element типу T
  contains (predicate: (el: T) => boolean): boolean {
    return this.elements.some(predicate)
  }
// Тут ми приймаємо fn predicatе метод видаляє всі елементи зі списку для яких функція повертає true 
//  тут не повертає жодного значення Void
  delete (predicate: (el: T) => boolean): void {
    this.elements = this.elements.filter(el => !predicate(el))
  }
}

const stringCollection = new Collection<string>()
stringCollection.add('Hello, World!')
stringCollection.contains(el => el === 'Hello, TS')

const strings = stringCollection.get()

const userCollection = new Collection<IUser>()
userCollection.add({ id: 1, name: 'Viktor' })
userCollection.delete(el => el.id === 1)
const users = userCollection.get()

export {
  strings,
  users
}
