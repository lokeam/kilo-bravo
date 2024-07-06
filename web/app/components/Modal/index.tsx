import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

import { TfiClose } from "react-icons/tfi";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  focusTrapOptions?: Record<string, unknown>;
  modalHeading?: string;
  onClose: () => void;
  size?: 'sm' | 'lg';
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, size = 'sm', modalHeading = ''}) => {
  if (!isOpen) return null;

  const modalSize = {
    'sm': 'max-w-md',
    'lg': 'max-w-2xl'
  };

  const modalHeadingBorder = modalHeading === '' ? 'border-b-0 p-2' : 'border-b p-5';
  const modalContentPadding = modalHeading === '' ? 'p-6' : 'pt-0 p-6';

  return ReactDOM.createPortal(
    <React.Fragment>
      <div
        aria-modal="true"
        className="modal_wrapper fixed inset-x-0 top-0 z-60 h-screen overflow-y-auto overflow-x-hidden md:h-full items-center justify-center flex modal_scroll"
        role="dialog"
      >
        <div className={`modal_size relative p-4 h-full w-full md:h-auto ${modalSize[size]}`}>
          <div className="modal_content relative flex max-h-[90dvh] flex-col bg-gray-800">
            <div className={`modal_heading items-start justify-between rounded-t ${modalHeadingBorder}`}>
              { modalHeading === '' ? null : (
                <h3 className="text-lg font-semibold text-white">{modalHeading}</h3>
              ) }
              <button className="modal_close_button text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <TfiClose onClick={onClose} />
              </button>
            </div>
            <div className={`modal_body flex-1 overflow-auto ${modalContentPadding} bg-gray-800`}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="modal_bg_overlay bg-black bg-opacity-90 fixed inset-0 z-[55]"></div>
    </React.Fragment>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;