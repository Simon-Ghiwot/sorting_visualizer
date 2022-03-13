import datas from "../data";
import "../style.css";
const ToolTip = ({ algorithm, menu }) => {
  const tool = datas.filter((data) => {
    if (data.name === algorithm) return data;
  });
  if (algorithm)
    return (
      <article
        className={`${menu ? "tool-container tool-active" : "tool-container"}`}
      >
        <div className="data-container">
          Name: {tool[0].name} sort
          <br />
          Stable: {tool[0].stable}
          <br />
          Time: {tool[0].time}
          <br />
          Space: {tool[0].space}
          <br />
          Adaptivity: {tool[0].adaptivity}
        </div>
        <div className="arrow"></div>
      </article>
    );
  else return <></>;
};
export default ToolTip;
