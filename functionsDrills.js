/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// function sayHello(prtMsg) {
//   console.log(prtMsg)
// }
// sayHello('hello world')

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
//  const  print = (message)=>{
//   console.log(message)

//  }
//  print( "It's time to have fun!")


/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
//    const printMessage =(message)=>{
//       console.log('Todays message is:' + message)
// }
// printMessage("assignment due today.")

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function returnSquare(a) {
//    //cobsole.log(Math.pow(a,2))
//    return a**2 
//   }
//  console.log(returnSquare(4))

  /*
   * Prompt 5:
   *
   * Create a function called reverseMessage. This function should take
   * a parameter called message. When invoked and passed a string, print the
   * string in reverse. (hint: look up some ways of doing this.)
   */
  // function reverseMessage(string){
  //    console.log(string.split("").reverse().join(""));
  //    //return newString;
  //    //console.log(newString);s
  // }
  // reverseMessage("Hello")
  
  
  /*
   * Prompt 6:
   *
   * Create a function called multiply that takes two parameters: a and b. When
   * invoked, multiply a times b. If b an argument is not passed in for b, then
   * double a (i.e. multiply it by two).
   *
   * Hint: use a default parameter.
   */
//   function multiply(a,b){
//     let c = a*b
//     if(b === undefined ){
//      c = (a*2)
//     return c}
//     else{
//       c = a*b
//       return c

//     }
//   }
//  console.log (multiply(2,4))
//  console.log(multiply(2)) 
  
  /*
   * Prompt 7:
   *
   * Fix the following code. HINT: Think Objects :)
   */
  
  /** Starter Code */
//   function makePerson(firstname, lastname) {
//     person={
//     firstname: firstname,
//       lastname: lastname
//   }
//   return person
// }
//   const zakk = makePerson('Zakk', 'F')
//   const jimmy = makePerson('Jimmy', 'B')
//   console.log(zakk)
//   console.log(jimmy)
  
  /*
   * Prompt 8:
   *
   * Write a function that returns an object. The object can be anything.*/
  
 
  // const returnsAnObject=(firstName,lastName,emailAdd)=>{
  //         user={
  //           firstName:firstName,
  //           lastName:lastName,
  //           emailAdd:emailAdd
  //         } 
  //         return user
  // }
  // console.log(returnsAnObject("Josh","Matt","codingisfun19@gmail.com"))

  /*
   * Prompt 9:
   *
   * Write a function that returns an array. The array can be of anything.
   */
  // let user=[]
  // const returnsAnArray=(firstName,lastName,emailAdd)=>{
             
  //           {  user=[
  //             firstName,
  //             lastName,
  //             emailAdd]
  //           } 
  //           return user
  //         }
    
  //   console.log(returnsAnArray("Josh","Matt","codingisfun19@gmail.com"))
  
  
  /*
   * Prompt 10:
   *
   * Write a function that, when called, adds a number passed in as a parameter to
   * the sum variable below. Invoke your method a few times and then print the sum
   */
  // let sum = 0
  // const addsANumberToSum = (Number) =>{
   
  //   sum+=Number
  //  return sum
  // }
  // console.log(addsANumberToSum(3))
  // console.log(addsANumberToSum(4))
  // console.log(addsANumberToSum(5))
     
  /** Starter Code */
  // let sum = 0
  
  
  /*
   * Prompt 11:
   *
   * Write a function that takes an array of number values and returns the sum.
   * Test it out to make sure it works.
   */
//   let arr =[]
//   let sum=0
//   const returnsArrayValuesSum=(arr)  => {

//     for(let i=0;i<arr.length;i++){
      
//       sum+=arr[i]
//    }
//    return sum;
//   }
// console.log(returnsArrayValuesSum([0,1,2,3,4]))
  

  
  /*
   * Prompt 12:
   *
   * Write a function that takes a string and returns an array of every word in
   * the string.
   */
  //let arr=[]
  // const returnsArrayOfWords=(string)=>{
    
  //      const arr= string.split(" ")
  //      return arr
       
  // }
  //      console.log(returnsArrayOfWords("have a lot of fun!" ) )  
       
  /*
   * Prompt 13:
   *
   * How can you write a function so that this expression works? It should print
   * the string "this works!"
   */
  
  /** Starter Code */
  //     function  testFunc(string1){
  //       return function(string2){
  //         return string1.concat(string2)
  //       }
  //     }
  //     testFunc("this ")("works!")
  // let addString = testFunc("this ")
  
  // console.log(addString("works!"))
  // /*
  //  * Prompt 14:
  //  *
  //  * Write a function that takes the add function below as a parameter and invokes
  //  * it, passing in 2 and 4.
  //  */
  
  // /** Starter Code */
//   function add(a,b) {
//     return function(c){
//     return a + b + c 
//   }
// }
 
//  let addThree = add(2,4)(3)
 
//   console.log(addThree)
  
  
  // /*
  //  * Prompt 15:
  //  *
  //  * Write a function that returns another function. Have the inner function print
  //  * the string "hello world"
  //  */
  function returnString(string1){
    return function(string2){
      return string1.concat(string2)
    }
  }
  returnString("hello ")("world")
  let joinStrings= returnString("hello ")
  console.log(joinStrings("world"))