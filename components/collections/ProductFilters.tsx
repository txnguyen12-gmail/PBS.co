"use client";

interface ProductFiltersProps {
  subcategories: string[];
  active: string | null;
  onSelect: (subcategory: string | null) => void;
}

export default function ProductFilters({
  subcategories,
  active,
  onSelect,
}: ProductFiltersProps) {
  if (subcategories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
          active === null
            ? "bg-charcoal text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {subcategories.map((sub) => (
        <button
          key={sub}
          onClick={() => onSelect(sub)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
            active === sub
              ? "bg-charcoal text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {sub}
        </button>
      ))}
    </div>
  );
}
