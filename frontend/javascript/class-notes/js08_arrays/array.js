// const arr = [100, 'AKMAN', false]
//! 1. yöntem dizi array olusturmada daha cok tercih edilir. neden dicek olursanız  nedeni new Array yönteminde hatalaarın ortaya  cıkmas ihtimalidir
// console.log(arr)

// const sakla = new Array(100, 55, 'tree DOM')
// console.log(sakla)

//!Ex  10 tane bos eleman döndürür.

// const neden = new Array(10);
// console.log(neden)

// const colors = ['red', 'purple', 'black', 'yellow-lacivert']

// console.log(colors[1])
// console.log(colors[colors.length-1])
// console.log(colors[colors.length-2])
// console.log(colors[-1])


// const colors = ['red', 'purple', 'black', 'yellow-lacivert']
// console.log(Array.isArray(colors)) //true
// console.log(colors instanceof Array); //true 

// const araymidir = 'selam'
// console.log(Array.isArray(araymidir)) //false
// console.log(araymidir instanceof Array) //false

//! str immutable oldugu için değiştirlemez
let str = 'yellow-blue'
console.log(str[0])
str[0] = 'b'
console.log(str)

//!arraylaer ise mutable oldugu için değiştirilebilir.
// const colors = ['red', 'purple', 'black', 'yellow-lacivert']
// colors[0] = 'krem'
// console.log(colors)
// colors[3] = 5
// console.log(colors)
// let x = true
// colors[1] = x
// console.log(colors)

// colors[100] = 4
// console.log(colors)

