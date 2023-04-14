/* Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F.
C is expected to be either true or false while T and F can be any type. */

type If < C , T, F> = C extends boolean ? T : F
type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'






/* Тип утиліти TMyPick приймає два параметри типу: Type і Keys.
Type представляє тип, з якого ми хочемо вибрати властивості,
а Keys представляє набір ключів властивостей, які ми хочемо вибрати. */

/* Implement the built-in Pick<T, K> generic without using it. */
interface ITodo {
  title: string
  description: string
  completed: boolean
}


type TMyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type TTodoPreview = TMyPick <ITodo, 'title' | 'completed'> 

export const todo: TTodoPreview = {
  title: 'Clean room',
  completed: false
}