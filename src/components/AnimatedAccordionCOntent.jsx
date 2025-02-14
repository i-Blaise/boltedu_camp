import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

const AnimatedAccordionContent = ({ children, className }) => {
  return (
    <Accordion.Content asChild>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </Accordion.Content>
  );
};

export default AnimatedAccordionContent;
