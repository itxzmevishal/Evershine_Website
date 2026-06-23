import { motion } from "framer-motion";

function AssociationsSection() {
  const partners = [
    "Architecture",
    "Construction",
    "Engineering",
    "Legal",
    "Finance",
    "Landscape",
    "Interior Design",
    "Technology",
  ];

  return (
    <section className="bg-[#F8F6F2] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
            Our Associations
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Trusted Partners
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry-leading partners to deliver
            exceptional quality, innovation and long-term value.
          </p>

        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
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
              <span className="text-lg font-semibold text-gray-800 text-center">
                {partner}
              </span>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AssociationsSection;