
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-[#1a2c48] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Business Consulting for Sustainable Growth
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We help businesses overcome challenges and achieve their goals through strategic planning, expert guidance, and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-600">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of business consulting services to help your organization thrive in today's competitive landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Business Growth Plan" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Business Growth Plan</h3>
                <p className="text-gray-600 mb-4">
                  Strategic planning and implementation to accelerate your business growth and achieve sustainable success.
                </p>
                <Link to="/services" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            {/* Service Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Financial Planning" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Planning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive financial analysis, budgeting strategies, and investment planning for long-term prosperity.
                </p>
                <Link to="/services" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            {/* Service Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Marketing Analysis" 
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Marketing Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Data-driven marketing strategies and market research to amplify your brand presence and customer engagement.
                </p>
                <Link to="/services" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#336699] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-200">
                Schedule a free consultation with our expert team to discuss your business challenges and how we can help you overcome them.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-[#336699] hover:bg-gray-100">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
