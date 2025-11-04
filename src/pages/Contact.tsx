import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  const providers = [
    {
      name: "Florence Reynaud",
      phone: "(518) 593-4254",
      email: "flo@opwplattsburgh.com",
      //link: { text: "About me", url: "#" }
    },
    {
      name: "Angie Durgan",
      phone: "(518) 637-3948",
      //email: "",
      link: { text: "Holistic Hands Massage", url: "https://www.holistichandsmassage.net/" }
    },
    {
      name: "Shannon Bessette",
      phone: "(518) 578-8753",
      email: "shannonbessettept@gmail.com",
      link: { text: "shannonbessettept.com", url: "https://shannonbessettept.com" }
    },
    {
      name: "Jessica Wimett",
      phone: "(518) 570-2255",
      email: "Jess.RitualWellness@gmail.com",
      link: { text: "RitualMassage", url: "https://www.facebook.com/RitualOnPointWellness/" }
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
                  {provider.email && (
                  <div className="flex items-center gap-3 text-foreground">
                    <Mail className="w-5 h-5 text-secondary" />
                    <a href={`mailto:${provider.email}`} className="hover:text-primary transition-colors break-all">
                      {provider.email}
                    </a>
                  </div>
                  )}
                  {provider.link && (
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
                  )}
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
                  src="https://www.google.com/maps?q=14+Latour+Ave,+Plattsburgh,+NY+12901&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="On Point Wellness location map at 14 Latour Ave, Plattsburgh, NY 12901"
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
