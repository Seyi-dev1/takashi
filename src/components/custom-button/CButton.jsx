/* eslint-disable react/prop-types */
import "./cbutton.scss";
const CButton = ({ size, children, type, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${size} ${type}`}>
      {children}
    </button>
  );
};

export default CButton;
