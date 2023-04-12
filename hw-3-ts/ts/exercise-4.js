"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.strings = void 0;
//  оголощуємо generic T сам generyc дозволяє створювати функції і класи, які можуть працювати з будь яким типом даних
var Collection = /** @class */ (function () {
    //  туту в конструктурі ми вказуємо що наш  elements може приймати будь який тип даних і початкове його значення є масив
    function Collection(elements) {
        if (elements === void 0) { elements = []; }
        this.elements = elements;
    }
    //  geter метод який повертає пзначення private elements а саме масив типу T
    Collection.prototype.get = function () {
        return this.elements;
    };
    // el те що додається втип T а саме в arr type ци тип за яким відбувається дія prepend і дефолтним append
    Collection.prototype.add = function (el, type) {
        if (type === void 0) { type = 'append'; }
        // умова додати 
        if (type === 'prepend') {
            // в початок масиву
            this.elements.unshift(el);
        }
        else {
            // в кінець масиву
            this.elements.push(el);
        }
    };
    // повертає бульку і fn з перевіркою яка приймає один element типу T
    Collection.prototype.contains = function (predicate) {
        return this.elements.some(predicate);
    };
    // Тут ми приймаємо fn predicatе метод видаляє всі елементи зі списку для яких функція повертає true 
    //  тут не повертає жодного значення Void
    Collection.prototype.delete = function (predicate) {
        this.elements = this.elements.filter(function (el) { return !predicate(el); });
    };
    return Collection;
}());
var stringCollection = new Collection();
stringCollection.add('Hello, World!');
stringCollection.contains(function (el) { return el === 'Hello, TS'; });
var strings = stringCollection.get();
exports.strings = strings;
var userCollection = new Collection();
userCollection.add({ id: 1, name: 'Viktor' });
userCollection.delete(function (el) { return el.id === 1; });
var users = userCollection.get();
exports.users = users;
