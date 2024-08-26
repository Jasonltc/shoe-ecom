import Button from "../ui/Button";
import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <div
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full info-section"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-2xl font-palanquin capitalize mb-8 font-bold lg:max-w-lg md:text-4xl">
          We Provide You<span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="paragraph">
          Ensuring premium comfort and style, our Meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={570}
          className="object-contain"
        />
      </div>
    </div>
  );
}
