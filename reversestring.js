function reverseString(){
    var str = "vijay Raj Singh"
    // using the split() method
    var splitString = str.split("");  // ["v","i","j","a","y"]

    // using the reverse() method to reverse the new charcter array
    var reverseArray = splitString.reverse();   // ["y","a","j","i","v"]

    // using join() method to join all element of the array into the string
    var joinArray = reverseArray.join(""); // yajiv

    // print reverse string
    console.log(joinArray)
    
}
setTimeout(reverseString, 2000)


