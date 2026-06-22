function AboutPreview() {
  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-4xl mb-16">

          <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
            About Stable Evershine
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-gray-900
            leading-tight
          "
          >
            A Brand Inspired By
            <br />
            Water, Shell & Sunrise
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl">
            Stable Evershine reflects growth, positivity and timeless
            craftsmanship. Inspired by a shell emerging from water and the
            warmth of a new sunrise, every development is designed to create
            exceptional living experiences.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <span className="text-2xl">◉</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Shell From Water
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Inspired by the emergence of a shell from water,
              symbolizing beauty, strength and timeless elegance.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <span className="text-2xl">☀</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sunrise & Growth
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Every project reflects positivity,
              opportunity and the promise of new beginnings.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <span className="text-2xl">▣</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Premium Living
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Luxury residences crafted with modern architecture,
              thoughtful planning and enduring quality.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;