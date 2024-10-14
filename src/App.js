import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Abrir</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;

