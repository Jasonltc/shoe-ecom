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
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProduct />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
