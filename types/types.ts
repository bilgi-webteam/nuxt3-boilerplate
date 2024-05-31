// types/types.ts
export interface MenuProps {
  menuClass: string;
  menuContainerClass: string;
  ColorModeClass: string;
}

export interface MobileMenuProps {
  mobileMenuOpen: boolean;
  headerData: Record<string, any>;
  navigation: Array<any>;
}

export interface AlertProps {
  class?: string;
}

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
