/*
  Переписати тип TUnified наступним чином.
  Він повинен взяти всі поля з IFirst, з ISecond лише поле 'd', з IThird все окрім поля 'h'
*/
// a?  optional parameter вказує на те що  параметр a може мати number або за замовчуванням undefined

// ітерфейс з optional parameter
interface IFirst {
  a?: number
  b?: string
  c?: string
}
// ітерфейс
interface ISecond {
  d: string
  e: number
  f: number
}
// ітерфейс
interface IThird {
  g: boolean
  h: string
  i: number
}


//  так ми оголошуємо тип який об'єднює всі властивості з IFirst з ISecond, 'd' значенням  і всі крім Omit h з Ithird
type TUnified = IFirst & Pick<ISecond, 'd'> & Omit<IThird, 'h'>// ...

export {
  type TUnified
}
