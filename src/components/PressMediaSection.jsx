function PressMediaSection() {
  const news = [
    {
      id: 1,
      title: "Stable Evershine Announces New Luxury Development",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      date: "January 2026",
    },
    {
      id: 2,
      title: "Creating Landmark Residential Experiences",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      date: "February 2026",
    },
    {
      id: 3,
      title: "The Future Of Premium Living In Nashik",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
      date: "March 2026",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              Press & Media
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Latest Updates
            </h2>
          </div>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-fit">
            View All News
          </button>

        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {news.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

              </div>

              <div className="p-6">

                <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider">
                  {item.date}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-3">
                  {item.title}
                </h3>

                <button className="mt-6 text-black font-semibold hover:text-yellow-600 transition-all">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PressMediaSection;