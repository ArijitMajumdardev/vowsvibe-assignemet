import { CircleUserRound } from "lucide-react";

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="mt-6 pt-6 border-t border-[#e56f6f]">
      <div className="text-base sm:text-lg font-semibold">Customer Ratings</div>
      <hr className="border-[#e56f6f] my-4" />

      {reviews.map((review, i) => (
        <div key={i} className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <CircleUserRound strokeWidth={1} size={24} />
            <span className="text-sm sm:text-base font-medium">
              {review.user}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500">
            {review.date}
          </span>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            {review.text}
          </p>
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {review.images.map((img, idx) => (
              <div key={idx} className="w-24 h-24 bg-gray-200 shrink-0 rounded">
                <img src={img} alt="review" />
              </div>
            ))}
          </div>
          {i < reviews.length - 1 && <hr className="border-[#e56f6f] my-4" />}
        </div>
      ))}
    </div>
  );
}
