import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class MarketItem {
  
  @Prop()
  name: string

  @Prop()
  sellMin: number

  @Prop()
  sellLots: number

  @Prop()
  buyMax: number

  @Prop()
  buyLots: number

  @Prop()
  profit: number

  @Prop()
  ROI: number
  
}

export type MarketItemDocument = HydratedDocument<MarketItem>;
export const MatchSchema = SchemaFactory.createForClass(MarketItem);