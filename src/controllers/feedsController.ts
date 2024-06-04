import { JsonController, Get, Post, Body, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import FeedsService from '../services/feedsService';
import { Service } from 'typedi';


@Service()
@JsonController('/feeds')
export class FeedsController {
    constructor(private feedsService: FeedsService) { }

    @Get('/')
    getAll(@Req() request: Request, @Res() response: Response) {
        return this.feedsService.getAllFeeds();
    }

    @Post('/')
    create(@Body() feed: any, @Req() request: Request, @Res() response: Response) {
        return this.feedsService.createFeed(feed);
    }
}