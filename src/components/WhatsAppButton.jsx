import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Client ka number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;