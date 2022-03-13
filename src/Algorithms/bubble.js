import delay, { swap, disable, enable } from "./helper";

const bubble = async (algorithm, setIsToolTipOpen) => {
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom

  disable();
  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - 1 - i; j++) {
      bars[j].style.background = "yellow"; //setting the color for the element to be checked
      bars[j + 1].style.background = "rgb(236, 101, 101)"; //setting the color for the element to be checked

      await delay(); //creating a delay before swapping
      //the height of the bars is string and needs to be converted to integer
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height))
        await swap(bars, j, j + 1);

      bars[j].style.background = "turquoise"; //changing back the color of the elements that were checked to original color
      bars[j + 1].style.background = "turquoise";
    }
    bars[bars.length - 1 - i].style.background = "rgb(223, 153, 223)"; //marking the part of the data that is sorted
  }
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
export default bubble;
