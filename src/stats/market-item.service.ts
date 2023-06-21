import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MarketItem } from 'src/schemas/market-item.schema';

@Injectable()
export class MarketItemsService {
  constructor(
    @InjectModel(MarketItem.name) private Match: Model<MarketItem>
  ) {}

  async create(dto: MarketItem): Promise<MarketItem> {
    const createdEntity = new this.Match(dto);
    return createdEntity.save();
  }
}