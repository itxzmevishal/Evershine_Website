import PageWrapper from "../components/PageWrapper";

function Associations() {
  const partners = [
    "Architecture Partner",
    "Construction Partner",
    "Finance Partner",
    "Legal Partner",
    "Engineering Partner",
    "Channel Partner",
    "Landscape Partner",
    "Interior Design Partner",
    "Technology Partner",
    "Marketing Partner",
    "Banking Partner",
    "Consulting Partner",
  ];

  return (
     <PageWrapper>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            Our Associations
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Trusted Partners
            <br />
            Strong Foundations
          </h1>

          <p className="text-gray-300 text-lg mt-8 max-w-3xl">
            Collaborating with leading consultants, architects,
            engineers and strategic partners to deliver
            exceptional developments.
          </p>

        </div>

      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  h-40
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <span className="text-center text-gray-700 font-semibold px-4">
                  {partner}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Partnerships Matter */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto text-center px-4">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Collaboration Drives Excellence
          </h2>

          <p className="text-gray-600 mt-8 text-lg leading-relaxed">
            Every successful development is the result of
            strong collaboration between experts across
            architecture, engineering, finance and design.
            Together, we create projects that stand the test
            of time.
          </p>

        </div>

      </section>
    </PageWrapper>
  );
}

export default Associations;