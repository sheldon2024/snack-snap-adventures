
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Index = () => {
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showNewsletterDialog, setShowNewsletterDialog] = useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowNewsletterDialog(false);
      // In a real app, you would send the email to a backend service
      console.log("Submitted email:", email);
      setEmail("");
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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email" className="text-right text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="password" className="text-right text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                className="col-span-3 flex h-10 rounded-md border border-input bg-background px-3 py-2"
                placeholder="Create a password"
                type="password"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={() => setShowRegisterDialog(false)} 
              className="bg-[#34D399] hover:bg-[#10B981] text-white font-semibold"
            >
              Register
            </Button>
          </div>
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
