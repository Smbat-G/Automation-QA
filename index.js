//1-a

// function foo (a, b){
//     let sum = 1
// for(let i = 0; i < b; i++){
// sum *= a
// }
// console.log(sum)
// }
// foo(2, 4)

//1-b

// function foo(a, b){
// if(b === 0){
// return 1
// }else{
//     return a * foo(a, b - 1)
// }
// }

// console.log(foo(3, 4));

// 2-a

//    function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

// 2-b

// function factorial(n){
//     let result = 1
//    if(n === 0 || n === 1){
//     return 1
//    }
//     for(let i = 2; i <= n; i++){
//        result *= i
//     }
//    return result

// }
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(10));

// 3-a

// function arithmeticProgression(a, index, diff){
//     let list = []
//     let result = 0
// for(let i = 0; i < index; i++){
// result = a + i*diff
// list.push(result)
// }

// console.log(list);
// }

// arithmeticProgression(2, 5, 3)

//3-b ??????

// function arithmeticProgression(a, index, diff){
//     if(index === 1){
//         return a
//     }else{
//         return diff + arithmeticProgression(a, index - 1, diff)
//     }
// }
// console.log(arithmeticProgression(2, 5, 3));

// 6

// let  products = [
//   {
//     type: "գիրք",
//     content: {
//       title: "Ռոք Վագրամ",
//       author: "Ուիլյամ Սարոյան"
//     },
//     price: "4990 դրամ"
//   },
//   {
//     type: "գրենական պիտույք",
//     content: {
//       title: "Էջանիշ․ Ուիլյամ Սարոյան"
//     },
//     price: "490 դրամ"
//   },
//   {
//     type: "գիրք",
//     content: {
//       title: "The Human Comedy",
//       author: "Ուիլյամ Սարոյան"
//     },
//     price: "4800 դրամ"
//   },
//   {
//     type: "գրենական պիտույք",
//     content: {
//       title: "Կախարդական տետր /գրիչով/"
//     },
//     price: "4200 դրամ"
//   },
//   {
//     type: "գրենական պիտույք",
//     content: {
//       title: "Նոթատետր Notes 14X21 Plain Red"
//     },
//     price: "13000 դրամ"
//   },
//   {
//     type: "գիրք",
//     content: {
//       title: "Թումանյան․ Հեքիաթ, լեգենդ, բալլադ",
//       author: "Հովհաննես Թումանյան"
//     },
//     price: "2490 դրամ"
//   },
// ];

//   //a
//   function getBooks(products){
// let y = products.filter(function(elements){
//     return elements.type === 'գիրք'
// })
// console.log(y);
//   }
// getBooks(products)

// //b
// function getStationery(products){
//     let y = products.filter(function(elements){
//         return elements.type === "գրենական պիտույք"
//     })
//     console.log(y);
// }
// getStationery(products)

//c?????? xndir@ petq e lucel sort methodov
// function maxPrice(products) {
//   let expensive =     {
//     type: "",
//     content: {
//       title: "",
//       author: ""
//     },
//     price: ""
//   }
//   for(let i = 0; i < products.length; i++){
//     if(products[i].price > expensive.price){

//       expensive = products[i]
//     }
//   }
//   console.log(expensive);
//   }
// maxPrice(products)

// d filtr metodov xndir@ mnuma kisat

// function bookByAuthor(products, authorName){
//   let result = products.filter(function(element){
//       return element.content.author === authorName;
//   });
//   console.log(result);
// }

// bookByAuthor(products, 'Ուիլյամ Սարոյան');

// function bookByAuthor(products, authorName){
//   let found = false
//   for(let i = 0; i < products.length; i++){
//     if(products[i].content.author === authorName ){

//       console.log(products[i]);
//       found = true
//       break
//     }
//     if(!found){
//       console.log(-1);
//     }
//   }
//   }

// bookByAuthor(products, 'Ուիլյամ Սարոյան');
// bookByAuthor(products, 'vova')

// function bookByAuthor(products, authorName){
//   let found = false
//   let list = []
//   for(let i = 0; i < products.length; i++){
//     if(products[i].content.author === authorName ){
//       found = true
//       list.push(products[i])
//       console.log(list);
//     }
//     if(!found){
//       console.log(-1);
//     }
//   }
//   }

// bookByAuthor(products, 'Ուիլյամ Սարոյան');

// 6???

