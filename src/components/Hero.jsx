import { motion } from "framer-motion";
import heroVideo from "../assets/videos/Evershine.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-10">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[4px] md:tracking-[6px] text-yellow-400 text-xs md:text-sm mb-4 md:mb-6"
          >
            WATER • LIGHT • LEGACY
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
            text-white
            font-bold
            leading-[0.9]
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            max-w-5xl
          "
          >
            Stable
            <br />
            Evershine
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="
            text-gray-300
            text-base
            md:text-lg
            lg:text-xl
            mt-6
            md:mt-8
            max-w-2xl
          "
          >
            Landmark residences shaped around calm waterfront cues,
            rising sunlight and the quiet confidence of enduring luxury.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
          >

            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Explore Projects
            </button>

            <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Enquire Now
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;