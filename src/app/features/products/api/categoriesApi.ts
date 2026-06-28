import { apiClient } from "../../../../shared/api/apiClient";

export type Category = {
  id: string;
  name: string;
  nameAr: string;
};

type BackendCategory = {
  id: number;
  name: string;
  name_ar: string;
};

function normalizeCategory(category: BackendCategory): Category {
  return {
    id: String(category.id),
    name: category.name,
    nameAr: category.name_ar,
  };
}

export async function getCategories(): Promise<Category[]> {
  const response = await apiClient<BackendCategory[]>("/categories/");

  return response.map(normalizeCategory);
}