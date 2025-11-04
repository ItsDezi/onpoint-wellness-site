import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  const providers = [
    {
      name: "Florence Reynaud",
      phone: "(518) 593-4254",
      email: "[email protected]",
      link: { text: "About me", url: "#" }
    },
    {
      name: "Brooke Hughes",
      phone: "(518) 578-0896",
      email: "[email protected]",
      link: { text: "HalyconMassage.com", url: "https://halyconmassage.com" }
    },
    {
      name: "Shannon Bessette",
      phone: "(518) 578-8753",
      email: "[email protected]",
      link: { text: "shannonbessettept.com", url: "https://shannonbessettept.com" }
    },
    {
      name: "Jessica Wimett",
      phone: "(518) 570-2255",
      email: "[email protected]",
      link: { text: "RitualMassage", url: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule an appointment with one of our practitioners
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {providers.map((provider, index) => (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">
                    {provider.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-secondary" />
                    <a href={`tel:${provider.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                      {provider.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Mail className="w-5 h-5 text-secondary" />
                    <a href={`mailto:${provider.email}`} className="hover:text-primary transition-colors break-all">
                      {provider.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <ExternalLink className="w-5 h-5 text-secondary" />
                    <a 
                      href={provider.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {provider.link.text}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location Section with Map */}
          <section className="mt-16">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-8">
              Visit Us
            </h2>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.8!2d-73.7!3d43.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzAwLjAiTiA3M8KwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=14+Latour+Ave"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="On Point Wellness location map at 14 Latour Ave"
                />
              </div>
              <div className="p-6 bg-muted/30">
                <p className="text-xl text-center font-serif text-foreground">
                  <strong>On Point Wellness</strong>
                </p>
                <p className="text-lg text-center text-foreground mt-2">
                  14 Latour Ave.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-accent text-accent-foreground py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg">14 Latour Ave.</p>
          <p className="mt-2">Each provider works independently - please contact them directly to schedule</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