// function sumPrice(products){
//   let result = products.map(function(elements){
//     return elements.price
//   })
//   let sum = result.array.forEach(element => {

//   });
//   console.log(result);
// }
// sumPrice(products)

// function sumPrice(products){
//   let list = []
//   let sum = 0
//   for(let i = 0; i < products.length; i++){
//     sum += products[i].price
//     list.push(products[i].price)
//   }
//   console.log(sum);
//   console.log(list);

// }
// sumPrice(products)

// 4 dasi tnayinner@ dzevapoxel filter funkciayi

// 1
// let listProducts = [
//   {
// productName: 'Keyboard',
// price: 4.99,
// inStock: 'yes',
// category: 'Electronics',
// manufacturer: 'HP',
// weight: 0.8,
// description: 	'Standard wired keyboard with multimedia keys.'
// },
// {
//   productName: 'Monitor',
//   price: 199.99,
//   inStock: 'No',
//   category: 'Electronics',
//   manufacturer: 'Dell',
//   weight: 5.2,
//   description: 	'27-inch LED monitor with Full HD resolution.'
//   },
//   {
//     productName: 'Mouse',
//     price: 19.99,
//     inStock: 'yes',
//     category: 'Electronics',
//     manufacturer: 'Microsoft',
//     weight: 0.2,
//     description: 	'Wireless mouse with ergonomic design.'
//     },
//     {
//       productName: 'Laptop',
//       price: 899.99,
//       inStock: 'yes',
//       category: 'Electronics',
//       manufacturer: 'Apple',
//       weight: 1.3,
//       description: 	'13-inch MacBook Pro with Retina display.'
//       },
//       {
//         productName: 'Desk Lamp',
//         price: 29.99,
//         inStock: 'No',
//         category: 'Home & Garden',
//         manufacturer: 'IKEA',
//         weight: 0.5,
//         description: 	'	Adjustable desk lamp with LED bulb.'
//         },
//         {
//           productName: 'Headphones',
//           price: 99.99,
//           inStock: 'yes',
//           category: 'Electronics',
//           manufacturer: 'Samsung',
//           weight: 0.3,
//           description: 	'Over-ear headphones with noise cancellation.'
//           },
//           {
//             productName: 'Printer',
//             price: 149.99,
//             inStock: 'No',
//             category: 'Electronics',
//             manufacturer: 'HP',
//             weight: 7.0,
//             description: 	'All-in-one printer with wireless connectivity'
//             },
//             {
//               productName: 'Smartphone',
//               price: 	699.99,
//               inStock: 'yes',
//               category: 'Electronics',
//               manufacturer: 'Samsung',
//               weight: 0.2,
//               description: 	'	6.5-inch smartphone with OLED display.'
//               },
//               {
//                 productName: 'Notebook',
//                 price: 	699.99,
//                 inStock: 'yes',
//                 category: 'Electronics',
//                 manufacturer: 'Apple',
//                 weight: 1.1,
//                 description: 	'13-inch MacBook with Retina display.'
//                 },
// ]

// Lesson 7

//1

// function makeProduct(title, description, price) {
//   return {
//     title,
//     description,
//     price,
//   };
// }

// let globalProduct = makeProduct('Apple', 'Phone', 150000)
// console.log(globalProduct.title);
// console.log(globalProduct.description);
// console.log(globalProduct.price);

// //  2

// let product = [
//   {
// title: 'shoos',
// description: 'black',
// price: 25000
// },
// {
//   title: 'watch',
//   description: 'black',
//   price: 55000
//   },
//   {
//     title: 'phone',
//     description: 'iphone',
//     price: 90000
//     },
// ]

// let products = [];
// products.push(makeProduct());

// function makeShoppingCart(product){
//   let count = 0
//   let sum = 0
// for(let i = 0; i < product.length; i++){
//   count++
//   sum += product[i].price
// }

//   let shoppingCard = {
//     'total items count': product.length,
//     totalPrice: Number,
//     items: null

//   }
//   shoppingCard.totalPrice = sum
//   shoppingCard["total items count"]=count
//   shoppingCard.items = product

//   console.log(shoppingCard);
// }
// makeShoppingCart(product)

// makeShoppingCart['total items count'] += product.price

// 3

