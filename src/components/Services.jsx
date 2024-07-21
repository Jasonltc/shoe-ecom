import ServiceCard from "../ui/ServiceCard";
import { services } from "../constant";

export default function Services() {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
}
