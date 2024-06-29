import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

import { TfiClose } from "react-icons/tfi";
// import { createPortal } from "react-dom";


interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  focusTrapOptions?: Record<string, unknown>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {

  console.log('ding - modal called');
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        aria-modal="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal flex modal_scroll"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {children}
            <button className="modal_close_button text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <TfiClose onClick={onClose} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-90 fixed inset-0 z-40"></div>
    </React.Fragment>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;