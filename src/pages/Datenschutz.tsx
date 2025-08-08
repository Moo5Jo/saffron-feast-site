import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Datenschutzerklärung</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl">Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">1. Datenschutz auf einen Blick</h3>
                  <h4 className="font-semibold mb-2">Allgemeine Hinweise</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Datenerfassung auf unserer Website</h4>
                  <p className="text-sm text-muted-foreground">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">2. Verantwortliche Stelle</h3>
                  <div className="space-y-1 text-sm">
                    <p><strong>Saffron Palace Restaurant GmbH</strong></p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Deutschland</p>
                    <p><strong>Telefon:</strong> +49 123 456 789</p>
                    <p><strong>E-Mail:</strong> datenschutz@saffronpalace.de</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">3. Datenerfassung auf unserer Website</h3>
                  
                  <h4 className="font-semibold mb-2">Cookies</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
                    keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
                    effektiver und sicherer zu machen.
                  </p>

                  <h4 className="font-semibold mb-2">Server-Log-Dateien</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes 
                    Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                  </p>

                  <h4 className="font-semibold mb-2">Kontaktformular und Reservierungsanfragen</h4>
                  <p className="text-sm text-muted-foreground">
                    Wenn Sie uns per Kontaktformular oder für Reservierungsanfragen Anfragen zukommen lassen, werden Ihre 
                    Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">4. Zweck der Datenverarbeitung</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Bearbeitung von Reservierungsanfragen</li>
                    <li>Beantwortung von Kontaktanfragen</li>
                    <li>Bereitstellung unserer Website-Funktionen</li>
                    <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">5. Rechtsgrundlage</h3>
                  <p className="text-sm text-muted-foreground">
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), 
                    Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) 
                    oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">6. Speicherdauer</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der genannten 
                    Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Reservierungsanfragen werden 
                    nach Abschluss der Reservierung bzw. nach Ablauf von 3 Jahren gelöscht.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">7. Ihre Rechte</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sie haben jederzeit das Recht:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                    <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                    <li>Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                    <li>Ihre personenbezogenen Daten in einem strukturierten Format zu erhalten</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">8. Widerruf Ihrer Einwilligung</h3>
                  <p className="text-sm text-muted-foreground">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                    eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail 
                    an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">9. Beschwerderecht</h3>
                  <p className="text-sm text-muted-foreground">
                    Falls Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen 
                    die DSGVO verstößt, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground">
                    <strong>Stand dieser Datenschutzerklärung:</strong> Januar 2024
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

export default Datenschutz;