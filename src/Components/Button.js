const Button = ({ name, dispatch, algorithm, setIsToolTipOpen }) => {
  const handleClick = () => {
    algorithm(name);
    dispatch({ type: name, payload: { algorithm, setIsToolTipOpen } });
  };
  return <button onClick={handleClick}>{name} Sort</button>;
};
export default Button;
