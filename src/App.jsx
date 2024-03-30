import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Components/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");

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
    <div className="hero min-h-screen bg-red-500 flex flex-col justify-start items-center pt-20">
      <h1 className="text-4xl md:text-6xl font-bold love-ya-like-a-sister-regular flex items-center text-white">
        <span className="mr-2">LOVE</span>
        <span className="text-pink-500">
          <FontAwesomeIcon
            icon={faHeart}
            className="ml-3 md:ml-5 mr-3 md:mr-5"
            style={{ color: "white" }}
            beat
          />
        </span>
        <span className="ml-2">CALCULATOR</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-20">
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setYourName(e.target.value)}
          className="input input-bordered rounded-lg shadow-lg  madimi-one-regular w-full md:w-auto max-w-md md:mr-4 text-lg mb-4 md:mb-0"
        />
        <input
          type="text"
          placeholder="His/Her name"
          onChange={(e) => setPartnerName(e.target.value)}
          className="input input-bordered rounded-lg shadow-lg  madimi-one-regular w-full md:w-auto max-w-md md:ml-4 text-lg"
        />
      </div>

      <Modal
        displayModal={openModal}
        yourName={yourName}
        partnerName={partnerName}
      />
    </div>
  );
}

export default App;
