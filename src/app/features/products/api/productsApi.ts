import { apiClient } from "../../../../shared/api/apiClient";

export type Product = {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  categoryId: string;
  featured: boolean;
};

type BackendProduct = {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  price: string;
  image: string;
  created_at: string;
  category: number;
};

function normalizeImageUrl(imageUrl: string): string {
  if (!imageUrl) {
    return "🍮";
  }

  return imageUrl.replace(
    "http://sayid-qishtih.baronlearning.com",
    "https://sayid-qishtih.baronlearning.com"
  );
}

function normalizeProduct(product: BackendProduct): Product {
  return {
    id: product.id,
    name: product.name,
    nameAr: product.name_ar,
    description: product.description,
    descriptionAr: product.description_ar,
    price: Number(product.price),
    image: normalizeImageUrl(product.image),
    categoryId: String(product.category),
    featured: false,
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient<BackendProduct[]>("/products/");

  return response.map(normalizeProduct);
}