// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]
//  так, ми юзаєм reduce який виконує послідовну цепочку де accumulator є промісом попереднього кроку reduce
// currentValue є поточним елементом який ми обробляємо
array.reduce((accumulator, currentValue) => {
  // тут ми очікуємо поки виконяється попердній promise
  return accumulator.then(() => {
    // тут ми викоикаємо  arrayHandler з currentValue і коли він завершитсья ми консолим результат
    return arrayHandler(currentValue).then((result) => {
      console.log(result)
    })
  })
  // accumulator
}, Promise.resolve())

console.log(array)