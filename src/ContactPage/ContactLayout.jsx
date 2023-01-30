import React from "react";
import { motion } from "framer-motion";
import CantactLogo from "./ContactLogo";
import ContactLogoCaption from "./ContactLogoCaption";
import ContactDetail from "./ContactDetail";

const ContactLayout = () => {
  const mainLayoutStyle = {
    textAlign: "center",
  };

  return (
    <motion.div
      style={mainLayoutStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <CantactLogo />
      <ContactLogoCaption />
      <ContactDetail />
    </motion.div>
  );
};

export default ContactLayout;
