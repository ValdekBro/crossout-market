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
        console.log(body)
        return this.marketItemsService.create({
            metadata: {
                name: body.name
            },
            sellMin: body.sellMin,
            buyMax: body.buyMax,
            sellLots: body.sellLots,
            buyLots: body.buyLots,
            profit: body.profit,
            ROI: body.ROI,
            collectedAt: new Date(body.collectedAt)
        });
    }
}