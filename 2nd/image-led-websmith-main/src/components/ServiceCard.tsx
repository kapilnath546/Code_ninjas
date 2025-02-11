
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  imagePath: string;
}

const ServiceCard = ({ title, description, buttonText, imagePath }: ServiceCardProps) => {
  return (
    <div className="relative bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:animate-card-hover border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            {buttonText}
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={imagePath} alt={title} className="w-full max-w-[300px] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
