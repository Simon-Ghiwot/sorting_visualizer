const delay = () => {
  const speed = 100 - parseInt(document.getElementById("speed").value);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, speed);
  });
};
export function disable() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  const range = document.getElementById("range");
  range.disabled = true;
}
export function enable() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  const range = document.getElementById("range");
  range.disabled = false;
}
export async function swap(bars, i, j) {
  let temp = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = temp;
}
export const resetBarColor = () => {
  const bars = document.getElementsByClassName("bars");
  for (let i = 0; i < bars.length; i++) bars[i].style.background = "turquoise";
};
export default delay;
