import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Speisekarte = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const pdfFiles = Array.from(files).filter(file => file.type === 'application/pdf');
      if (pdfFiles.length > 0) {
        setUploadedFiles(prev => [...prev, ...pdfFiles]);
        toast({
          title: "PDF hochgeladen",
          description: `${pdfFiles.length} PDF-Datei(en) erfolgreich hochgeladen.`,
        });
      } else {
        toast({
          title: "Fehler",
          description: "Bitte nur PDF-Dateien hochladen.",
          variant: "destructive",
        });
      }
    }
  };

  const openPDF = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, '_blank');
  };

  const sampleMenuItems = [
    {
      category: "Vorspeisen",
      items: [
        { name: "Samosa", description: "Knusprige Teigtaschen mit Kartoffel-Erbsen-Füllung", price: "€ 6,50" },
        { name: "Pakora", description: "In Kichererbsenteig frittiertes Gemüse", price: "€ 7,00" },
        { name: "Chicken Tikka", description: "Marinierte Hähnchenstücke aus dem Tandoor", price: "€ 9,50" },
      ]
    },
    {
      category: "Hauptgerichte",
      items: [
        { name: "Butter Chicken", description: "Zartes Hähnchen in cremiger Tomaten-Butter-Sauce", price: "€ 16,90" },
        { name: "Lamb Vindaloo", description: "Würziges Lammcurry mit Kartoffeln", price: "€ 18,90" },
        { name: "Palak Paneer", description: "Hausgemachter Käse in Spinatsauce", price: "€ 14,90" },
        { name: "Biryani", description: "Aromatischer Basmatireis mit Fleisch oder Gemüse", price: "€ 15,90" },
      ]
    },
    {
      category: "Getränke",
      items: [
        { name: "Lassi", description: "Traditionelles Joghurtgetränk", price: "€ 4,50" },
        { name: "Chai", description: "Würziger indischer Tee", price: "€ 3,50" },
        { name: "Mango Juice", description: "Frischer Mangosaft", price: "€ 4,00" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Unsere Speisekarte</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere Auswahl an authentischen indischen Gerichten, 
              zubereitet mit traditionellen Rezepten und frischen Gewürzen.
            </p>
          </div>
        </section>

        {/* PDF Upload Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="text-primary" size={24} />
                  Speisekarten-PDFs verwalten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pdf-upload">PDF-Speisekarte hochladen</Label>
                    <Input
                      id="pdf-upload"
                      type="file"
                      accept="application/pdf"
                      multiple
                      onChange={handleFileUpload}
                      className="mt-2"
                    />
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2">Hochgeladene Speisekarten:</h3>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                            <div className="flex items-center gap-2">
                              <FileText className="text-primary" size={20} />
                              <span className="font-medium">{file.name}</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openPDF(file)}
                              className="flex items-center gap-2"
                            >
                              <Download size={16} />
                              Öffnen
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sample Menu Items */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Beispiel Speisekarte</h2>
            <div className="space-y-8">
              {sampleMenuItems.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start pb-4 border-b border-border last:border-b-0">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-primary">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Speisekarte;