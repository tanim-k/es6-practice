// some practice works of es6 
// 1: ex of let const
// const phone = 'nokia';
// phone = 'samsung';
//  const hen = 'cock'
//  hen = 'duck'
//  resolved const by let 
 let tree = 'pulm'
 tree = 'olive tree'
//  2: ex of template strings
const fruits = 'am jam kathal komola bedana apple';
const meye = "eline sky";
// multyline by \n 
const multy = 'hi \n' +
'what are u doing \n' +
'whats ur name \n' +
'good bye \n';
console.log(multy)
// multyline using backtip 
const useBacktip = `hello
how are u
what r u doing
r u feeling well now
okay tata`;
console.log(useBacktip);
// another system for multiline:
count = 'kola';
const old = '<h3 class="friend-name">friend-5</h3>'
const old1 = '<h3 class="friend-name">friend-'+ count +'</h3>';
const old2 = `<h3 class="friend-name">friend-${count}</h3>`;
console.log( '1:',old1, '2:',old2);

const ownPractice = `i am a human being. i love ${count}. amon all human are special to have ${count}.${count} is my favourite. ill die for ${count}.`;
console.log(ownPractice); 

// multiline and an array:
const  flowers = ['belly', 'rose','jui','joba'];
const word = 'i love you';
const newFlowers =  `['belly', ${word}, 'rose','jui','joba', ${word}, ${word}, ]`;

const newkolaLine = `${word}, is very strong. i love to use ${word}. ${word} is the way to shove love to one.${word} has the power of ${flowers.length*5}. ${word} is to hear good '${flowers[2]}'`;

console.log('kola line:' ,newkolaLine);
console.log(newFlowers);

// 3: arrow function practice 
// arrow - 1 :
const gun = (num1, num2, num3) => num1*num2*num3;
const multiplyResult = gun(2, 3, 4);
console.log(multiplyResult);
// arrow-2:
const division = (num1, num2) => num1/ num2;
const div = division(40,2);
console.log(div);
// arrow-3: only one parameter
const name = last => 'fan ' + last;
const muName = name('khan');
console.log(muName);
// arrow - 4 :
const frndName = () => 'aditi' + ' ' + 'narayon'
const aditi = frndName();
console.log(aditi);
// arrow-5 :
const onePara = (num) => num/5;
const oneParaRslt = onePara(100);
console.log(oneParaRslt);
// arrow - 6: multiline arrow
const multilineArrow = (x, y) => {
    const sum = x+y;
    const multi = sum*sum;
    return multi;
}
const multipleRslt = multilineArrow(2, 4);
console.log(multipleRslt);
// another arrow 
const another = (p, q) => p+q;
const result = another(10, 20)
const squareRslt = (r) => r*r;
const last = squareRslt(result); 
console.log(last);

// map using ::: to make a new array
const numbers = [2, 3, 5, 21, 6, 67];
const dutyDone = numbers.map(x => x*5);
console.log(dutyDone);

// using filters to get odd numbers 
const oddNums = numbers.filter(p => p%2 == 1);
console.log(oddNums);