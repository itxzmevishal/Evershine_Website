import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    return () =>
      window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-yellow-500 z-[9999] transition-all duration-150"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}

export default ScrollProgress;