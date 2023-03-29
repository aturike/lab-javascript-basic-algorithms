// Iteration 1: Names and Input
const hacker1 = "Adam";
const hacker2 = "Dani";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let driverEdit = "";

for (let i = 0; i < hacker1.length; i++) {
  driverEdit += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(driverEdit);

console.log(hacker2.split("").reverse().join(""));

// Another for loop solution

// let navigatorEdit ="";
// for (let j=hacker2.length; j>-1;j-- ){
// navigatorEdit +=hacker2.charAt(j)
// }
// console.log(navigatorEdit);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//BONUS 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim ut sem. Odio morbi quis commodo odio aenean sed adipiscing. Massa id neque aliquam vestibulum. Ultricies mi quis hendrerit dolor magna. Malesuada proin libero nunc consequat interdum. Tellus orci ac auctor augue mauris. Duis at tellus at urna condimentum mattis. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Et pharetra pharetra massa massa ultricies mi. Vitae tortor condimentum lacinia quis vel. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Quisque id diam vel quam elementum pulvinar etiam non.Iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus. Nibh praesent tristique magna sit amet purus. Non nisi est sit amet facilisis magna. In hendrerit gravida rutrum quisque non tellus orci. Vulputate dignissim suspendisse in est. Cursus metus aliquam eleifend mi in. Tellus at urna condimentum mattis pellentesque id. Purus faucibus ornare suspendisse sed nisi. A diam sollicitudin tempor id eu nisl nunc. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Faucibus in ornare quam viverra orci sagittis eu. Integer malesuada nunc vel risus commodo viverra maecenas. Non enim praesent elementum facilisis leo vel fringilla est. Erat nam at lectus urna duis convallis convallis tellus.";

console.log(longText.split(" ").length);
console.log(longText.match(/et/g).length);

//BONUS 2

const phraseToCheck = "Amor, Roma";

let palindromVal = "";

for (let k = 0; k < phraseToCheck.length; k++) {
  if (phraseToCheck.charAt(k).match(/(\W|\s)/)) {
    continue;
  } else {
    palindromVal += phraseToCheck.charAt(k).toLowerCase();
  }
}

console.log(
  palindromVal === palindromVal.split("").reverse().join("")
    ? "The word is a palindrom"
    : "The word is not a palindrom"
);
