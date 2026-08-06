import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

import { fadeUp } from "./resume-motion";

export default function ResumeSection(props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      // animate="show"
      whileInView="show"
      viewport={{
        once: true,
        // amount: 0.2,
        amount: 0.05,
      }}
    >
      <Section {...props} />
    </motion.div>
  );
}
