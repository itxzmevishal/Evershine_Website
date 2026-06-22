import heroVideo from "../assets/videos/Evershine.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-10">

          {/* Tagline */}
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-yellow-400 text-xs md:text-sm mb-4 md:mb-6">
            WATER • LIGHT • LEGACY
          </p>

          {/* Heading */}
          <h1 className="text-white font-bold leading-[0.9]
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          max-w-5xl">
            Stable
            <br />
            Evershine
          </h1>

          {/* Description */}
          <p className="text-gray-300
          text-base
          md:text-lg
          lg:text-xl
          mt-6 md:mt-8
          max-w-2xl">
            Landmark residences shaped around calm waterfront cues,
            rising sunlight and the quiet confidence of enduring luxury.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">

            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Explore Projects
            </button>

            <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Enquire Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;