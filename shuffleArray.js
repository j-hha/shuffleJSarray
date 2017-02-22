// Function to shuffle items in an array

var myArray = ['one','two','three','four'];

var shuffleArray = function() {
  //loops over the array
  for (var i = 0, length = myArray.length; i < length; i++) {
    //creates a random whole number
    var x = Math.round(Math.random() * length);
    //if random number is identical to the current index,
    //the item at this index is saved in the variable itemToShuffl, removed
    // and then added back in at the end of the array
    if (x === i) {
      var itemToShuffle = myArray[i];
      myArray.splice(x, 1);
      myArray.push(itemToShuffle);
    }
  }
};

shuffleArray();

console.log(myArray);
