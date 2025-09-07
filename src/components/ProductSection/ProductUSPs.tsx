import type React from "react";



export default function ProductUSPs({ usps }: ProductUSPsProps) {
  const icons: Record<string, React.ReactNode> = {
    Box: <img src="/return.png" alt="return" className="size-8" />,
    Silver: <img src="/silver.svg" alt="silver" className="size-8" />,
    Shield: <img src="/warranty.png" alt="warrenty" className="size-8" />,
    Medal: <img src="/gold.png" alt="premium" className="size-8" />,
  };

  return (
    <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {usps.map((usp, i) => (
        <div key={i} className="flex items-center gap-2">
          {icons[usp.icon]} <span>{usp.label}</span>
        </div>
      ))}
    </div>
  );
}
