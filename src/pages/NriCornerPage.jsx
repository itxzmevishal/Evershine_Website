import PageWrapper from "../components/PageWrapper";

function NriCornerPage() {
  const resources = [
    {
      title: "Guide For NRI Property Investment",
      description:
        "Everything NRIs need to know before investing in Indian real estate.",
    },
    {
      title: "Documents Required For Purchase",
      description:
        "Complete legal and financial checklist for NRI buyers.",
    },
    {
      title: "Taxation & Compliance",
      description:
        "Understanding tax implications and regulations for NRI property owners.",
    },
    {
      title: "Home Loan For NRIs",
      description:
        "Learn how NRIs can secure home loans and financing options.",
    },
    {
      title: "Power Of Attorney Guide",
      description:
        "How to legally authorize representatives for property transactions.",
    },
    {
      title: "Repatriation Rules",
      description:
        "Guidelines for transferring funds and proceeds overseas.",
    },
  ];

  return (
     <PageWrapper>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            NRI Corner
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Global Investors
            <br />
            Welcome Home
          </h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl">
            Dedicated resources and guidance for Non-Resident Indians
            looking to invest in premium real estate developments.
          </p>

        </div>

      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {resources.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                  <span className="font-bold text-lg">NRI</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-6 font-semibold hover:text-yellow-600 transition-all">
                  Read More →
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Looking To Invest From Abroad?
          </h2>

          <p className="text-gray-600 mt-6">
            Connect with our NRI assistance team for personalized guidance.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
            Contact NRI Team
          </button>

        </div>

      </section>
    </PageWrapper>
  );
}

export default NriCornerPage;