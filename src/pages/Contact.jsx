import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
     <PageWrapper>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-semibold mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Let's Start
            <br />
            The Conversation
          </h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl">
            Connect with our team for project details, site visits,
            pricing information and investment opportunities.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send An Enquiry
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-yellow-500 resize-none"
                />

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

            {/* Contact Info */}
            <div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div className="bg-white rounded-3xl p-8 shadow-sm">

                  <h3 className="font-bold text-xl mb-3">
                    Office Address
                  </h3>

                  <p className="text-gray-600">
                    Nashik, Maharashtra, India
                  </p>

                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">

                  <h3 className="font-bold text-xl mb-3">
                    Contact Number
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">

                  <h3 className="font-bold text-xl mb-3">
                    Email Address
                  </h3>

                  <p className="text-gray-600">
                    info@stableevershine.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </PageWrapper>
  );
}

export default Contact;