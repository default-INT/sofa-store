import { IFurniture } from '@root/Shared/types/furniture';

export const getFurnitureSource = (furniture?: IFurniture) => {
  if (!furniture) return null;
  if (!furniture.src) return null;
  if (typeof furniture.src === 'string') return { uri: furniture.src };

  return furniture.src;
};
