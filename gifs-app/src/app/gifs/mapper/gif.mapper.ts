import { Gif } from '../interfaces/gif.interface';
import type { GifphyItem } from '../interfaces/gifphy.interfaces';

export class GifMapper {
  static mapGifphyItemToGif(item: GifphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGifphyItemsToGifArray(items: GifphyItem[]): Gif[] {
    return items.map(this.mapGifphyItemToGif);
  }
}
