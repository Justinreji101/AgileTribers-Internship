import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="modal-container">
      <button onClick={openModal} className="modal-open-btn">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Title</h2>
            <p>This is a modal popup! Click outside or the close button to exit.</p>
            <button onClick={closeModal} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;