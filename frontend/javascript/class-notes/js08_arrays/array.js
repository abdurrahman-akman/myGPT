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
// let str = 'yellow-blue'
// console.log(str[0])
// str[0] = 'b'
// console.log(str)

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

// let a = 4
// let b = a
// console.log(a)
// console.log(b)
// a=6
// console.log(b)


// let arr1 = [1, 2, 'three', false]
// const arr2 = arr1
// console.log(arr1)
// console.log(arr2)
// arr1[0] = 0
// console.log(arr1)
// console.log(arr2)

// let c = ['2']
// console.log(Boolean(c))
// let d = ['2']
// console.log(c == d)

// arr1 = ['four']
// console.log(arr1)
// arr2 = ['four']
// console.log(arr2)




//* Array metodlari
// const colors = ['red', 'purple', 'black', 'yellow-lacivert', 'brown']

// const cls = colors.slice()
// console.log(cls) //orjinal Arrayin icerigini kopyalar

// colors[0] = 5
// console.log(colors)

// console.log(colors.slice(2, 4))
// console.log(colors.slice(-3))
// console.log(colors.slice(-4,-2))

//*push() yontemi

// const colors = ['red', 'green'];
// console.log(colors.length)
// let c = 'white';
// const d = colors.push('blue',2023,c)
// console.log(colors)
// console.log(colors.length)


// const cars = ['mercedes', 'bmw', 'skoda'];

// const addmarka = ['tesla', 'ferrari', 'honda']

//   cars.push(addmarka)
//   console.log(cars)
//  cars.push(...addmarka)
//  console.log(cars)
// console.log(cars[3][1]);



//*pop()
// const cars = ['tesla', 'ford'];

// console.log(cars.pop())

// const silinen = cars.pop()
// console.log(silinen)
// console.log(cars.pop())



//* unshift

// const yemek = ['kadayıf','baklava','kebap'];

// console.log(yemek.unshift('küfte'))
// console.log(yemek)
//  const corba = ['yüssük','buglama']
//  const baklava = ['cevizli','fistikli']
//  corba.unshift(...baklava)
//  console.log(corba)


// const dress = ['pantolon','sweatshirt','gomlek']

// console.log(dress.shift())
// console.log(dress)

// const bicycle = ['dag','sehir','yaris']
// console.log(bicycle.splice(1,0,'white'))
// console.log(bicycle)
//nokta kordinatlarına gore siler

// console.log(dress.splice(0,2,'yelek','ceket'))
// console.log(dress)


//* concat

//  let color1 = [ 'red', 'green']
//  const color2 = ['blue', 'orange']
//  const color3 = [10, true]

//  const joinedArray = color1.concat(color2, color3)
//  console.log(joinedArray) 
//  const destr = color1.push(...color2, ...color3)
//  console.log(color1) 
//  color1 = color1.concat('Black',color2,2)
//  console.log(color1)


//indexof lastindexof
// const ayak = ['kundura','spor','futbol','basket','futbol','kundura','futbol']
// console.log(ayak.indexOf('futbol'))
// console.log(ayak.indexOf('futbol',3))
// console.log(ayak.indexOf('kundura',2))
// console.log(ayak.lastIndexOf('futbol'))
// console.log(ayak[ayak.indexOf('spor')])


// const ayak = ['kundura','spor','futbol','basket','futbol'] // orjinal arrayi değiştirir.

// ayak.reverse()
// console.log(ayak)

    //* array i stringe cevirir
    