
export default function ProductHeader({ title, subtitle }: ProductHeaderProps) {
  return (
    <div className="mb-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
        {title}
      </h1>
      <p className="text-base sm:text-lg font-medium text-gray-700 mt-1">
        {subtitle}
      </p>
    </div>
  );
}
