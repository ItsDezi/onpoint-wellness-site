import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-wellness.jpg";
import galleryMassage from "@/assets/gallery-massage.jpg";
import galleryAcupuncture from "@/assets/gallery-acupuncture.jpg";
import galleryHolistic from "@/assets/gallery-holistic.jpg";
import galleryCranio from "@/assets/gallery-cranio.jpg";

const Home = () => {
  const services = [
    {
      title: "Massage Therapy",
      description: "Massage therapy involves the manipulation of soft tissues, including muscles, tendons, and ligaments, to promote relaxation, reduce stress, and alleviate pain. Techniques vary widely, ranging from Swedish and deep tissue massage to sports and therapeutic massage. It is commonly used for its physical and mental health benefits, such as improved circulation, reduced muscle tension, and enhanced overall well-being."
    },
    {
      title: "Craniosacral Therapy",
      description: "Craniosacral therapy is a gentle, non-invasive bodywork technique that focuses on the rhythmic movement of the cranial bones, sacrum, and cerebrospinal fluid. Practitioners use light touch to release restrictions in these areas, aiming to enhance the body's natural healing processes. It is used to treat a variety of conditions, including migraines, chronic pain, and stress-related disorders."
    },
    {
      title: "Holistic Medicine",
      description: "Holistic medicine is an approach to healthcare that considers the whole person, including physical, emotional, mental, and spiritual aspects, in the pursuit of optimal health and wellness. It emphasizes the interconnection of these dimensions and often integrates conventional medicine with alternative therapies. The goal is to treat the root causes of illness rather than just symptoms, promoting overall balance and well-being."
    },
    {
      title: "Acupuncture",
      description: "Acupuncture is a traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to balance the flow of energy, or \"qi.\" It is used to treat various conditions, including pain, stress, and chronic illnesses, by stimulating the body's natural healing processes. Acupuncture is often integrated with other treatments for a comprehensive approach to health and wellness."
    }
  ];

  const galleryImages = [
    { src: galleryMassage, alt: "Peaceful massage therapy session in calming environment" },
    { src: galleryAcupuncture, alt: "Acupuncture treatment with traditional Chinese medicine techniques" },
    { src: galleryHolistic, alt: "Holistic wellness items including herbs and essential oils" },
    { src: galleryCranio, alt: "Gentle craniosacral therapy session for healing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage} 
          alt="Serene wellness center interior with natural lighting and healing atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Welcome to On Point Wellness
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
            A holistic approach to health and healing
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-12">
            Our Healing Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of therapeutic services designed to promote healing, 
            balance, and overall wellness
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg">14 Latour Ave.</p>
          <p className="mt-2">Each provider works independently - please contact them directly to schedule</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
