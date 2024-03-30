import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  displayModal,
  partnerName,
  yourName,
  percentage,
  comment,
}) => {
  const closeModal = () => {
    const modalDialog = document.getElementById("my_modal_5");
    if (modalDialog) {
      modalDialog.close();
    }
  };

  const isCalculateDisabled =
    yourName.trim() === "" || partnerName.trim() === "";

  return (
    <div>
      <button
        onClick={displayModal}
        disabled={isCalculateDisabled}
        className="btn bg-white text-red-500 madimi-one-regular mt-6 px-8 py-3 text-lg"
      >
        Calculate ❤️
      </button>
      <dialog
        id="my_modal_5"
        className="modal modal-top sm:modal-middle "
        open={false}
      >
        <div className="modal-box dark:bg-white">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="font-bold text-lg madimi-one-regular text-center">
            Your Result
          </h3>
          <div className="flex justify-center mt-5">
            <input
              type="text"
              disabled
              value={yourName}
              className="input input-bordered rounded-lg shadow-lg w-full madimi-one-regular  max-w-md mr-4 text-lg disabled:bg-white disabled:text-black "
            />
            <span className="text-pink-500">
              <FontAwesomeIcon
                icon={faHeart}
                className="ml-5 mr-5 mt-3"
                style={{ color: "red", fontSize: "28px" }}
                beat
              />
            </span>
            <input
              type="text"
              value={partnerName}
              disabled
              className="input input-bordered rounded-lg shadow-lg madimi-one-regular  w-full max-w-md ml-4 text-lg disabled:bg-white disabled:text-black "
            />
          </div>
          <div className="radial-progress-wrapper flex justify-center mt-5">
            <div
              className="radial-progress bg-primary text-primary-content border-4 border-primary"
              style={{ "--value": `${percentage}` }}
              role="progressbar"
            >
              {percentage} %
            </div>
          </div>
          <p className="text-lg font-bold mt-3 text-center love-ya-like-a-sister-regular">
            {comment}
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
