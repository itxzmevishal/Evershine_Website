import { motion } from "framer-motion";

function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Evershine Solara",
      status: "New Launch",
      description:
        "Premium 3 & 4 BHK residences designed around luxury, comfort and modern architecture.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Evershine Waterfront",
      status: "Featured Project",
      description:
        "Waterfront living with premium amenities, open landscapes and timeless design.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >

          <div>
            <p className="uppercase tracking-[4px] text-yellow-600 text-sm font-semibold mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Signature Residences
            </h2>
          </div>

          <button className="border border-gray-300 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 w-fit">
            View All Projects
          </button>

        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{ y: -12 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="
                    w-full
                    h-[280px]
                    md:h-[350px]
                    lg:h-[420px]
                    object-cover
                  "
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-yellow-600 text-sm font-semibold uppercase tracking-wider"
                >
                  {project.status}
                </motion.span>

                <h3 className="text-3xl font-bold text-gray-900 mt-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {project.description}
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  View Project
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjectsSection;