function NriCorner() {
  const articles = [
    {
      id: 1,
      title: "Guide For NRI Property Investment",
      description:
        "Everything NRIs need to know before investing in premium real estate projects in India.",
    },
    {
      id: 2,
      title: "Documents Required For Property Purchase",
      description:
        "A complete checklist of legal and financial documents for smooth transactions.",
    },
    {
      id: 3,
      title: "Tax Benefits & Compliance",
      description:
        "Understanding taxation, repatriation and compliance for NRI property owners.",
    },
  ];

  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              NRI Corner
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Resources For Global Investors
            </h2>
          </div>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-fit">
            Visit NRI Corner
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                <span className="text-xl font-bold">NRI</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {article.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {article.description}
              </p>

              <button className="mt-6 font-semibold hover:text-yellow-600 transition-all">
                Read Article →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default NriCorner;