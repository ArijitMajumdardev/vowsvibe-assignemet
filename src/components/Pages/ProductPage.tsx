import SimilarToThis from "../SimilarProductSection/SimilarToThis";
import TopPicksForYou from "../SimilarProductSection/TopPicksForYou";
import YouMightAlsoLike from "../SimilarProductSection/YouMightAlsoLike";
import ProductPath from "../ProductSection/ProductPath";
import ProductMedia from "../ProductSection/ProductMedia";
import ProductHeader from "../ProductSection/ProductHeader";
import ProductRatingPrice from "../ProductSection/ProductRatingPrice";
import ProductActions from "../ProductSection/ProductActions";
import ProductUSPs from "../ProductSection/ProductUSPs";
import ProductOffers from "../ProductSection/ProductOffers";
import ProductDelivery from "../ProductSection/ProductDelivery";
import ProductDescription from "../ProductSection/ProductDescription";
import ProductShipping from "../ProductSection/ProductShipping";
import ProductReviews from "../ProductSection/ProductReviews";
import { useState } from "react";

const RecomendedProductsData = [
  {
    image: "image_url_1.jpg",
    title: "Rose Gold Earrings with alloy",
    price: 1999,
    originalPrice: 2999,
    isBestSeller: true,
    rating: 4,
  },
  {
    image: "image_url_2.jpg",
    title: "Elegant Diamond Necklace",
    price: 4500,
    originalPrice: 6000,
    isBestSeller: false,
    rating: 3,
  },
  {
    image: "image_url_3.jpg",
    title: "Silver Plated Ring",
    price: 899,
    originalPrice: 1200,
    isBestSeller: true,
    rating: 4,
  },
  {
    image: "image_url_4.jpg",
    title: "Classic Gold Bracelet",
    price: 7200,
    originalPrice: 9500,
    isBestSeller: false,
    rating: 3,
  },
  {
    image: "image_url_5.jpg",
    title: "Minimalist Studs",
    price: 1500,
    originalPrice: 2000,
    isBestSeller: true,
    rating: 4,
  },
  {
    image: "image_url_6.jpg",
    title: "Hoop Earrings",
    price: 1250,
    originalPrice: 1800,
    isBestSeller: false,
    rating: 4,
  },
];

export default function ProductPage() {
  const [product] = useState({
    title: "Gold-Plated Pearls Necklace",
    subtitle: "Made with 925 Silver",
    rating: 4.1,
    reviewsCount: 23,
    price: 1600,
    originalPrice: 2000,
    discount: "20% off",
    usps: [
      { label: "Easy 30 Day Return", icon: "Box" },
      { label: "925 Silver Plating", icon: "Silver" },
      { label: "6-Month Warranty", icon: "Shield" },
      { label: "Premium Gold", icon: "Medal" },
    ],
    description: [
      { label: "Material", value: "925 Sterling Silver" },
      { label: "Plating", value: "18K Gold" },
      { label: "Weight", value: "10 grams" },
      { label: "Stone Type", value: "Premium Jerkin" },
    ],
    deliveryDate: "25 Sept",
    offers: [
      "Coupon can be applied at checkout",
      "Extra 5% off with prepaid order",
    ],
    reviews: [
      {
        user: "Anu",
        date: "15/08/24",
        text: "Such a gorgeous necklace. Got many compliments as well. Absolutely loved it.",
        images: ["img1.png", "img2.png"],
      },
      {
        user: "Anu",
        date: "15/08/24",
        text: "Looks beautiful 🐱❤️❤️❤️ Go for it girls 🤩💝🌸 the quality is good ..",
        images: ["img3.png"],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white text-gray-800 font-montserrat ">
      {/* Product Path*/}
      <ProductPath />

      {/* Main */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 px-4 lg:pl-[6rem] lg:pt-[2.5rem] pt-6 max-w-7xl mx-auto">
        {/* Left Media */}
        <ProductMedia />

        {/* Right Details */}
        <div className="lg:col-span-6 w-full lg:max-w-[32rem] mx-auto flex flex-col">
          <ProductHeader title={product.title} subtitle={product.subtitle} />
          <ProductRatingPrice
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
          />

          <div className="mt-6 flex flex-col gap-6">
            <ProductActions />
            <ProductUSPs usps={product.usps} />
            <ProductOffers offers={product.offers} />
            <ProductDelivery />
          </div>

          <hr className="border-[#e56f6f]" />
          <ProductDescription description={product.description} />
          <ProductShipping deliveryDate={product.deliveryDate} />
          <ProductReviews reviews={product.reviews} />
        </div>
      </main>

      {/* Desktop / Tablet sections */}
      <div className="hidden md:block">
        {/* Similar to this */}
        <SimilarToThis products={RecomendedProductsData} />

        {/* Top picks for you */}
        <TopPicksForYou products={RecomendedProductsData} />
      </div>

      {/* You Might also Like */}
      <YouMightAlsoLike products={RecomendedProductsData} />
    </div>
  );
}
