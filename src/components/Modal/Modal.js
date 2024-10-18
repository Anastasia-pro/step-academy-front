import "./Modal.css";
import React from "react";

export function handleModalClose(setActive) {
  return () => setActive(false);
}

const Modal = ({ active, setActive, children }) => {
  
  
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={handleModalClose(setActive)}>
      <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()} >
        {children}
      </div>
    </div>
  );
};

export default Modal;
