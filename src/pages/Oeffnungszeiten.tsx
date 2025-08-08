import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Phone, MapPin, Calendar } from 'lucide-react';

const Oeffnungszeiten = () => {
  const openingHours = [
    { day: "Montag", hours: "17:00 - 23:00", isToday: false },
    { day: "Dienstag", hours: "17:00 - 23:00", isToday: false },
    { day: "Mittwoch", hours: "17:00 - 23:00", isToday: false },
    { day: "Donnerstag", hours: "17:00 - 23:00", isToday: false },
    { day: "Freitag", hours: "17:00 - 24:00", isToday: false },
    { day: "Samstag", hours: "12:00 - 24:00", isToday: false },
    { day: "Sonntag", hours: "12:00 - 23:00", isToday: true }, // Example: today is Sunday
  ];

  const specialHours = [
    { occasion: "Heiligabend (24.12.)", hours: "17:00 - 22:00" },
    { occasion: "Silvester (31.12.)", hours: "17:00 - 02:00" },
    { occasion: "Neujahr (01.01.)", hours: "Geschlossen" },
    { occasion: "Karfreitag", hours: "Geschlossen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Öffnungszeiten</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wir freuen uns darauf, Sie in unserem Restaurant begrüßen zu dürfen. 
              Hier finden Sie unsere aktuellen Öffnungszeiten.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Regular Opening Hours */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Clock className="text-primary" size={28} />
                    Reguläre Öffnungszeiten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {openingHours.map((day, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between items-center p-3 rounded-lg border transition-colors ${
                          day.isToday 
                            ? 'bg-primary/10 border-primary/30' 
                            : 'bg-muted/50 border-border'
                        }`}
                      >
                        <span className={`font-medium ${day.isToday ? 'text-primary' : ''}`}>
                          {day.day}
                          {day.isToday && ' (Heute)'}
                        </span>
                        <span className={`font-semibold ${day.isToday ? 'text-primary' : ''}`}>
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Hinweis:</strong> Küche schließt jeweils 30 Minuten vor Restaurantschluss.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Special Hours & Contact */}
              <div className="space-y-8">
                
                {/* Special Opening Hours */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Calendar className="text-primary" size={28} />
                      Besondere Öffnungszeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {specialHours.map((special, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg border">
                          <span className="font-medium">{special.occasion}</span>
                          <span className={`font-semibold ${
                            special.hours === 'Geschlossen' ? 'text-destructive' : ''
                          }`}>
                            {special.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Kontakt & Anfahrt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="text-primary" size={20} />
                        <div>
                          <p className="font-semibold">Telefon</p>
                          <p className="text-muted-foreground">+49 123 456 789</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-primary" size={20} />
                        <div>
                          <p className="font-semibold">Adresse</p>
                          <p className="text-muted-foreground">
                            Musterstraße 123<br />
                            12345 Musterstadt
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm text-muted-foreground">
                        <strong>Parkplätze:</strong> Kostenlose Parkplätze direkt vor dem Restaurant verfügbar.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Oeffnungszeiten;