"use client";
import { motion } from "framer-motion";

const Separator = ({ bg = "text-amber-100" }: { bg: string }) => {
  return (
    <div className="relative w-[160px] h-[26px] mx-auto overflow-hidden">
      <motion.hr
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={`w-full border-t-2 ${bg} origin-left shadow-cyan-500/50`}
      />
    </div>
  );
};
export default Separator;
