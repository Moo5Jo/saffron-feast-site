import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Calendar, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reservierung = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: '',
    privacyAccepted: false,
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePrivacyChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      privacyAccepted: checked
    }));
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.date !== '' &&
      formData.time !== '' &&
      formData.guests !== '' &&
      formData.privacyAccepted
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      toast({
        title: "Reservierungsanfrage gesendet",
        description: "Wir werden uns in Kürze bei Ihnen melden, um Ihre Reservierung zu bestätigen.",
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        message: '',
        privacyAccepted: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Reservierung</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sichern Sie sich Ihren Platz in unserem Restaurant. 
              Wir freuen uns darauf, Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Phone Reservation */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Phone className="text-primary" size={28} />
                    Telefonische Reservierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="mb-6">
                      <Phone className="mx-auto text-primary mb-4" size={64} />
                      <h3 className="text-2xl font-bold mb-2">Rufen Sie uns an</h3>
                      <p className="text-muted-foreground mb-6">
                        Für eine sofortige Reservierung erreichen Sie uns telefonisch.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                      <p className="text-3xl font-bold text-primary mb-2">+49 123 456 789</p>
                      <p className="text-sm text-muted-foreground">Täglich von 16:00 - 22:00 Uhr</p>
                    </div>
                    
                    <Button 
                      asChild 
                      className="mt-6 bg-gradient-saffron hover:shadow-warm transition-all"
                      size="lg"
                    >
                      <a href="tel:+49123456789">Jetzt anrufen</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Online Reservation Form */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Calendar className="text-primary" size={28} />
                    Online Reservierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Ihr Vorname"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Ihr Nachname"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ihre.email@beispiel.de"
                        required
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Datum *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Uhrzeit *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <Label htmlFor="guests">Anzahl Personen *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        value={formData.guests}
                        onChange={handleInputChange}
                        placeholder="Anzahl der Gäste"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Besondere Wünsche (optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Besondere Wünsche, Allergien oder Anmerkungen..."
                        className="min-h-[100px]"
                      />
                    </div>

                    {/* Privacy Checkbox */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacyAccepted}
                        onCheckedChange={handlePrivacyChange}
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed">
                        Ich stimme der <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu 
                        und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Reservierungsanfrage verwendet werden. *
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={!isFormValid()}
                      className="w-full bg-gradient-saffron hover:shadow-warm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      Reservierungsanfrage senden
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      * Pflichtfelder müssen ausgefüllt werden
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="shadow-warm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Users className="mx-auto text-primary mb-3" size={40} />
                      <h3 className="font-semibold mb-2">Gruppenbuchungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Für Gruppen ab 8 Personen empfehlen wir eine telefonische Reservierung.
                      </p>
                    </div>
                    <div>
                      <Clock className="mx-auto text-primary mb-3" size={40} />
                      <h3 className="font-semibold mb-2">Stornierung</h3>
                      <p className="text-sm text-muted-foreground">
                        Kostenlose Stornierung bis 24 Stunden vor dem Reservierungstermin.
                      </p>
                    </div>
                    <div>
                      <Calendar className="mx-auto text-primary mb-3" size={40} />
                      <h3 className="font-semibold mb-2">Bestätigung</h3>
                      <p className="text-sm text-muted-foreground">
                        Sie erhalten innerhalb von 24 Stunden eine Bestätigung per E-Mail.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reservierung;