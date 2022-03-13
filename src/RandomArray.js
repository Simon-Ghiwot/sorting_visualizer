import { resetBarColor } from "./Algorithms/helper";

const TYPE_OF_BARS = {
  RANDOM: "Random",
  NEARLY_SORTED: "Nearly Sorted",
  FEW_UNIQUE: "Few Unique",
};
const GenerateRandomArray = (size, type) => {
  const bars = [];
  const MAX = 580;
  const MIN = 20;
  const UNIQUE_MIN = 0;

  resetBarColor(); //this function is used to reset the color of the bars after sorting algorithm has run
  if (type === TYPE_OF_BARS.RANDOM)
    for (let i = 0; i < size; i++) {
      bars.push(Math.floor(Math.random() * (MAX - MIN) + MIN));
    }

  if (type === TYPE_OF_BARS.NEARLY_SORTED) {
    for (let i = 0, linear = 20; i < size; i++) {
      //every time the iterator is divisible by 2 insert random number
      if (i % 4 === 0) bars.push(Math.floor(Math.random() * (MAX - MIN) + MIN));
      else bars.push((linear += 4));
    }
  }

  if (type === TYPE_OF_BARS.FEW_UNIQUE) {
    const unique = []; //array used for to hold the unique numbers to be created
    let currentValue = 0; //used as index to access the unique array
    for (let i = 0; i < size / 5; i++)
      unique.push(Math.floor(Math.random() * (MAX - MIN) + MIN)); //generating random array between 20 and 600
    const UNIQUE_MAX = unique.length; //lused to hold the maximum index of the the unique array

    for (let i = 0; i < size; i++) {
      currentValue = Math.floor(
        Math.random() * (UNIQUE_MAX - UNIQUE_MIN) + UNIQUE_MIN //used to generate random index for the unique array
      );
      bars.push(unique[currentValue]);
    }
  }

  return bars;
};
export default GenerateRandomArray;
