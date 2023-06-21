import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarketItemDocument = HydratedDocument<MarketItem>;

export enum EMatchStatus {
  PENDING = 'pending',
  STARTED = 'started',
  FINISHED = 'end',
}

@Schema({ timestamps: true })
export class MarketItem {
  
  @Prop()
  player1: string

  @Prop()
  player2: string

  //{ enum: [EMatchStatus.FINISHED, EMatchStatus.STARTED, EMatchStatus.PENDING] }
  @Prop()
  status: EMatchStatus

  @Prop()
  winner?: string

  @Prop()
  winnerRatingChange?: number

  @Prop()
  socketRoomId: string

  @Prop({ default: false })
  isPrivate: boolean
}

export const MatchSchema = SchemaFactory.createForClass(MarketItem);