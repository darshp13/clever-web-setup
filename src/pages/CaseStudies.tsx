
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const CaseStudies = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Case Studies" },
  ];
  
  return (
    <MainLayout>
      <PageHeader title="Case Studies" breadcrumbs={breadcrumbs} />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Success Stories</h2>
        <p className="text-gray-700 mb-6">
          Explore our portfolio of successful client partnerships and learn how our consulting services have helped businesses across various industries achieve their goals and overcome challenges.
        </p>
        <p className="text-gray-700">
          This is a placeholder for the Case Studies page. In a complete implementation, this would include a collection of detailed case studies showcasing our work with various clients.
        </p>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;
