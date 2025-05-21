
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const AboutUs = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About Us" },
  ];
  
  return (
    <MainLayout>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-700 mb-6">
          Founded in 2005, Consult has grown from a small team of dedicated professionals to a leading business consulting firm with a global reach. Our mission is to help businesses of all sizes overcome challenges, seize opportunities, and achieve sustainable growth.
        </p>
        <p className="text-gray-700">
          This is a placeholder for the About Us page. In a complete implementation, this would include more detailed information about the company's history, values, mission, and team members.
        </p>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
