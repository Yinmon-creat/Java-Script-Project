// console.log('Hello World');
// console.log('yin mon aye');
// let myAge='my age is 26';
// console.log(myAge);
//  console.log(`Hi there  ${myAge}`);
// let sayHi="Hi there" +myAge;
// console.log(sayHi);
//----------------------------------------------------------

// let myVar=true;
// console.log(myVar)

// let myName="yin mon aye";

// let myString="asfd";
// let myVar=Boolean(myString);
// console.log(myVar);
//----------------------------------------------------------

// let myAge=0;
// console.log(Boolean(myAge));

// let x;
// console.log(Boolean(x));

// let y=null;
// console.log(y);
//----------------------------------------------------------

// let num1;
// let num2=3;
// console.log(num1+num2);

// let sum=1+4
// let z= "b" - "c";
// console.log(z);

// let x=6%2;
// console.log(x);

// let s,t,v=0;
// console.assert.log(v);
//-------------------------------------------------------------

//console.log('Helllo');
// let x="mon";

// console.log(x);

// let firstname="mosh";
// console.log(firstname);

// let a=2;
// a+=3;
// console.log(a);

// let b= 3;
// b=b*2;
// console.log(b);

// let b= 6;
// b=b/2;

// b=b%3;
// console.log(b);

//--------------------------------------------------------

// let a=true;
// console.log(!a);

// let num=2;
// console.log(num>0 && num==2);

// let a=6;
// console.log(a);

// function add(num1,num2){
// console.log(num1+num2);
// }
// add(2,3);


// function add(num1,num2){
//     return num1+num2;

// }
// console.log(add(4,3));
//-------------------------------------------------------------

// function shopping(product){
//     console.log("go to shop");
//     console.log("buy a "+ product);
//     console.log("go back");
// }
// shopping("book");
// shopping("ruler");
//-----------------------------------------------------------

// function sayName(name)
// {
// return "hi"
// }

//  let test=sayName("yma");
// console.log(test);


//-----------------------------------------------------


// Homework 1

//  function sayPresentyear(name,age){

//      return age;
//  }
//  let age=2023-1999;
//  console.log(sayPresentyear("yinmon",age));

//------------------------------------------------------

// function put(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// put(1,2,3,4,5);




// function statement
// function myname(){
//     console.log("yin mon aye");
// }
// myname();



//function expression
// let sayhi=function(){
//     console.log("word");
// }
// sayhi("you are cute");
//-------------------------------------------------------------

//callback function

// function sayMyName(name,fun){
//     console.log(fun)
// }
// sayMyName('yin mon aye',function(){console.log('hello')})




// function sayMyName(name,fun){
//     fun() 

// }
// sayMyName('yin mon aye',function(){console.log("yin mon aye")}
// )


//--------------------------------------------------

// function sayMyName(name,fun){
//         fun('yin mon aye') 
    
//     }
//     sayMyName('yin mon aye',function(name){console.log(name)}
//     )
    
//  function sayMyName(name,fun){
//      let result=fun('yin mon aye') 
//     console.log(result);
//     }
//     sayMyName('yin mon aye',function(name){return name;}
//     )
//--------------------------------------------------------

//call back function part-2

// function twice(num,modifier){
//     let result=modifier(num)*2;
//     console.log(result);
// }
// twice(7,function(num){
//     return num+5;
// });

//----------------------------------------------------------

//Arrow function
// let sayHi=() => console.log("hi");
// sayHi();

// let sayHi=w=>w;
// console.log(sayHi("hello"));


// let twice =num=>num*2;
// console.log(twice(4));


//-------------------------------------------------------

//Array

// let mixture=["dog",20,1.2,true];
// console.log(mixture[3]);


// let mixture=["dog",20,1.2,true];
// mixture[4]="yin mon";
// mixture[3]=false;
// console.log(mixture[mixture.length-2]);

//---------------------------------------------------

//Nested Array
// let arr=[
//     ['a','b','c'],
//     [1,2,3]
// ];
// arr[0][2]='e';
// console.log(arr[0][2]);

//-------------------------------------------------

//spread operator

// let data1=[1,2];
// let data2=[3,4];

//  let result=[...data1,...data2];
//  console.log(result);



//  function add(a,b){
//     console.log(a+b);
//  }

//  let nums=[2,3];
//  add(...nums);
//--------------------------------------

