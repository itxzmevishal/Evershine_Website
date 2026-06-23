import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed
bottom-24
right-6
z-50
w-16
h-16
rounded-full
bg-black
text-white
shadow-2xl
hover:bg-yellow-500
hover:text-black
transition-all
duration-300
hover:scale-110
          "
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
}

export default BackToTop;
