interface DrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

interface Iproducts {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
    isBestSeller: boolean;
    rating:number
}

type ProductUSPsProps = {
  usps: { label: string; icon: string }[];
};

type ProductShippingProps = {
  deliveryDate: string;
};

type ProductReviewsProps = {
  reviews: { user: string; date: string; text: string; images: string[] }[];
};


type ProductRatingPriceProps = {
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  discount: string;
};


type ProductOffersProps = {
  offers: string[];
};

type ProductHeaderProps = {
  title: string;
  subtitle: string;
};

type ProductDescriptionProps = {
  description: { label: string; value: string }[];
};
