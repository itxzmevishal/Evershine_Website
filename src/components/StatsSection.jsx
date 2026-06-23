import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function StatsSection() {
  const stats = [
    {
      number: 25,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Happy Families",
    },
    {
      number: 50,
      suffix: "+",
      label: "Trusted Partners",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="text-center"
            >
              <h2 className="text-yellow-400 text-4xl md:text-5xl font-bold">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h2>

              <p className="text-gray-300 mt-3 text-sm md:text-base">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsSection;