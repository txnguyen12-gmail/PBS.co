export default function BlogPostLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-6" />
      <div className="h-10 w-3/4 bg-gray-200 rounded mb-4" />
      <div className="h-5 w-1/2 bg-gray-200 rounded mb-10" />
      <div className="h-72 bg-gray-200 rounded-xl mb-10" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
}
