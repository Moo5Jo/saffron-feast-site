import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star, Utensils } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Warum Saffron Palace?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie die Geheimnisse der authentischen indischen Küche in unserem eleganten Restaurant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-warm hover:shadow-deep transition-all">
              <CardContent className="p-8">
                <Utensils className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Authentische Küche</h3>
                <p className="text-muted-foreground">
                  Traditionelle Rezepte aus verschiedenen Regionen Indiens, zubereitet mit originalen Gewürzen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-warm hover:shadow-deep transition-all">
              <CardContent className="p-8">
                <Star className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Premium Qualität</h3>
                <p className="text-muted-foreground">
                  Nur die frischesten Zutaten und hochwertigste Gewürze für ein unvergessliches Geschmackserlebnis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-warm hover:shadow-deep transition-all">
              <CardContent className="p-8">
                <Clock className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-4">Täglich Frisch</h3>
                <p className="text-muted-foreground">
                  Alle Gerichte werden täglich frisch zubereitet für maximalen Geschmack und Qualität.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
