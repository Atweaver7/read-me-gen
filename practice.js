var t = "aaron";

// var x = 5
// var x = 6

// let aaron = 5
// let aaron = 6
// console.log(aaron);


// for (let i = 0; i < 100; i++) {
//   a.push(i);
// }

// for (let i = 0; i < a.length; i++) {
//   if (i % 2 === 0) {
//     evens.push(i);
//   }
// }

function test(length, bool) {
  
  let arr = [];

  if (bool) {
    arr = createEvens(length)
    
  } else {
    for (let i = 0; i < length; i++) {
      if (i % 2 !== 0) {
        arr.push(i);
      }
    }
  }

  return arr
}

function createEvens(length) {
    let arr = []
    
      for (let i = 0; i < length; i++) {
         
      if (i % 2 === 0) {
        arr.push(i);
      }
    }

      return arr

     }




// console.log(arr)



console.log(test(100,true));

// console.log(evens);
