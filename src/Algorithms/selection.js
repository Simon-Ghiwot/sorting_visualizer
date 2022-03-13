import delay, { disable, enable } from "./helper";
const selection = async (algorithm, setIsToolTipOpen) => {
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom

  disable();
  for (let i = 0; i < bars.length; i++) {
    let min = i;
    bars[min].style.background = "yellow"; //setting the color for the element to be checked
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red"; //setting the color for the element to be checked
      await delay();
      if (parseInt(bars[min].style.height) > parseInt(bars[j].style.height)) {
        bars[min].style.background = "turquoise";
        bars[j].style.background = "yellow";
        bars[i].style.background = "rgb(108, 108, 146)"; //setting the color of the in which the sorted element is entering
        min = j;
      } else bars[j].style.background = "turquoise";
    }
    if (min !== i) {
      //swapping the elements
      let temp = bars[i].style.height;
      await delay(); //used because there is some sort of bug when i don't use it
      bars[i].style.height = bars[min].style.height;
      await delay(); //used because there is some sort of bug when i don't use it

      bars[min].style.height = temp;
      console.log("modified min", bars[min].style.height, min);
    }
    console.log("i", i);
    bars[min].style.background = "turquoise";
    bars[i].style.background = "rgb(223, 153, 223)"; //marking the part of the data that is sorted
  }
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
export default selection;
