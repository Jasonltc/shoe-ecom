import { motion } from "framer-motion";
export default function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) {
  return (
    <motion.button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-base leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow Right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </motion.button>
  );
}
