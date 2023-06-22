import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class MarketItemMetadata {
  @Prop({ required: true })
  name: string
}
const MarketItemMetadataSchema = SchemaFactory.createForClass(MarketItemMetadata)

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
  @Prop({ required: true })
  sellMin: number

  @Prop({ required: true })
  sellLots: number

  @Prop({ required: true })
  buyMax: number

  @Prop({ required: true })
  buyLots: number

  @Prop({ required: true })
  profit: number

  @Prop({ required: true })
  ROI: number
  
  @Prop({ required: true })
  collectedAt: Date
  
  @Prop({ required: true, type: MarketItemMetadataSchema })
  metadata: MarketItemMetadata
}

export type MarketItemDocument = HydratedDocument<MarketItem>;
export const MarketItemSchema = SchemaFactory.createForClass(MarketItem);