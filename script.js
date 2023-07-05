let user = {
  name: "Alex",
  surname: "Alexs",
  age: NaN,
  dateOfBirth: {
    day: 3,
    month: "June",
    year: 2000,
  },
  coutry: "USA",
  city: "Moskva",
  isMarried: false,
};

let passport = {
  series: "AC",
  number: 459678223,
  date: "02-07-2021",
  dateExp: "02-07-2031",
  visa: ["USA", "UK", "Japan"],
};

let userPassport = Object.assign({}, user, passport);

let keys = Object.keys(userPassport);
let values = Object.values(userPassport);

let arr = keys.concat(values);

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
  };

let filtered = arr.filter(item => {
    if (typeof(item) === 'string') {
        types.string.push(item)
    } else if (typeof(item) === 'number') {
        types.number.push(item)
    } else if (typeof(item) === 'object') {
        types.object.push(item)
    } else if (typeof(item) === 'boolean') {
        types.boolean.push(item)
    } 
})

console.log(
    types
);

// ТЗ
// 1. Создать два объекта
// 2. Соеденить два объекта так чтобы старые не менялись
// 3. Поулчить из нового объекта все ключи в новых переменных
// 4. Поулчить из нового объекта все значение в новых переменных
// 5. Соеденить два полученных массива после заданий (3, 4) в один целый массив (arr)
// 6. В объект под названием types вам надо распределить элементы из массива arr по их типам данных