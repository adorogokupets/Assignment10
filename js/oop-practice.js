// STEP 1
// class Cat {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     meow() {
//         console.log(`${this.name} says meow!`)
//     }
// }

// const Dog = class {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     bark() {
//         console.log(`${this.name} says woof!`)
//     }
// }

// STEP 2
// let myCat = new Cat('Pinky', 3)
// let myDog = new Dog('Archi', 5)

// STEP 3
// class Animal {
//     constructor() {
//         console.log("The Animal has been created")
//     }
// }

// STEP 4
// class Animal {
//     constructor(message) {
//         console.log(message)
//     }
// }
// let myAnimal = new Animal("The Animal has been created")

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }
// }
// let myAnimal = new Animal('Dog', 'Labrador', 'Black', '24 inches', '30 inches')

// STEP 6
// for (let property in myAnimal) {
//     console.log(`${property}: ${myAnimal[property]}`)
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//     }

//     speak() {
//         if (this.type === 'Dog') {
//             return `The ${this.color} dog is barking!`
//         } else if (this.type === 'Cat') {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
// }
// let myAnimal = new Animal('Dog', 'Labrador', 'Black', '24 inches', '30 inches')
// console.log(myAnimal.speak())

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type
//         let _breed = breed
//         let _color = color
//         let _height = height
//         let _length = length

//         this.getType = function() {
//             return _type
//         }

//         this.getBreed = function() {
//             return _breed
//         }

//         this.getColor = function() {
//             return _color
//         }

//         this.getHeight = function() {
//             return _height
//         }

//         this.getLength = function() {
//             return _length
//         }

//         this.checkType = function() {
//             return _type === 'Dog' ? 'dog' : 'cat'
//         }
//     }

//     speak() {
//         return `The ${this.checkType()} has made a noise!`
//     }
// }

// let myAnimal = new Animal('Dog', 'Labrador', 'Black', '24 inches', '30 inches')
// console.log(myAnimal.speak())

// STEP 9
String.prototype.findWords = function(word) {
    let regex = new RegExp(word, 'gi')
    let matches = this.match(regex)
    let count = matches ? matches.length : 0
    alert(`The word "${word}" was found ${count} times`)
}
let paragraph = "The quick brown fox jumps over the lazy dog. The fox is quick and sly."
paragraph.findWords('fox')