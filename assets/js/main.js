// program to reverse the string
function reverseString() {

    // Take input from the user
    const str = (document.getElementById("str").value).toString();

    // Step 1. Use the split() method to return a new array
    const splitString = str.split("");      // const splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]


    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse();     // const reverseArray = ["h", "e", "l", "l", "o"];
    // ["o", "l", "l", "e", "h"]


    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join("");     // const joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    let reverseStr = `Reversed String : ${joinArray}`;

    console.log(reverseStr);
    document.querySelector('#h4').innerHTML = reverseStr;
}
