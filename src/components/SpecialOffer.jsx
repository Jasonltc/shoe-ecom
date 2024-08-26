import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../ui/Button";

export default function SpecialOffer() {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 info-section">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offer-photo"
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-2xl mb-8 font-palanquin capitalize font-bold lg:max-w-lg md:text-4xl">
          <span className="text-coral-red">Special</span> Offer
        </h2>

        <p className="paragraph mb-6">
          Embark on a shopping Journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="paragraph">
          Navigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white"
            border-Color="border-slate-gray"
            text-color="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
}
