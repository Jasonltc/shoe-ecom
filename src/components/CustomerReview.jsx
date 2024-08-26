import { reviews } from "../constant";
import ReviewCard from "../ui/ReviewCard";

export default function CustomerReview() {
  return (
    <div className="info-section py-14">
      <h3 className="font-palanquin text-center text-2xl font-bold mb-8 md:text-4xl">
        What our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>

      <p className="paragraph mb-10 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </div>
  );
}
