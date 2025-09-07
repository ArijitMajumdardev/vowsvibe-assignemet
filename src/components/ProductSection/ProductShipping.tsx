export default function ProductShipping({
  deliveryDate,
}: ProductShippingProps) {
  return (
    <div className="mt-6">
      <div className="text-base sm:text-lg font-semibold">Shipping</div>
      <div className="text-sm text-gray-500 sm:text-base font-medium">
        Get it by{" "}
        <span className="text-black md:text-[#e56f6f] font-semibold">
          {deliveryDate}
        </span>
      </div>
    </div>
  );
}
