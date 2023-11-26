import { HiXMark } from 'react-icons/hi2'

/* eslint-disable react/prop-types */
function Modal({ onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors text-center z-30 ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-md shadow p-6 transition-all
              ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <HiXMark />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
