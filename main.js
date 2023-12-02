//task1 
function multipleOfOdd(...arrays) {
  let result = 0;
  
  arrays.forEach(arr => {
    let oddProduct = arr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc * curr, 1);
    result += oddProduct;
  });
  
  return result;
}
console.log(multipleOfOdd([1,2,3,4,5],[1,2,3,4,5]));

//task2
function isUnique(arr) {

  const unig = arr.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });

  return arr.length === unig.length;
}
console.log(isUnique([1, 2, 3, 4, 5]));


//task3
function sumOfEven(obj) {
    
    return Object.values(obj)
    .filter(elem => elem % 2 === 0)
    .reduce((sum, elem) => sum + elem, 0);
}
console.log(sumOfEven({ a: 2, b: 5, c: 8, d: 3 })); 


//task4
function longest(obj) {
    
    let longestWord = Object.values(obj).reduce((acc, elem) => {
        
        if (typeof elem === 'string' && elem.length > acc.length) {
            return elem;
        } else {
            return acc;
        }
    }, '');
    
    return longestWord;
}
console.log(longest({ name: 'John', city: 'New York', profession: 'developer' }));


//task5
function convert(obj) {
    
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
}
console.log(convert({ a: 'apple', b: 'banana', c: 'cherry' })); 


//task6
function average(students) {

    let scores = students.map(student => student.score);
    let highest = Math.max(...scores);
    let lowest = Math.min(...scores);
    let total = scores.reduce((acc, score) => acc + score, 0);
    let average1 = (total / students.length).toFixed(2)
    let average = parseFloat(average1)    

    return { highest, lowest, average };
}
console.log(average([{ name: 'Alex', score: 80 }, { name: 'Emily', score: 95 }, { name: 'Charlie', score: 88 }]));

//task7
function subjectAverage(students) {
    let subjectsAverage = {};
    let subjectsCount = {};
    
    students.forEach(student => {
        
        Object.keys(student.scores).forEach(subject => {
            if (subjectsAverage[subject]) {
                subjectsAverage[subject] += student.scores[subject];
                subjectsCount[subject]++;
            } else {
                subjectsAverage[subject] = student.scores[subject];
                subjectsCount[subject] = 1;
            }
        });
    });
  
    Object.keys(subjectsAverage).forEach(subject => {
      subjectsAverage[subject] = (subjectsAverage[subject] / subjectsCount[subject]).toFixed(2);
    });
    
    return subjectsAverage;
}
console.log(subjectAverage([{ name: 'Alex', scores: { math: 80, english: 75, history: 90 } }, {name:'Emily', scores: { math: 95, english: 88,history: 92 }}, {name: 'Charlie', scores: {math: 88, english: 92, history: 85 }}]));
 

//task8
function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5, e: 6 };

console.log(combine(obj1, obj2));


//task9
function capMe(names) {
    
    return names.map(name => {
        const lowercaseName = name.toLowerCase();
        return lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
    });
}
console.log(capMe(([`samuel`,`MABELLE`,`KrYstal`,`CAListA`])));

//task10
