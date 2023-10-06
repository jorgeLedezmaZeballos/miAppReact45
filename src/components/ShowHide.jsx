import React,{useState} from "react";

function ShowHide() {
  const [show, setShow] = useState(true);
  const handleClick = (event) => {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide " :"Show "} Text</button>
      {show && <h3>HIDE ME</h3>}
    </div>
  );
}
export default ShowHide;