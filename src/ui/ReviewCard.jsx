import { star } from "../assets/icons";

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] mb-8"
      />

      <p className="paragraph text-center mb-4 lg:max-w-sm">{feedback}</p>

      <div className="flex justify-center items-center gap-2.5 mb-4">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-container m-0"
        />

        <p className="text-base font-monstserrat text-slate-gray">{rating}</p>
      </div>

      <h3 className="font-palanquin text-2xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}
