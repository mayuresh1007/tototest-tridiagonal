import React from "react";
import { Button } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const Checkbox = ({ label, checked, onClick, onDelete }) => {
  return (
    <div className="container">
      <input type="checkbox" onChange={onClick} />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {label}  {!checked ? <Badge bg="danger">New</Badge> : <Badge bg="warning">Done</Badge>}
      </span>
      <Button onClick={onDelete}>x</Button>
    </div>
  );
};

export default Checkbox;

// import React from "react";

// const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp, id }) => (
//   <div className="checkbox">
//     <div
//       tabIndex="0"
//       role="checkbox"
//       aria-checked
//       onClick={onClick}
//       onKeyUp={onKeyUp}
//     >
//       <span>id-{id} </span>
//       <input
//         tabIndex="-1"
//         type="checkbox"
//         checked={checked}
//         onChange={onClick}
//       />
//       <span
//         style={{
//           textDecoration: checked ? "line-through" : "none", // Optional: Strikethrough the text when checked
//         }}
//       >
//         {label}
//       </span>
//     </div>
//     <button type="button" className="checkbox-delete" onClick={onDelete}>
//       X
//     </button>
//   </div>
// );
// export default Checkbox;
