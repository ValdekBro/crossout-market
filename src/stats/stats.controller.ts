import { Body, Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { MarketItem } from 'src/schemas/market-item.schema';
import { MarketItemsService } from './market-item.service';

@Controller('stats')
export class StatsController {
    constructor(
        private marketItemsService: MarketItemsService,
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('/')
    async connectedToMatch(@Request() req, @Body() body: any) {
        return this.marketItemsService.create({
            ...body,
            collectedAt: new Date(body.collectedAt)
        });
    }
}