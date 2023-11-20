sessionStorage.setItem('age', 23);
parseInt(sessionStorage.getItem('age'));

// parsing functions change the format of data
// JSON.stringify, JSON.parse

// JSON.stringify creates a string representation of a list or object
JSON.stringify([1, 2, 3,]);         // "[1, 2, 3]"
JSON.parse("[1, 2, 3]")         // [1, 2, 3]

sessionStorage.setItem('aboutMe', JSON.stringify(["Marielle", 22]))
sessionStorage.getItem('aboutMe')       // "[\"Marielle\", 22]"
JSON.parse(sessionStorage.getItem('aboutMe'))       // ["Marielle", 22]

sessionStorage.setItem('fullName', JSON.stringify({firstName: 'Marielle', middleName: 'Louisse', lastName: 'Lopez'}))
JSON.parse(sessionStorage.getItem('fullName'))