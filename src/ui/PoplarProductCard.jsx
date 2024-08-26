import { star } from "../assets/icons";

export default function PoplarProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-base leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-base leading-normal font-semibold font-palanquin">
        {name}
      </h3>

      <p className="mt-2 font-semibold font-montserrat text-coral-red text-base leading-normal">
        {price}
      </p>
    </div>
  );
}
