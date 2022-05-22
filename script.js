// 1.
// let user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//     studentstatus: 'active'

// };
    
// console.log(user.studentstatus);
// console.log(user['studentstatus']);


// 2.
// let projects = ['TGSP', 'OPETN', 'GPGEP', 'ENIP'];

// for (let x of projects) {
//     console.log(x);
// }

// console.log(projects[0]);
// console.log(projects[1]);
// console.log(projects[2]);
// console.log(projects[3]);

// for (let i = 0; i < projects.length; i++) {
//     console.log(projects[i]);
// }


// 3.
// let numbers = [5, 6, 10, 25, 3, 7, 100, 28, 36, 89];

// for (let i = 0; i < numbers.length; i ++ ) {
//     if (numbers[i]  > 5) {
//     console.log(numbers[i]);
//     } 
// }

// for (let x of numbers) {
//     if (x > 5) {
//         console.log(x);
//     }
// }

// 4.
// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'active'
// }

// if (user.age > 18 && user.studentstatus == 'active') {
//     console.log('hello');
// } else if (user.name == 'levani') {
//     console.log('hello giorgi')
// } else if (user.studentstatus == 'active' || user.age <25) {
//     console.log('hello world') 
// } else {
//     console.log('error');
// }


// 5.
// let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];

// for (let x = 0; x < array.length; x++) {
//     if (typeof x == 'string') {
//         console.log(x);
//     }
// }
// // for (let x of array) {
// //     if (typeof x =='string') {
// //         console.log(x);
// //     }
// // } 


// 6.
// let array = [[2, -3, 5, 10], [25,-24, -11,100], [-6,-7,10]]

// console.log(array[0][0]);
// console.log(array[0][3]);
// console.log(array[1][0]);
// console.log(array[1][3]);
// console.log(array[2][2]);

// for (let x of array) {
//     for (let y of x) {
//         if (y > 0) {
//             console.log (y);
//         }
//     }
// }


// 7.
// let array = [32, 10, 'hello', null, 'hello2', 50];

// for (let x of array) {
//     if (typeof x == 'number' &&  x % 5 == 0) {
//         console.log(x);
//     }
// }
