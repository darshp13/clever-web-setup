
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  breadcrumbs: {
    label: string;
    path?: string;
  }[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="bg-[#1a2c48] text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        
        <div className="flex flex-wrap items-center text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
