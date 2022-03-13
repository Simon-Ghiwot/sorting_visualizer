import delay, { disable, enable } from "./helper";
const partition = async (bars, start, end) => {
  const pivot = parseInt(bars[end].style.height); //element used as pivot
  let pivotIndex = start; //holds the index of the first element that is greater than the pivot
  for (let i = start; i < end; i++) {
    bars[pivotIndex].style.background = "yellow";
    bars[i].style.background = "red";
    if (parseInt(bars[i].style.height) <= pivot) {
      //if the element is greater than the pivot then swap and modify the pivotIndex
      let temp = bars[i].style.height;
      await delay(); //used because there is some sort of bug when i don't use it
      bars[i].style.height = bars[pivotIndex].style.height;
      await delay(); //used because there is some sort of bug when i don't use it
      bars[pivotIndex].style.height = temp;

      pivotIndex++;
    }
    bars[pivotIndex].style.background = "turquoise";
    bars[i].style.background = "turquoise";
  }
  //this swap was made because the we need to put the pivot element where the pivot is less than the other element
  let temp = bars[end].style.height;
  await delay(); //used because there is some sort of bug when i don't use it
  bars[end].style.height = bars[pivotIndex].style.height;
  await delay(); //used because there is some sort of bug when i don't use it
  bars[pivotIndex].style.height = temp;

  return pivotIndex;
};
const quickSort = async (bars, start, end) => {
  if (start === end) bars[start].style.background = "rgb(223, 153, 223)"; //marking the part of the data that is sorted
  if (start < end) {
    const partitionIndex = await partition(bars, start, end);
    bars[partitionIndex].style.background = "rgb(223, 153, 223)"; //marking the part of the data that is sorted
    await quickSort(bars, start, partitionIndex - 1);
    await quickSort(bars, partitionIndex + 1, end);
  }
};
const quickSortHelper = async (algorithm, setIsToolTipOpen) => {
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom
  disable();
  //todo quick sort sorting algorithim goes here
  await quickSort(bars, 0, bars.length - 1);
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
export default quickSortHelper;
