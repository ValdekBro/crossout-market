import { Body, Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { MarketItemsService } from './market-item.service';

@Controller('stats')
export class StatsController {
    constructor(
        private marketItemsService: MarketItemsService,
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('/')
    async connectedToMatch(@Request() req, @Body() body) {
        console.log(body)
        return this.marketItemsService.create(body);
    }
}