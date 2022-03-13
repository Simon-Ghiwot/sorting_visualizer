import bubble from "./Algorithms/bubble";
import selection from "./Algorithms/selection";
import heap from "./Algorithms/heap";
import merge from "./Algorithms/merge";
import quick from "./Algorithms/quick";
import insertion from "./Algorithms/insertion";

const ACTION = {
  BUBBLE: "Bubble",
  SELECTION: "Selection",
  HEAP: "Heap",
  MERGE: "Merge",
  QUICK: "Quick",
  INSERTION: "Insertion",
  BARS: "Bar",
};
const reducer = (state, action) => {
  const { algorithm, setIsToolTipOpen } = action.payload;
  switch (action.type) {
    case ACTION.BARS:
      return { ...state, bars: action.payload };
    case ACTION.BUBBLE:
      bubble(algorithm, setIsToolTipOpen);
      break;
    case ACTION.SELECTION:
      selection(algorithm, setIsToolTipOpen);
      break;
    case ACTION.HEAP:
      heap(algorithm, setIsToolTipOpen);
      break;
    case ACTION.MERGE:
      merge(algorithm, setIsToolTipOpen);
      break;
    case ACTION.QUICK:
      quick(algorithm, setIsToolTipOpen);
      break;
    default:
      insertion(algorithm, setIsToolTipOpen);
      break;
  }
  return state;
};
export default reducer;
