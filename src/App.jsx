import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import PopularProduct from "./components/PopularProduct";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReview from "./components/CustomerReview";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="">
        {/* <nav></nav> */}
        <section>
          <Hero />
        </section>
        <section>
          <PopularProduct />
        </section>
        <section>
          <SuperQuality />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue">
          <CustomerReview />
        </section>
        <section className="w-full">
          <Subscribe />
        </section>
        <section className="bg-black">
          <Footer />
        </section>
      </main>
    </>
  );
}
