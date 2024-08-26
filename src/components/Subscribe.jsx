import Button from "../ui/Button";

export default function Subscribe() {
  return (
    <div className="container mb-12 text-center mx-auto" id="contact-us">
      <h3 className="text-3xl text-center font-palanquin font-bold mb-8">
        Sign up from <span className="text-coral-red">updates</span> &
        Newsletter
      </h3>

      <div className="w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full max-w-xl mx-auto">
        <input type="text" placeholder="subscribe" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </div>
  );
}
