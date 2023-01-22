
//------------variable ou string-------------------
let name='julien';
var c=5;

//console.log( c +" "+ name); affiche '5 julien'

//----------Tableau-------------------------------
let colors = ['Red', 'Blue', 'Green'];
//console.log(colors); affiche normalement
//console.log(colors[0]); affiche 'red'

colors [3] = 'Black';
//console.log(colors); rajoute black à la fin [ 'Red', 'Blue', 'Green', 'Black' ]

colors [4] = 1;
//console.log(colors); rajoute 1 à la fin [ 'Red', 'Blue', 'Green', 'Black', 1 ]

//____________fonction______________

let a, b, result;

function add(a,b) {
    return result=a+b;
}

let d = add(5,6);
console.log(d);