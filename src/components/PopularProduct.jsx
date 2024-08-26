import { products } from "../constant";
import PoplarProductCard from "../ui/PoplarProductCard";

export default function PopularProduct() {
  return (
    <div id="products" className="info-section mt-20">
      <h2 className="text-2xl font-palanquin font-bold mb-8 md:text-4xl">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="paragraph mb-16">
        Experience top-notch quality and style with our sought after selection.
        Discover a world of comfort, design and value.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-14 lg:grid-cols-4">
        {products.map((product) => (
          <PoplarProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
}
