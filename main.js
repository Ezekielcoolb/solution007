// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
// Solution
  function maskify(cc) {
    let array1 = cc.split('')
    let array2 =[]
    
    
    for(let i = 0; i < array1.length-4; i++) {

        array2.push(array1[i])
    }
    let newArray =  array2.map(x => '#')
    return ((newArray.concat(array1.slice(-4))).join('')); 
    

}

maskify("")