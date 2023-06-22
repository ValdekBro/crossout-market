import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ 
  timestamps: false, 
  collection: 'market_items',
  timeseries: {
    timeField: 'collectedAt',
    metaField: 'metadata',
    granularity: 'seconds'
  }
})
export class MarketItem {
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
  
  @Prop()
  collectedAt: Date
  
  @Prop()
  metadata: {
    name: string
  }
}

export type MarketItemDocument = HydratedDocument<MarketItem>;
export const MatchSchema = SchemaFactory.createForClass(MarketItem);