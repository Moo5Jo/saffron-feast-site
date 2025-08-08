import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Willkommen im
          <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Saffron Palace
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
          Erleben Sie authentische indische Küche in einem eleganten Ambiente. 
          Unsere Meisterköche verwenden traditionelle Gewürze und Zubereitungsarten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-saffron hover:shadow-warm transition-all text-lg px-8 py-3"
          >
            <Link to="/speisekarte">Speisekarte ansehen</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10 transition-all text-lg px-8 py-3"
          >
            <Link to="/reservierung">Jetzt reservieren</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-gentle-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;