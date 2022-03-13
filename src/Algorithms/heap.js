import delay, { disable, enable, resetBarColor } from "./helper";
const heap = async (algorithm, setIsToolTipOpen) => {
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom
  disable();
  resetBarColor();
  for (let i = bars.length - 1; i >= 0; i--) {
    await Promise.all([heapify(bars, i, bars.length - 1)]); //used to move the minimum value from the parent to the childrens
  }
  for (let i = bars.length - 1; i > 0; i--) {
    let temp = bars[i].style.height; //swapping the the first element to the last free space available
    await delay();
    bars[i].style.height = bars[0].style.height;
    await delay();
    bars[0].style.height = temp;
    await delay();

    await Promise.all([heapify(bars, 0, i - 1)]); //taking the maximum element to the first place

    bars[i].style.background = "rgb(223, 153, 223)"; //marking the value as sorted
  }
  bars[0].style.background = "rgb(223, 153, 223)"; //marking the value as sorted
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
const heapify = async (bars, i, heapEdge) => {
  //code source http://algostructure.com/sorting/heapsort.php
  while (2 * i + 1 <= heapEdge) {
    //if the element to be heapified has a child the eneter the loop
    let j = 2 * i + 1;
    if (j < heapEdge)
      if (parseInt(bars[j].style.height) < parseInt(bars[j + 1].style.height))
        //checking if the element has the sibling getting the max element from the sibling
        j++;
    if (parseInt(bars[i].style.height) < parseInt(bars[j].style.height)) {
      //swapping the parent element with there children
      bars[i].style.background = "yellow";
      bars[j].style.background = "red";
      let temp = bars[i].style.height;
      await delay();
      bars[i].style.height = bars[j].style.height;
      await delay();
      bars[j].style.height = temp;
      bars[i].style.background = bars[j].style.background = "turquoise";
      i = j;
    } else break; //if the element is on the already in the last element
  }
};
export default heap;
