export default function ProductDescription({
  description,
}: ProductDescriptionProps) {
  return (
    <div className="mt-6">
      <div className="text-base sm:text-lg font-semibold mb-2">
        Product Description
      </div>
      <ul className="space-y-2 text-sm sm:text-base">
        {description.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <img src="/received.svg" alt="received" />
            <span className="font-semibold">{item.label}:</span>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
