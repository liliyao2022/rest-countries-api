import "./DataField.scss";

const DataField = ({ title, data }) => {
  return (
    <div className="card-data-container">
      <span className="title">{`${title}: `}</span>
      <span>{data}</span>
    </div>
  );
};

export default DataField;
