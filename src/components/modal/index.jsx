import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "-100vh", opacity: 0 },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit
          suscipit nostrum, fugit harum odio architecto explicabo molestias
          delectus asperiores reprehenderit libero exercitationem debitis
          temporibus, quibusdam pariatur totam corrupti! Iure?
        </p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
