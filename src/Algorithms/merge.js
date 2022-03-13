import delay, { disable, enable, resetBarColor } from "./helper";

const merge = async (bars, start, mid, end) => {
  const size_one = mid - start + 1;
  const size_two = end - mid;

  const left = new Array(size_one); //used to hold the left array
  const left_index = new Array(size_one); //used to hold the index of the bars to later animate
  const right = new Array(size_two);
  const right_index = new Array(size_two);

  for (let i = 0; i < left.length; i++) {
    //populating the left array  and the left index array
    left[i] = bars[start + i].style.height;
    left_index[i] = start + i;
  }
  for (let i = 0; i < right.length; i++) {
    //poplulating the right array and the right index array
    right[i] = bars[mid + 1 + i].style.height;
    right_index[i] = mid + 1 + i;
  }
  let i = 0,
    j = 0,
    k = start;
  while (i !== left.length && j !== right.length) {
    bars[left_index[i]].style.background = "yellow";
    bars[right_index[j]].style.background = "red";

    await delay();

    if (parseInt(left[i]) < parseInt(right[j])) {
      //checking for the smallest element from the left and right array
      bars[k].style.height = left[i];
      size_one + size_two === bars.length
        ? (bars[left_index[i]].style.background = "rgb(223, 153, 223)") //marking the part of the data that is sorted
        : (bars[left_index[i]].style.background = "turquoise");
      i++;
      k++;
    } else {
      bars[k].style.height = right[j];
      size_one + size_two === bars.length
        ? (bars[right_index[j]].style.background = "rgb(223, 153, 223)") //marking the part of the data that is sorted
        : (bars[right_index[j]].style.background = "turquoise");
      j++;
      k++;
    }
  }
  while (j !== right.length) {
    bars[right_index[j]].style.background = "red"; //changing the color of the array that is not exhausted to red
    await delay();
    bars[k].style.height = right[j];
    size_one + size_two === bars.length
      ? (bars[right_index[j]].style.background = "rgb(223, 153, 223)") //marking the part of the data that is sorted
      : (bars[right_index[j]].style.background = "turquoise");
    k++;
    j++;
  }
  while (i !== left.length) {
    bars[left_index[i]].style.background = "yellow"; //changing the color of the array that is not exhausted to yellow
    await delay();
    bars[k].style.height = left[i];
    size_one + size_two === bars.length
      ? (bars[left_index[i]].style.background = "rgb(223, 153, 223)") //marking the part of the data that is sorted
      : (bars[left_index[i]].style.background = "turquoise");
    k++;
    i++;
  }
};
const mergeSort = async (bars, start, end) => {
  if (start === end) return; //base case if the start and end is the same means that the array only contains one element

  let mid = Math.floor(start + (end - start) / 2); //calculating the mid element

  await mergeSort(bars, start, mid);
  await mergeSort(bars, mid + 1, end);
  await merge(bars, start, mid, end);
};
const mergeSortHelper = async (algorithm, setIsToolTipOpen) => {
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom
  resetBarColor();
  disable();
  await mergeSort(bars, 0, bars.length - 1);
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
export default mergeSortHelper;
