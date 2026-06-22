function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Residence"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            Begin Your Journey
          </p>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover A New Standard
            <br />
            Of Premium Living
          </h2>

          <p className="text-gray-300 text-base md:text-lg mt-6 max-w-2xl">
            Connect with our team to explore available residences,
            project details and exclusive investment opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Enquire Now
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Download Brochure
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;