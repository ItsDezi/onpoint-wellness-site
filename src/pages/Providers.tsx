import Navigation from "@/components/Navigation";
import ProviderCard from "@/components/ProviderCard";
import florenceImg from "@/assets/provider-florence.jpg";
import angieImg from "@/assets/provider-angie.jpg";
import shannonImg from "@/assets/provider-shannon.jpg";
import jessicaImg from "@/assets/provider-jessica.jpg";

const Providers = () => {
  const providers = [
    {
      name: "Florence Reynaud",
      services: ["Acupuncture", "Massage Therapy", "Traditional Chinese Medicine (TCM)"],
      image: florenceImg
    },
    {
      name: "Angie Durgan",
      services: ["Deep Tissue Massage", "Sports Massage", "Prenatal Massage", "Cupping Therapy", "Swedish Massage", "Trigger Point Therapy"],
      image: angieImg
    },
    {
      name: "Shannon Bessette",
      services: ["Craniosacral Therapy", "Physical Therapy", "TMJ Specialist"],
      image: shannonImg
    },
    {
      name: "Jessica Wimett",
      services: ["Restorative Therapy", "Deep Tissue Massage", "Trigger Point Therapy", "Therapeutic Modalities"],
      image: jessicaImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              Our Providers
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced practitioners dedicated to your health and well-being
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {providers.map((provider, index) => (
              <ProviderCard 
                key={index}
                name={provider.name}
                services={provider.services}
                image={provider.image}
              />
            ))}
          </div>

          <div className="text-center bg-muted/50 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-lg text-foreground italic">
              Please note that each provider works independently and hours may differ.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-accent text-accent-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg">14 Latour Ave.</p>
          <p className="mt-2">Each provider works independently - please contact them directly to schedule</p>
        </div>
      </footer>
    </div>
  );
};

export default Providers;
