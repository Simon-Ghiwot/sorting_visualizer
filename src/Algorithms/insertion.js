import delay, { disable, enable } from "./helper";

const insertion = async (algorithm, setIsToolTipOpen) => {
  disable();
  const bars = document.getElementsByClassName("bars"); //getting all the bars to be sorted from the dom
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "yellow"; //setting the bar that is checked to yellow
    let j = i; // j is the element that is trying to find the correct place
    let value = parseInt(bars[i].style.height);
    while (j > 0 && parseInt(bars[j - 1].style.height) > value) {
      bars[j - 1].style.background = "yellow"; //setting the bar that is checked to yellow
      bars[j].style.background = "red"; //setting the bar that is checked to red
      await delay();
      bars[j].style.height = bars[j - 1].style.height; //creating a gap in the data that is being sorted
      bars[j].style.background = "rgb(223, 153, 223)"; //marking the value as sorted
      bars[j - 1].style.background = "rgb(223, 153, 223)"; //marking the value as sorted
      j--;
    }
    await delay();
    bars[j].style.height = `${value}px`; //assigning the correct value in the hole that is left off
    bars[i].style.background = "rgb(223, 153, 223)";
  }
  enable();
  setIsToolTipOpen(false); //used to close the tool tip component
  algorithm("");
};
export default insertion;
