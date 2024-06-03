// components/Logo.vue
export interface Logo {
  class?: string;
}

// components/MenuDesktop.vue
export interface MenuDesktop {
  navWrapperClass?: string;
  navLinksContainerClass?: string;
  navItemClass?: string;
  dropdownnavWrapperClass?: string;
  dropdownTriggerWrapperClass?: string;
  dropdownTriggerClass?: string;
  dropdownMenuClass?: string;
  dropdownLinkClass?: string;
  colorModeSwitchClass?: string;
}

// components/MenuMobile.vue
export interface MenuMobile {
  mobileMenuOpen: boolean;
  headerData: Record<string, any>;
  navigation: Array<any>;
}

// components/Alert.vue
export interface Alert {
  class?: string;
}

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
