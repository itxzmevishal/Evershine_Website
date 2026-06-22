import { FiSearch } from "react-icons/fi";

function HeroSearch() {
  return (
    <section className="relative z-20 bg-white px-4 md:px-6 lg:px-10 py-8">

      <div className="max-w-7xl mx-auto">

        <div className="
          bg-white
          rounded-3xl
          shadow-2xl
          border border-gray-100
          p-5 md:p-6 lg:p-8
        ">

          <p className="text-gray-500 uppercase tracking-[3px] text-xs md:text-sm font-semibold mb-4">
            Find Your Preferred Residence
          </p>

          <div className="flex flex-col lg:flex-row gap-4">

            {/* Search Input */}
            <div className="flex items-center flex-1 border border-gray-200 rounded-2xl px-4">

              <FiSearch className="text-gray-400 text-xl" />

              <input
                type="text"
                placeholder="Search by project, location, lifestyle..."
                className="
                  w-full
                  px-3
                  py-4
                  outline-none
                  text-sm
                  md:text-base
                "
              />

            </div>

            {/* Search Button */}
            <button
              className="
              w-full
              lg:w-auto
              bg-teal-700
              hover:bg-teal-800
              text-white
              px-10
              py-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
            "
            >
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSearch;