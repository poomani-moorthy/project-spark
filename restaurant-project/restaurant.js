// strings methods
// 1.replace
// ex:
var sandy = 'Hello there!';
var mandy = 'Hello world';

console.log(mandy.replace('Hello', 'hi'));
//
// 2.slice()
// ex:
console.log(sandy.slice(3, 5));
// 3.substring()
// substring() is similar to slice (we cannot use negaitive index or value)
// ex
console.log(mandy.substring(2, 8));
// split
// A string can be converted to an array with the split() method:
// ex
console.log(mandy.split('Hel'));
// replace()
console.log(sandy.replace('there', 'poomani'));
// charAt
console.log(mandy.charAt(4));
// string repeat
console.log(sandy.repeat(5));
// includes
console.log(mandy.includes('Hello'));
// slice
console.log(sandy.slice(2, 8));
//
// concat

// trim
var nandy = '  dad   ';
console.log(nandy.trim());

// array methods
// 1.push() The push() method adds a new elements to the array (at the end).

const animals = ['cats', 'pig', 'dog'];
const count = animals.push('pig');
console.log(animals);

// 2.pop()
// the pop() method removes the last element from an array
var maddy = ['app', 'bee', 'chil', 'dish', 'element'];
var san = maddy.pop();
console.log(maddy);

// 3.The at()
// method returns an indexed element from an array.
// The at() method returns the same as [].
// The at() method is supported in all modern browsers since March 2022:
var g = ['poo', 'pon', 'azhagi', 'mani'];

console.log(g.at(2));

// 4.toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// ex:
const array1 = [1, 2, 3, 4, 8, 'a', '1a', 'dad'];
console.log(array1.toString());

// if statement
// 3 ways of using if condition
// 1.if 2.if else 3.if else if  4.nested if
// ex of if statement
function isEligible(age) {
  if (!age) {
    return false;
  } else if (age >= 3 && age <= 10) {
    return false;
  } else {
    return true;
  }
}
const student = 2;
const ans = isEligible(student);
console.log(ans);

// what is nested if?
// oru if condition kulla innoru if condition kodukardhuku name dha nested if.
// ex
function hello(there) {
  if (!there) {
    console.log('poomani');
  } else {
    if (there >= 3 && there <= 10) {
      console.log('ponmani');
    } else {
      console.log('poo');
    }
  }
}
const teacher = 2;
const question = hello(teacher);
console.log(question);

// Loop
// 1.for 2.while  3.Do-while
// 1.for(for loop keeps running while condition is true )
// ex;

for (var dot = 3; dot <= 10; dot++) {
  console.log(`hello there ${dot}`);
}

// while loop
// ex:
var dot = 8;
while (dot <= 14) {
  console.log(`hello there!${dot}`);
  dot++;
}

// palindrome
// ex
var a;
var b = 0;
var C;
var d = 141;
a = d;
while (a != 0) {
  c = a % 10;
  b = c + b * 10;
  a = parseInt(a / 10);
  console.log(c);
}
if (b == d) {
  console.log('palindrom');
} else {
  console.log('not a palindrom');
}

// prime number
// ex
// var a=7
// var b=0
// while( i=1; i<=a; i++){
//   if(a%i==0){
//    b++
//   }
// }
// if(b<=2){
//   console.log('poo')
// }else{
//   console.log('hi')
// }
// ex
// loop for using triangle

for (let i = 0; i <= 5; i++) {
  let str = '* ';
  console.log(str.repeat(i));
  for (let j = 0; j <= 5; j++) {
    let str = '* ';
    console.log(str.repeat(j));
  }
}
//
// for (let i = 0; i <= 5; i++) {
//   console.log('i is' + i);
//   for (let j = 0; j <= 5; j++) {
//     console.log('j is' + j);
//   }
// }
// for (let i = 0; i <= 4; i++) {
//   let str = '* ';
//   console.log(str.repeat(i));
// }
//
var a = '';
var n = 4;
var m = n - 1;
for (i = 1; i <= n; i++) {
  a = a.trim();
  a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
  console.log(a);
  m--;
}
//
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write('<br />');
// }
//
// function pyramid(n) {
//   for (i = 1; i <= n; i++) {
//     let str = ' '.repeat(n - i);
//     let str2 = '*'.repeat(i * 2 - 1);
//     console.log(str + str2 + str);
//   }
// }
// pyramid(5);

// Looping Backwards and loops in loops
// 0,1,2,3,4   4,3,2,1,0
// ex
const jonass = [
  'poo',
  'ponmani',
  2037 - 1998,
  'developer',
  ['yamuna', 'peter parker', 'jos', 'rachal']
];
for (let i = jonass.length - 1; i >= 0; i--) {
  console.log(i, jonass[i]);
}
// table using loop

for (let i = 1; i <= 10; i++) {
  let table = 9;
  let tablevalue = i * table;
  console.log(`${i} * ${table} = ${tablevalue}`);
}

// addEventListener(keyup,keypress,keydown)
document.addEventListener('keyup', function () {
  console.log(`hello keyup`);
});
//
// Destructing Objects
const Restaurant = {
  Fname: 'Arabian italian',
  Location: 'via angela tavanti 23,firenze,italy',
  Categories: ['italian', 'pizzeria', 'Vegetarian', 'Organic'],
  Startermenu: ['curd', 'biriyani', 'vada'],
  Mainmenu: ['pizza', 'burger', 'Soup'],
  OpeningHours: {
    thus: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    }
    // saturday:{
    //   open:0,
    //   close:24,
    // }
  }
  // order: function(Startermenu,mainIndex){
  //     return [this]
  // }
};
const { Fname, OpeningHours, Categories } = Restaurant;
console.log(Fname, OpeningHours, Categories);
//
// task Using (Array and Object destructuring , logical operator like && and OR,comparision operator like <>)
const game = {
  team1: 'bayen munich',
  team2: 'borrussia Dortmund',
  players: [
    [
      'poo',
      'pon',
      'ponnazhagi',
      'ponnaiyan',
      'praburaj',
      'sara',
      'sachin',
      'chichu',
      'manasa',
      'dharshana',
      'chinna'
    ],
    [
      'kamatchi',
      'sowmya',
      'suji',
      'vani',
      'devils',
      'evils',
      'Spirit',
      'demon',
      'hypocrite',
      'dash',
      'double dash'
    ]
  ],
  score: '4:0',
  scored: ['poo', 'pon', 'sachin', 'sara'],
  date: 'nov 9th,2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);
const allplayers = [...players1, ...players2];
console.log(allplayers);
//
const players1Final = [...players1, 'pon', 'sachin', 'sara'];
const {
  odds: { team1, x = draw, team2 }
} = game;
console.log(team1, x, team2);
//
const printgoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals are scored`);
};
printgoals(...game.scored);
team1 < team2 && console.log('team1 more likely to win');
// active
$(document).ready(function () {
  $('parent li a').click(function () {
    $('li a').removeClass('active');
    $(this).addClass('active');
  });
});
