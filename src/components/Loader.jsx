import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-white
            text-4xl
            md:text-6xl
            font-bold
            tracking-wide
          "
        >
          Stable Evershine
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="
            h-[2px]
            bg-yellow-500
            mx-auto
            mt-6
          "
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="text-gray-400 mt-4 uppercase tracking-[4px]"
        >
          Loading Experience
        </motion.p>

      </div>
    </motion.div>
  );
}

export default Loader;