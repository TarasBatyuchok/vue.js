// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
// функція memoize приймає функцію рузультат який треба кешувати
function memoize (fn) {
  // fn ваш код тут...
  // створили зміну cash де буде зберігатися кеш
  const cache = {};
  console.log(cache)
  // тут ми повертаємо нову функцію яка приймає спред оператор  таким чином ми можемо передати будь яку кількість аргументів
  return (...args) => {
    console.log(args)
    //  змінна key буде результатом об'єднання всіх переданих аргументів
    // змінна key вона отримає значення шляхом канкатинації усіх переданих аргументів завдяки методу join 'item, item, item'
    const key = args.join();
    console.log(key)
  // перевіряємо чи ж ключ key у об'єкті cache якщо є то ми повертаємо  збер результат
  //  оператор in повертає бульку true якщо властивість міститься в obj або його prop
    if (key in cache) {
      console.log(cache[key])
      return cache[key];
    }
    //якщо не існує ми викликаємо fn з переданими аргументами
    const result = fn(...args);
    //  отриманий результат збергіється в obj cache за ключем key
    cache[key] = result;

    return console.log(result);
  };
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання