import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constant";
import ShoeCard from "../ui/ShoeCard";
import Button from "../ui/Button";

export default function Hero() {
  const [bigShoeImg, setBigShieImg] = useState(bigShoe1);

  return (
    <div
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 info-section"
    >
      <div className="relative flex flex-col justify-center items-start w-full pt-28 xl:w-2/5 ">
        <p className="text-xl font-monstserrat text-coral-red md:text-3xl">
          Our Summer Collection
        </p>

        <h1 className="mt-10 font-palanquin text-4xl font-bold md:text-8xl">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> shoes
        </h1>

        <p className="paragraph mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-10">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-xl font-palanquin font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm leading-7 font-monstserrat text-slate-gray md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="big shoe 1"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] left-[50%] -translate-x-[50%]">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShieImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
