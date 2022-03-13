const DataType = ({ name, setDataToBeSorted }) => {
  return <button onClick={() => setDataToBeSorted(name)}>{name}</button>;
};
export default DataType;
