function Associations() {
  const partners = [
    "Architecture Partner",
    "Construction Partner",
    "Finance Partner",
    "Legal Partner",
    "Engineering Partner",
    "Channel Partner",
  ];

  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
            Our Associations
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Built With Trusted Partners
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Collaborating with industry-leading consultants,
            architects and strategic partners to deliver
            exceptional developments.
          </p>

        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                h-32
                flex
                items-center
                justify-center
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <span className="text-center text-gray-700 font-medium px-4">
                {partner}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Associations;