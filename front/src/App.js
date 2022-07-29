import "./App.css";
import Modal from "./modal/Modal";
import { useState } from "react";

export default function App() {
  let [modal, setModal] = useState(false);

  return (
    <div className="app flex justify-center items-center" data-theme="luxury">
      <Modal modal={modal} setModal={setModal} />
      <button className="btn btn-accent " onClick={() => setModal(true)}>
        зарегистрироваться
      </button>
    </div>
  );
}
