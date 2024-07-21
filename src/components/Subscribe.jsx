import Button from "../ui/Button";

export default function Subscribe() {
  return (
    <div className="max-container" id="contact-us">
      <h3 className="text-4xl leading-[68px] text-center font-palanquin font-bold mb-8">
        Sign up from <span className="text-coral-red">updates</span> &
        Newsletter
      </h3>
      <div className="w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </div>
  );
}
