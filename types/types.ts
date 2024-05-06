// components/BilgiNews.vue
export interface NewsItem {
  id: string;
  title: string;
  short_16words: string;
  url: string;
  image: string;
}

export interface NewsResult {
  results: NewsItem[];
}


// components/Products.vue
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
