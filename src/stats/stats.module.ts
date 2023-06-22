import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketItem, MarketItemSchema } from 'src/schemas/market-item.schema';
import { UsersModule } from 'src/users/users.module';
import { StatsController } from './stats.controller';
import { MarketItemsService } from './market-item.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MarketItem.name, schema: MarketItemSchema }]),
    UsersModule,
  ],
  controllers: [StatsController],
  providers: [MarketItemsService],
  exports: [MarketItemsService]
})
export class StatsModule {}