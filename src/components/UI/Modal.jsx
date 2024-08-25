import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "" }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const currentModal = modalRef.current;
    if (open) {
      currentModal.showModal();
    }
    return () => currentModal.close();
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
