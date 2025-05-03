
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-[#10B981] to-[#34D399] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're passionate about connecting people with Kenya's natural treasures.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#064E3B]">Our Story</h2>
                <p className="text-lg mb-6 text-[#064E3B]/80">
                  Snack & Snap Adventures was born out of a deep love for Kenya's diverse landscapes and a desire to help others connect with nature in meaningful ways. What started as weekend adventures among friends has grown into a community of nature enthusiasts dedicated to exploring and preserving Kenya's natural beauty.
                </p>
                <p className="text-lg mb-6 text-[#064E3B]/80">
                  Our mission is simple: to help people discover the healing power of nature through accessible outdoor experiences. We believe that reconnecting with the natural world can transform lives, reduce stress, and inspire a deeper commitment to conservation.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                  alt="Friends enjoying nature" 
                  className="rounded-2xl shadow-xl border border-green-200 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#064E3B]">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#064E3B]">Accessibility</h3>
                <p className="text-[#064E3B]/80">
                  We believe nature should be accessible to everyone. We focus on identifying and promoting locations that are suitable for various physical abilities and experience levels.
                </p>
              </div>
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#064E3B]">Conservation</h3>
                <p className="text-[#064E3B]/80">
                  Our activities promote responsible tourism and conservation. We partner with local environmental groups to support preservation efforts across Kenya.
                </p>
              </div>
              <div className="bg-[#ECFDF5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#064E3B]">Community</h3>
                <p className="text-[#064E3B]/80">
                  We're building a community of nature lovers who share experiences, knowledge, and a commitment to protecting Kenya's natural heritage.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#064E3B]">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">Sarah Kimani</h3>
                <p className="text-[#10B981] mb-2">Founder & Lead Guide</p>
                <p className="text-[#064E3B]/80">
                  Wildlife biologist and passionate outdoor enthusiast with over 10 years of experience.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">David Omondi</h3>
                <p className="text-[#10B981] mb-2">Community Organizer</p>
                <p className="text-[#064E3B]/80">
                  Former park ranger with extensive knowledge of Kenya's conservation efforts.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#064E3B]">Janet Muthoni</h3>
                <p className="text-[#10B981] mb-2">Environmental Educator</p>
                <p className="text-[#064E3B]/80">
                  Passionate about teaching the next generation about environmental conservation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
