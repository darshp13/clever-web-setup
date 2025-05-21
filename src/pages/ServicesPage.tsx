
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/services" },
    { label: "Service Details" },
    { label: "Service Single" },
  ];

  return (
    <MainLayout>
      <PageHeader title="Business Growth Plan" breadcrumbs={breadcrumbs} />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Featured image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Business meeting with consultant and clients"
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Service content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Business Growth Plan</h2>
              <p className="text-gray-700 mb-6">
                We are dedicated to providing top-notch marketing services that drive growth, innovation, and efficiency in your business. With a team of experts working at Consult, we bring years of expertise, know-how, and solutions to help you reach your business objectives and overcome challenges.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to connect with your business on a deeper level, understanding your goals, objectives, strengths, weaknesses, and challenges. We use this knowledge to align our strategies with your goals so we can inspire growth through experts that understand the challenges you're facing.
              </p>
            </div>
            
            {/* Unlock potential section */}
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Unlock the potential of your business</h2>
              <p className="text-gray-700 mb-8">
                Our teams of consultants bring real-world solutions as we've faced the same challenges and today's competitive landscape. 
                Experts with a range of specialized consultancy services designed to revolutionize the way you do business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-blue-500 rounded-full h-14 w-14 min-w-14 flex items-center justify-center text-white">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Strategic Planning</h3>
                    <p className="text-gray-600 text-sm">
                      Our approach is consultative. We work collaboratively, ensuring everyone supports team goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-500 rounded-full h-14 w-14 min-w-14 flex items-center justify-center text-white">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-600 text-sm">
                      Your business is our priority. We work collaboratively, ensuring ongoing support through all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Benefits section */}
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Benefits Business Growth Plan</h2>
              <p className="text-gray-700 mb-8">
                Consultants in this area focus on financial analysis, budgeting, cost reduction, investment decisions, and capital allocation. They help businesses optimize resources, improve financial hygiene, and expand into new markets effectively.
              </p>
              
              <div className="grid md:grid-cols-3 gap-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Management Consulting</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Investment Consulting</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Opportunity Consulting</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Financial Consulting</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Law Design and Growth</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                    <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                  </div>
                  <span className="font-semibold">Process Valuing</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8 italic">
                "We provide consulting solutions for a variety of industries, providing personalized service that suits your needs. Strong growth starts at sustainable strategies."
              </p>
            </div>
            
            {/* More services section */}
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">View Our More Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Financial Planning */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Financial Planning" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Financial Planning</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our team provides comprehensive financial analysis and guides on critical financial decisions for your business.
                    </p>
                    <Link to="/services/financial-planning" className="text-blue-600 text-sm font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
                
                {/* Business Growth Plan */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Business Growth Plan" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Business Growth Plan</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our team provides comprehensive growth analysis and strategies tailored to your needs and market.
                    </p>
                    <Link to="/services/business-growth" className="text-blue-600 text-sm font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
                
                {/* Marketing Analysis */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Marketing Analysis" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Best Marketing Analysis</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our team provides comprehensive market research and insights to build effective marketing strategies.
                    </p>
                    <Link to="/services/marketing-analysis" className="text-blue-600 text-sm font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
                
                {/* Tax Management */}
                <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Tax Management" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold mb-2">Tax Management Plan</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our team provides comprehensive tax planning and guidance to optimize your tax position legally.
                    </p>
                    <Link to="/services/tax-management" className="text-blue-600 text-sm font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ section */}
            <div className="pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What types of consulting services do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What can I expect during an initial consultation?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    How does your consulting process work?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What is the first step in your consulting?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What industries do you specialize in?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    What sets your consulting firm apart from others?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    Does data and analytics play your consulting approach?
                  </AccordionTrigger>
                  <AccordionContent className="bg-gray-50 px-6 pb-4">
                    Our consulting practice involves four key steps: Discovery, Strategy, Implementation, and Optimization. We tailor these to understanding your challenges, creating solutions to overcome them, and developing your business for sustainable growth.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-[#336699] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Expert Law Advice On Criminal Strategies</h2>
              <p className="text-gray-200">We believe that informed clients make better decisions. As part of our service, we'll help you learn to spot and avoid potential problems.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link to="/contact">Get Our Advice</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-600">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