// let products = []
// let globalProduct1 = makeProduct('Apple', 'Phone', 150000)
// let globalProduct2 = makeProduct('Samsung', 'Phone', 100000)
// let globalProduct3 = makeProduct('ArmPhon', 'Phone', 50000)

// products.push(globalProduct1, globalProduct2, globalProduct3)
// console.log(products);

// 4/3 ???

// let shoppingCard = {
//   totalPrice: 0,
//   totalCount: 0,
//   items: product,
//   addProduct: function(product){
//       this.items.push(product);
//       this.totalPrice += product.price;
//       this.totalCount++;
//   },
//   removeProduct: function(product){
//     let index = -1;
//     for(let i = 0; i < this.items.length; i++){
//         if(this.items[i].title === product.title && 
//           this.items[i].description === product.description &&
//           this.items[i].price === product.price
//         ){
            //this.totalPrice -= parseInt(this.items[i].price.replace(/[^\d]/g, ''), 10);
            //this.item
//             index = i;
//             break;
//         }
//     }

//     if (index == -1) {
//       //
//       return false;
//     }

//     this.totalPrice -= product.price;
//     this.totalCount--;
//     this.items.splice(index, 1);
    
// }
// }

// shoppingCart.removeProduct("Էջանիշ․ Ուիլյամ Սարոյան");
// console.log('After removing a product:', shoppingCart);

// product.push(shoppingCard.addProduct)
// shoppingCard.items = product

// 5  ???
// function printObj(obj){
//   for(let value in obj){
// if(typeof obj[key] !== 'object'){
//   log(`${key}: ${obj[key]}`)
// }
//   }
// }
// obj = shoppingCard
// printObj(obj)




// lesson 9 
// 1

// function Calculator(a, b){
// this.a = a
// this.b = b
// this.sum = function(){
// let sum = 0
// sum = a + 8
// console.log(sum);
// }
// this.mul = function(){
// let mul = 0
// mul = a * b
// console.log(mul);
// }
// }

// let Calculator1 = new Calculator(5, 4)
// Calculator1.sum()
// Calculator1.mul()


// 2

// function Accumulator(startingValue){
//   this.startingValue = startingValue
//   this.value = +prompt() 
//   this.read = function(){
//     let sum = 0
//     sum = startingValue + this.value
//     console.log(sum);
//   }
// }

// let accumulator = new Accumulator(5)
// accumulator.read()


// 3

// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     money: 2000
//   };

//  pockets.__proto__= bed
//  bed.__proto__= table
//  table.__proto__= head

//  console.log(pockets);
//  console.log(table);


// 4

// function Book(author, title){
//     this.author = author
//     this.title = title
// }

// function Visitor(name){
//     this.name = name
//     this.booksBorrowed = [];
//     this.borrowBook = function(book){       
//         this.booksBorrowed.push(book)
//         } 
// }
 

// let book1 = new Book('jul Vern', 'Island')
// let book2 = new Book('Balzak', "Bor")

// let visitor1 = new Visitor('John Duein')
// visitor1.borrowBook(book1)
// visitor1.borrowBook(book2)
// console.log(visitor1.name);
// console.log(visitor1.booksBorrowed);




// 5 ?????

// function Point(x, y){
//     this.x = x
//     this.y = y  
//     this.getter = function () {
//         console.log(x, y);
//     }
//     this.setter = function(startPoint, endPoint){
//         this.startPoint = startPoint
//         this.endPoint = endPoint
//         console.log(startPoint, endPoint);
//     }
//     this.length = function(startPoint, endPoint){
//        this.pointLength = startPoint.Math.
//     }
// }



// 6

// function Qarankyun(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//     this.paragic = function() {
//         if(this.a === this.c && this.b === this.d){
//             return 2*this.a + 2*this.b
//         }
//         if(this.a ===this.b && this.b === this.c && this.c === undefined){
//             return this.a +this.b + this.c
//         }else{
//             return this.a + this.b + this.c + this.d;
//         }
       
//     };
//     this.area = function(){
//         if(this.a === this.c && this.b === this.d){
//             return this.a * this.b
//         }
//     if(this.a ===this.b && this.b === this.c && this.c === null){
//         return (this.a + this.b + this.c) / 2
//     }else{
//         return this.a * this.b * this.c * this.d
//         }
//     }
// }

// let orthogonal = new Qarankyun(3, 5, 3, 5);
// console.log(orthogonal.paragic());
// console.log(orthogonal.area());

