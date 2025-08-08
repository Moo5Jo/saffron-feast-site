import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Impressum</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rechtliche Informationen gemäß § 5 TMG
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl">Angaben gemäß § 5 TMG</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Betreiber</h3>
                  <div className="space-y-1">
                    <p><strong>Saffron Palace Restaurant GmbH</strong></p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Kontakt</h3>
                  <div className="space-y-1">
                    <p><strong>Telefon:</strong> +49 123 456 789</p>
                    <p><strong>E-Mail:</strong> info@saffronpalace.de</p>
                    <p><strong>Website:</strong> www.saffronpalace.de</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Geschäftsführung</h3>
                  <p>Max Mustermann</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Registereintrag</h3>
                  <div className="space-y-1">
                    <p><strong>Handelsregister:</strong> Amtsgericht Musterstadt</p>
                    <p><strong>Registernummer:</strong> HRB 12345</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Umsatzsteuer-ID</h3>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                  <p><strong>DE123456789</strong></p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Aufsichtsbehörde</h3>
                  <div className="space-y-1">
                    <p>Gewerbeaufsichtsamt Musterstadt</p>
                    <p>Behördenstraße 456</p>
                    <p>12345 Musterstadt</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                  <div className="space-y-1">
                    <p><strong>Berufsbezeichnung:</strong> Gastronomiebetrieb</p>
                    <p><strong>Zuständige Kammer:</strong> Industrie- und Handelskammer Musterstadt</p>
                    <p><strong>Verliehen durch:</strong> Deutschland</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Haftung für Inhalte</h3>
                  <p className="text-sm text-muted-foreground">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Haftung für Links</h3>
                  <p className="text-sm text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Urheberrecht</h3>
                  <p className="text-sm text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Impressum;