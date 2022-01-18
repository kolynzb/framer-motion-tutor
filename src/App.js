import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/modal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save_button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
