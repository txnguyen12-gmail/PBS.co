import Breadcrumb from "./Breadcrumb";

interface CategoryHeaderProps {
  name: string;
  description: string;
  productCount: number;
}

export default function CategoryHeader({
  name,
  description,
  productCount,
}: CategoryHeaderProps) {
  return (
    <div className="bg-charcoal py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Collections", href: "/collections" },
              { label: name },
            ]}
          />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-2">
          {name}
        </h1>
        <p className="text-white/70 max-w-2xl mb-2">{description}</p>
        <p className="text-white/50 text-sm">{productCount} products</p>
      </div>
    </div>
  );
}
