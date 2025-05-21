
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Blog = () => {
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Our Blog" },
  ];
  
  return (
    <MainLayout>
      <PageHeader title="Our Blog" breadcrumbs={breadcrumbs} />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest Insights & Articles</h2>
        <p className="text-gray-700 mb-6">
          Stay updated with the latest industry trends, business insights, and expert advice from our team of consultants. Our blog covers a wide range of topics to help you navigate the complex business landscape.
        </p>
        <p className="text-gray-700">
          This is a placeholder for the Blog page. In a complete implementation, this would include a collection of blog articles with categories, search functionality, and other features.
        </p>
      </div>
    </MainLayout>
  );
};

export default Blog;
