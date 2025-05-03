
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showNewsletterDialog, setShowNewsletterDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowNewsletterDialog(false);
      // In a real app, you would send the email to a backend service
      toast.success("Thank you for subscribing to our newsletter!");
      console.log("Submitted email:", email);
      setEmail("");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && registerEmail && password) {
      setShowRegisterDialog(false);
      // In a real app, you would send the data to a backend service
      toast.success(`Registration successful! You selected the ${selectedPlan} plan.`);
      console.log("Registered user:", { name, email: registerEmail, selectedPlan });
      setName("");
      setRegisterEmail("");
      setPassword("");
      setSelectedPlan("free");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-5xl font-bold mb-4 leading-tight text-[#064E3B]">
                Discover<br /> Real <span className="bg-[#2f9959] text-white px-2 rounded transition-all duration-300 hover:bg-[#10B981]">Nature</span>
              </h2>  
              <p className="text-lg mb-6 text-[#064E3B]">
                Nature is awe-inspiring — from towering mountains to the tiniest wildflower, it reminds us of the beauty, balance, and wonder woven into every corner of our planet.
              </p>
              <Button 
                onClick={() => setShowRegisterDialog(true)} 
                className="bg-[#34D399] hover:bg-[#10B981] text-white font-semibold"
              >
                Register
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Picnic scene" 
                className="rounded-2xl shadow-xl border border-green-200 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Why Nature Heals */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#064E3B]">Why Nature Heals</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">Stress Relief</h3>
                <p className="text-[#064E3B]/80">Studies show just 20 minutes in nature can significantly lower stress hormone levels.</p>
              </div>
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🌄</div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">Mental Clarity</h3>
                <p className="text-[#064E3B]/80">Natural environments enhance creativity and problem-solving by up to 50%.</p>
              </div>
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">Family Bonding</h3>
                <p className="text-[#064E3B]/80">Shared nature experiences create lasting memories and strengthen relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kenya's Natural Treasures */}
        <section className="py-12 bg-[#ECFDF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#064E3B]">Kenya's Natural Treasures</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg mb-6 text-[#064E3B]">From the misty forests of Aberdare to the golden savannas of Tsavo, Kenya offers diverse landscapes just waiting to be explored.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-[#064E3B]/80">
                    <span className="mr-2">🌳</span> Over 50 protected forests and reserves
                  </li>
                  <li className="flex items-center text-[#064E3B]/80">
                    <span className="mr-2">🏞️</span> 23 national parks showcasing unique ecosystems
                  </li>
                  <li className="flex items-center text-[#064E3B]/80">
                    <span className="mr-2">🚶‍♂️</span> Hundreds of kilometers of scenic hiking trails
                  </li>
                  <li className="flex items-center text-[#064E3B]/80">
                    <span className="mr-2">🦜</span> Home to 1,100+ bird species and iconic wildlife
                  </li>
                </ul>
                <Link to="/sites">
                  <Button variant="outline" className="border-[#34D399] text-[#064E3B] hover:bg-[#34D399] hover:text-white">
                    Plan Your Nature Escape
                  </Button>
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
                  alt="Nature scene" 
                  className="rounded-2xl shadow-xl border border-green-200 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Reconnect With Nature?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Sign up for our monthly nature inspiration newsletter and get a free guide to Kenya's hidden natural gems.</p>
            <Button 
              onClick={() => setShowNewsletterDialog(true)} 
              className="bg-white text-[#10B981] hover:bg-gray-100 font-semibold"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Register Dialog */}
      <Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create your account</DialogTitle>
            <DialogDescription>
              Join Snack & Snap Adventures today to discover Kenya's natural treasures
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="password" className="text-right text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Create a password"
                type="password"
                required
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Choose a Plan</h3>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-4 grid-cols-1 md:grid-cols-3">
                <div>
                  <Card className={`border-2 ${selectedPlan === 'free' ? 'border-green-500' : 'border-gray-200'} transition-all`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="font-bold">Free</Label>
                      </div>
                      <div className="text-2xl font-bold mb-1">$0<span className="text-sm font-normal">/month</span></div>
                      <ul className="text-sm space-y-1">
                        <li>• Access to public sites</li>
                        <li>• Basic user profile</li>
                        <li>• Monthly newsletter</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className={`border-2 ${selectedPlan === 'premium' ? 'border-green-500' : 'border-gray-200'} transition-all`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium" className="font-bold">Premium</Label>
                      </div>
                      <div className="text-2xl font-bold mb-1">$9.99<span className="text-sm font-normal">/month</span></div>
                      <ul className="text-sm space-y-1">
                        <li>• All free features</li>
                        <li>• Exclusive site access</li>
                        <li>• Booking discounts</li>
                        <li>• Priority support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className={`border-2 ${selectedPlan === 'family' ? 'border-green-500' : 'border-gray-200'} transition-all`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="family" id="family" />
                        <Label htmlFor="family" className="font-bold">Family</Label>
                      </div>
                      <div className="text-2xl font-bold mb-1">$19.99<span className="text-sm font-normal">/month</span></div>
                      <ul className="text-sm space-y-1">
                        <li>• All premium features</li>
                        <li>• Up to 4 family accounts</li>
                        <li>• Group bookings</li>
                        <li>• Free picnic supplies</li>
                        <li>• 24/7 VIP support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                type="submit" 
                className="bg-[#34D399] hover:bg-[#10B981] text-white font-semibold"
              >
                Register
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Newsletter Dialog */}
      <Dialog open={showNewsletterDialog} onOpenChange={setShowNewsletterDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to our newsletter</DialogTitle>
            <DialogDescription>
              Get monthly inspiration and a free guide to Kenya's hidden natural gems
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="newsletter-email" className="text-right text-sm font-medium">
                Email
              </label>
              <input
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-[#34D399] hover:bg-[#10B981] text-white font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
