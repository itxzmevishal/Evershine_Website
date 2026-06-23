import PageWrapper from "../components/PageWrapper";

function PressMediaPage() {
  const news = [
    {
      id: 1,
      title: "Stable Evershine Announces New Luxury Development",
      date: "January 2026",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Creating Landmark Residential Experiences",
      date: "February 2026",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "The Future Of Premium Living",
      date: "March 2026",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Luxury Housing Market Trends",
      date: "April 2026",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
     <PageWrapper>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            Press & Media
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            News, Insights
            <br />
            & Announcements
          </h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl">
            Stay updated with our latest developments,
            company news and media coverage.
          </p>

        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

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
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">

                  <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider">
                    {item.date}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-3">
                    {item.title}
                  </h3>

                  <button className="mt-6 font-semibold hover:text-yellow-600 transition-all">
                    Read More →
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </PageWrapper>
  );
}

export default PressMediaPage;