//Array Methods

//  let animals=["cat","dog",'lion'];
// animals.push('bird')

// animals.pop(animals);
// animals.unshift('ant')
// animals.shift ();
// let index=animals.indexOf('lion');
// console.log(index);
// console.log(animals);

//---------------------------------------------

// let animals=["cat","dog",'lion'];
// let string=animals.join('-');
// console.log(string);


// let animals=["cat","dog",'lion'];

// animals.splice(0,2);
// console.log(animals);


// let nums=[1,2,3,4,5]

// nums=nums.map(num=>{
//    return num+50;
// });

// console.log(nums)

//------------------------------------------------

//Array Filter Mathod

// let nums=[1,2,3,4,5,6];

// nums=nums.filter(num=>{
//    return num%3 === 0;
// });
// console.log(nums);



// let nums=[1,2,3,4,5,6];

// nums=nums.filter(num=>{
//    return num != 1;
// });
// console.log(nums);

//-------------------------------------------------------------------
//JSON ''

//STRINNG,NUMBER,BOOLEAN,ARRAY,OBJECT,NULL

// let person='{"name":"yin mon aye", "age":20}'
// let obj=JSON.parse(person)
// console.log(obj.name)

// let person={
//     name:'yin mon aye',
//     age:21
// }
// console.log(JSON.stringify(person))

//----------------------------------------------------------

//conditions (if else)


//let tired=prompt('are u tired?"yes/no":')
 //if(tired==='yes')
//console.log('rest well')
 //else if (tired==='no')
  //    console.log('go back to work')
   //  else
   //  console.log('pls enter yes or no')



    //  function findCharacterInString(str, chr) {
    //  const characterIndex = str.indexOf(chr);
  
     // if (characterIndex === -1) {
     //     return null;
      //}
  
     // return characterIndex;
    //}

    //------------------------------------------

   // For in loop

    // let person ={
    //   name: 'yin mon aye' ,
    //   age : 1000
    // }
    // for(key in person){
    //   console.log(`${key} is ${person[key]}`)
    // }
    

    //For of loop
    // let foods = ['spaghetti', 'pasta', 'pizza','grilled prown']
    // for(food of foods){
    //   console.log(food)
    // }

   // Question1 
     
  //  let foods = ['spaghetti', 'pasta', 'pizza','grilled prown']
  //  for(item in foods){
  //    console.log(`${item} is ${foods[item]}`)
  //  }
  //-------------------------------------------------------------

  //OOP

  // class Car{
  //   wheels =4
  //   color="white"

  //   drive(){
  //     console.log('car is driving')
  //   }
  // }

  // let car = new Car
  // console.log(car.color)

  // let carTwo = new Car
  // carTwo.color="yellow"
  // console.log(carTwo.color)

  //-------------------------------------------------------

  //OOP Eg
  // class Calculator{
  //   static PI=3.14
  //   plus(n1,n2){
  //     return n1+n2
  //   }
  //   minus(n1,n2){
  //     return n1-n2
  //   }
  //   multiply(n1,n2){
  //     return n1*n2
  //   }
  //   division(n1,n2){
  //     return n1/n2
  //   }
  //   remainder(n1,n2){
  //     return n1%n2
  //   }
  // }
  //   let calculator= new Calculator
  //   console.log(calculator.division(6,3))
  //   console.log(Calculator.PI)

  //OOP (constructure & access modifier)

  // class Car{
  //   Name=''
  //   wheels=4
  //   constructor(name,wheels){
  //    this.Name=name
  //    this.wheels=wheels
  //    this.drive()
  //   }
  //   drive(){
  //     console.log(this.Name+ 'is driving')
  //   }
  //   getWheel(){
  //     console.log(this.Name +'has'+ this.wheels+ 'wheels')
  //   }
  // }
  // new Car('lax',4)
  // let mazda=new Car('mazdz',6)
  // mazda.getWheel()
//-------------------------------------------------------------
//OOP (access modifier)  public private

// class Car{
//   Name="lux"
//   #hp = 350
//   getHoursePower(){
//     console.log('Horse Power is '+ this.#hp)
//   }
// }
// let car=new Car
// car.Name= "mazda"
// console.log(car.Name)
// car.getHoursePower()

//___________________________________
//Nodejs
// const {minus, add, PI}=require("./math")
 
// console.log(minus(6,9));