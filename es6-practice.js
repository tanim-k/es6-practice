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