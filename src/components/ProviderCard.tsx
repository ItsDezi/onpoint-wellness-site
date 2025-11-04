import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProviderCardProps {
  name: string;
  services: string[];
  image: string;
}

const ProviderCard = ({ name, services, image }: ProviderCardProps) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={`${name}, wellness provider offering ${services.join(", ")}`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-foreground flex items-start">
              <span className="text-secondary mr-2">•</span>
              {service}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
