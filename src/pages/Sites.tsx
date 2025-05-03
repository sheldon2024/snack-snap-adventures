
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface SiteProps {
  id: number;
  name: string;
  description: string;
  image: string;
  activities: string[];
  location: string;
}

const sitesData: SiteProps[] = [
  {
    id: 1,
    name: "Karura Forest",
    description: "An urban forest with beautiful walking trails, waterfalls, and diverse wildlife just minutes from Nairobi's city center.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    activities: ["Hiking", "Cycling", "Picnicking", "Bird watching"],
    location: "Nairobi"
  },
  {
    id: 2,
    name: "Tigoni",
    description: "Lush green tea plantations and scenic landscapes offering a tranquil escape from city life.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    activities: ["Tea plantation tours", "Picnicking", "Photography", "Hiking"],
    location: "Limuru"
  },
  {
    id: 3,
    name: "Gikambura Forest",
    description: "A serene forest with captivating trails, indigenous trees and a peaceful atmosphere perfect for nature lovers.",
    image: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    activities: ["Hiking", "Picnicking", "Bird watching", "Forest bathing"],
    location: "Kikuyu"
  },
  {
    id: 4,
    name: "Oloolua Nature Trail",
    description: "A hidden gem featuring caves, a waterfall, and varied vegetation perfect for day hikes and picnics.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    activities: ["Cave exploration", "Hiking", "Picnicking", "Photography"],
    location: "Karen"
  },
  {
    id: 5,
    name: "Hells Gate National Park",
    description: "Dramatic landscapes with towering cliffs, geothermal features, and amazing hiking and climbing opportunities.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    activities: ["Rock climbing", "Cycling", "Hiking", "Wildlife viewing", "Camping"],
    location: "Naivasha"
  },
];

const Sites = () => {
  const [selectedSite, setSelectedSite] = useState<SiteProps | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = (site: SiteProps) => {
    setSelectedSite(site);
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-[#10B981] to-[#34D399] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Picnic Sites</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover Kenya's most beautiful natural treasures for your next outdoor adventure.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitesData.map((site) => (
                <Card key={site.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={site.image} 
                      alt={site.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{site.name}</CardTitle>
                    <CardDescription>{site.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2">{site.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => handleViewDetails(site)}
                      className="bg-[#34D399] hover:bg-[#10B981] text-white"
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Site Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-md">
          {selectedSite && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedSite.name}</DialogTitle>
                <DialogDescription>
                  {selectedSite.location}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="mb-4 overflow-hidden rounded-md">
                  <img 
                    src={selectedSite.image} 
                    alt={selectedSite.name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="mb-4">{selectedSite.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSite.activities.map((activity, index) => (
                      <span 
                        key={index}
                        className="bg-[#ECFDF5] text-[#064E3B] px-2 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={() => setShowDetails(false)} 
                  className="bg-[#34D399] hover:bg-[#10B981] text-white"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sites;
