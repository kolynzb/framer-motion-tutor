import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="backdrop"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
