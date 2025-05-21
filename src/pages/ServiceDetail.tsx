
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Define service details based on serviceId
  const serviceDetails = {
    'business-growth': {
      title: 'Business Growth Plan',
      description: 'Our comprehensive business growth solutions to help your company reach its full potential.',
      breadcrumbs: [
        { label: "Home", path: "/" },
        { label: "Our Services", path: "/services" },
        { label: "Business Growth" },
      ],
    },
    'financial-planning': {
      title: 'Financial Planning',
      description: 'Strategic financial planning and management to secure your business future.',
      breadcrumbs: [
        { label: "Home", path: "/" },
        { label: "Our Services", path: "/services" },
        { label: "Financial Planning" },
      ],
    },
    'marketing-analysis': {
      title: 'Marketing Analysis',
      description: 'Data-driven marketing strategies to amplify your brand presence.',
      breadcrumbs: [
        { label: "Home", path: "/" },
        { label: "Our Services", path: "/services" },
        { label: "Marketing Analysis" },
      ],
    },
    'tax-management': {
      title: 'Tax Management',
      description: 'Optimize your tax position with our expert guidance.',
      breadcrumbs: [
        { label: "Home", path: "/" },
        { label: "Our Services", path: "/services" },
        { label: "Tax Management" },
      ],
    },
  };
  
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  
  if (!service) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <PageHeader title={service.title} breadcrumbs={service.breadcrumbs} />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h2>
        <p className="text-gray-700 mb-6">
          {service.description}
        </p>
        <p className="text-gray-700">
          This is a placeholder for the {service.title} service detail page. In a complete implementation, this would include detailed information about this specific service.
        </p>
      </div>
    </MainLayout>
  );
};

export default ServiceDetail;