// let triangle = new Qarankyun(2, 3, 4, null)
// console.log(triangle.paragic());
// console.log(triangle.area());

// let square = new Qarankyun(3, 3 ,3, 3)
// console.log(square.paragic());
// console.log(square.area());



// 7 ???

// function User(name, surName, age){
//     this.name = name
//     this.surName = surName
//     this.age = age
//     this.fullName = fullName
//     this.fullName = `${name} ${surName}`;
// }

// function Course(name, semesters, isOptional, enrolledStudents = 0){
//     this.name = name
//     this.semesters = semesters
//     this.isOptional = isOptional
//     this.enrolledStudents = enrolledStudents
// }

// function Lecturer(name, surname, age){
//     this.name = name
//     this.surName = surname
//     this.age = age
//     this.courseList = []
// }

// function Student(name, surName, age){
//     this.name = name
//     this.surName = surName
//     this.age = age
//     this.pont = [{
        
//     }]
// }



// Home Woer lesson 10
//1

// class Tenant{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     describe(){
//         console.log(this.name, this.age);
//     }
// }

// let user = new Tenant('vardan grigoryan', 32)
// user.describe()


//2

// class Address{
// constructor(street, city, state, zipCode){
//     this.street = street
//     this.city = city
//     this.state = state
//     this.zipCode = zipCode
// }
// parseAddress(){
//     let list = []
//     list.push(this.street, this.city, this.state, this.zipCode)
//    return list
// }
// describe(){
//     let address = this.parseAddress()
//     console.log(address.join(' '));
// }

// }

// let user = new Address('Los-Angeles', 'backer', 'California', '0068as')
// user.describe() 
// user.parseAddress()


//3

// class Flat {
//     constructor(number, area, tenants) {
//         this.number = number;
//         this.area = area;
//         this.tenants = tenants;
//     }

//     memberShipPayment() {
//         let total = 0;
//         this.tenants.forEach(tenants => {
//             total += tenants.age < 18 ? 100 : 500;
//         });
//         return total
//     }

//     describe() {
//         console.log(`Flat Number: ${this.number}`);
//         console.log(`Flat Area: ${this.area} sq meters`);
//         console.log('tenants:');
//         this.tenants.forEach(tenants => {
//             console.log(`  Name: ${tenants.name}, Age: ${tenants.age}`);
//         });
//         console.log(`Total : ${this.memberShipPayment()} drams`);
//     }
// }

// let tenants = [
//     { name: 'John Doe', age: 16 },
//     { name: 'Marta Doe', age: 20 },
//     { name: 'Jim Doe', age: 15 }
// ];

// let flat = new Flat(101, 120, tenants);
// flat.describe();


// class Flat {
//     constructor(number, area, tenants) {
//         this.number = number;
//         this.area = area;
//         this.tenants = tenants;
//     }
//     memberShipPayment(){
//         let total = 0
//         for(let i = 0; i < this.tenants.length; i++){
//             if(this.tenants.age < 15){
//                 total+= 100
//             }else{
//                 total += 500 
//             }
//         }
//        return total
//     }
//     describe(){
//         console.log(`Flat ${this.number}`);
//         console.log((`Area ${this.area} sqr mtr`));
//         console.log('Tenants');
//         for(let i = 0; i < this.tenants.length; i++){
//             console.log(`Name: ${this.tenants[i].name}, age: ${this.tenants[i].age}`)
//         }
//             console.log(`Total ${this.memberShipPayment()} dram`);
        
//     }
// }
// let tenants = [
//     {name: 'Tom Crus', age: 32 },
//     {name: 'Nikol Kidman', age: 25},
//     {name: 'Syuzan Crus', age: 7}
// ]

// let flat = new Flat(14, 102, tenants)
// flat.describe()


// 4

// class Building{
//     constructor(address, floors, flats){
//         this.address = address
//         this.floors = floors
//         this.flats = flats
//     }
//     addFlat(flat){
//             this.flats.push(flat)
//             console.log(` Flat: ${flat}`);
//         }
//         describe(){
//             console.log(`Address: ${this.address}`);
//             console.log(`Floors ${this.floors}`);
//             console.log(`Flats: ${this.flats}`)
//         }
    
//     }
  
// let flats = []
// let building = new Building('Building address is Tichina 20', 9, flats)
// building.describe()
// building.addFlat(5)
// building.addFlat(8)