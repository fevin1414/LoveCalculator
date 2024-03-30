import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    const modalDialog = document.getElementById("my_modal_5");
    if (modalDialog) {
      modalDialog.open = true;
      setIsModalOpen(true);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="hero min-h-screen bg-red-500 flex flex-col justify-start items-center pt-20">
        <h1 className="text-6xl font-bold love-ya-like-a-sister-regular flex items-center text-white">
          <span className="mr-2">LOVE</span>
          <span className="text-pink-500">
            <FontAwesomeIcon
              icon={faHeart}
              className="ml-5 mr-5"
              style={{ color: "white" }}
              beat
            />
          </span>
          <span className="ml-2">CALCULATOR</span>
        </h1>
        <div className="flex justify-center mt-20">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered rounded-lg shadow-lg w-full madimi-one-regular max-w-md mr-4 text-lg"
          />
          <input
            type="text"
            placeholder="His/Her name"
            className="input input-bordered rounded-lg shadow-lg madimi-one-regular w-full max-w-md ml-4 text-lg"
          />
        </div>

        <Modal displayModal={openModal} />
      </div>
    </>
  );
}

export default App;
